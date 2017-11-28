
// 正常进球
class Penalty01 extends eui.UILayer {
    public constructor(){
        super();
        this.drawPenalty01();
    }
    private topTeam:eui.Image;
    private bottomTeam:eui.Image;

    // 收集球
    private collFootball = [] ;
    
    //  进度使用
    private lineTimeMask:egret.Bitmap ;
    private lineTime:egret.Shape ;

    private drawPenalty01(){
        let bgPenalty:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-penalty_png'));
        this.addChild(bgPenalty);

        // 插入上边遮罩层
        // let bgMask:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-mask_png'));
        // bgMask.x = 38;
        // bgMask.y = 2;
        // this.addChild(bgMask);
         // 上边队伍icon
        this.topTeam = new eui.Image();
        // this.topTeam.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.topTeam.width = 24;
        this.topTeam.height = 24;
        this.topTeam.x = 38;
        this.topTeam.y = 2;
        //this.topTeam.mask = bgMask;  // 不需要遮罩了
        this.addChild(this.topTeam);
       
        //插入遮罩层
        // let bgMask02:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-mask_png'));
        // bgMask02.x = 38;
        // bgMask02.y = 30;
        // this.addChild(bgMask02);
         // 下边队伍icon
        this.bottomTeam = new eui.Image();
        // this.bottomTeam.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.bottomTeam.width = 24;
        this.bottomTeam.height = 24;
        this.bottomTeam.x = 38;
        this.bottomTeam.y = 30;
        // this.bottomTeam.mask = bgMask02;// 不需要遮罩了
        this.addChild(this.bottomTeam);

        // 时间轴
        let timer:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-time_png'));
        timer.x = 80;
        timer.y = 15;
        timer.scaleY = 0.98;
        this.addChild(timer);

        //进度条
        this.lineTime = new egret.Shape();
        this.lineTime.graphics.lineStyle(7,0xffffff);
        this.lineTime.graphics.moveTo(91,29);
        this.lineTime.graphics.lineTo(449,29);
        this.lineTime.graphics.endFill();
        this.addChild( this.lineTime );

        this.lineTimeMask = new egret.Bitmap(RES.getRes('scoreMask_png'));
        this.lineTimeMask.x = 80;
        this.lineTimeMask.y = 24;
        this.lineTimeMask.mask = this.lineTime ;
        this.addChild(this.lineTimeMask);
        // egret.Tween.get( this.lineTimeMask ).to( { x : 449 } ,8000 ) //358/449

         //上边队伍点球情况  (上面进球y=1，下面y=34， x>90&&x<426)
        // let penaltyIn = this.drawIn();
        // penaltyIn.x = 90;
        // penaltyIn.y = 1;
        // this.addChild(penaltyIn);
        // //下边队伍点球情况
        // let penaltyIn2 = this.drawIn(); 
        // penaltyIn2.x = 426;
        // penaltyIn2.y = 34;
        // this.addChild(penaltyIn2);

    }

    /**
     *  更新 进球头像
     */
    private upFootballImg( imgObj ){
        if( imgObj ){
            this.topTeam.source = imgObj.l_img ;
            this.bottomTeam.source = imgObj.r_img ;
        }
    }

    /**
     *  创建球  
     * timeline
     * [{at_time: "729", is_team: "home"}, {at_time: "5113", is_team: "home"}]
     *    matchid 为了修改 点球
     */
    private createFootball( timeline:any , is_extratime:any ,matchid:any ){
        let len = timeline.length ;
        let $store = window['store'] ;
        let currFieldStr = '';
        let l_score = 0 ;
        let r_score = 0 ;

        // if( this.lineTime.parent ){
        //     this.addChild( this.lineTime );
        // }
        // if( this.lineTimeMask ){
        //     this.lineTimeMask.x = 80 ;
        //     this.lineTimeMask.y = 24 ;
        //     this.lineTimeMask.mask = this.lineTime ;
        //     this.addChild(this.lineTimeMask) ;
        // }

        if( is_extratime ){
            console.log('1825')
            if( is_extratime === '0' ){
                egret.Tween.get( this.lineTimeMask ).to( { x : 358 } , 18000 ) 
                console.log('18000')
            }else if( is_extratime === '1' ){
                egret.Tween.get( this.lineTimeMask ).to( { x : 449 } , 25000 ) 
                console.log('25000')
            }
        }
        //  显示出 0 ：0
        if( matchid ){
            currFieldStr = $store['matFindField'][ matchid ] ;
            $store['$fieldContain'][currFieldStr].writeScore( l_score + ':' + r_score )
        }        

        for( let i = 0 ; i< len ; i++ ){
            if( timeline[i] ){
                setTimeout(()=>{
                    if( timeline[i].is_team === 'home' ){
                        let penaltyIn = this.drawIn();
                        penaltyIn.x = 336 * parseInt ( timeline[i].at_time ) / 7200 + 90 ;
                        penaltyIn.y = 1;
                        this.collFootball.push( penaltyIn );
                        this.addChild(penaltyIn);
                        if( matchid ){
                            l_score++ ;
                        }
                    }else{
                        let penaltyIn2 = this.drawIn();
                        penaltyIn2.x = 336 * parseInt ( timeline[i].at_time ) / 7200 + 90 ;
                        penaltyIn2.y = 34;
                        this.collFootball.push( penaltyIn2 );
                        this.addChild(penaltyIn2);
                        if( matchid ){
                            r_score++ ;
                        }
                    }

                    if( matchid ){
                        currFieldStr = $store['matFindField'][ matchid ] ;
                        $store['$fieldContain'][currFieldStr].writeScore( l_score + ':' + r_score )
                    }

                }, ( parseInt( timeline[i].at_time ) / 7200 * 25000 ))
            }
        }
    }

    /**
     *  清除 所有的球
     */
    private clearAllball(){
        let len = null ;
        if( this.collFootball ){
            len = this.collFootball.length ;
            for( let i = 0;i < len ; i++ ){
                if( this.collFootball[i] && this.collFootball[i].parent ){
                    this.removeChild( this.collFootball[i] );
                }
            }
        }
        // if( this.lineTime.parent ){
        //     this.removeChild( this.lineTime );
        // }
        // if( this.lineTimeMask.parent ){
        //     this.removeChild(this.lineTimeMask) ;
        // }
    }

    private drawIn(){
        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-in_png'));
        return img;
    }
    private drawOut(){
        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-out_png'));
        return img;
    }
}
