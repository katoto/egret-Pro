
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
    private lineTime:egret.Bitmap ;

    private timer:egret.Bitmap;
    private timer2:egret.Bitmap ;

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
        // this.topTeam.mask = bgMask;  // 不需要遮罩了
        this.addChild(this.topTeam);
       
        //插入遮罩层
        // let bgMask02:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-mask_png'));
        // bgMask02.x = 38;
        // bgMask02.y = 30;
        // this.addChild(bgMask02);
         // 下边队伍icon
        this.bottomTeam = new eui.Image();
        this.bottomTeam.width = 24;
        this.bottomTeam.height = 24;
        this.bottomTeam.x = 38;
        this.bottomTeam.y = 30;
        // this.bottomTeam.mask = bgMask02;// 不需要遮罩了
        this.addChild(this.bottomTeam);

        // 时间轴
        this.timer = new egret.Bitmap(RES.getRes('penalty-time_png'));
        this.timer.x = 80;
        this.timer.y = 15;
        // timer.scaleY = 0.98;
        this.addChild(this.timer);


        this.timer2  = new egret.Bitmap(RES.getRes('penalty-time2_png'));
        this.timer2.x = 80;
        this.timer2.y = 15;
        // this.addChild( this.timer2 );

        //进度条
        // this.lineTime = new egret.Shape();
        // this.lineTime.graphics.lineStyle(7,0xffffff);
        // this.lineTime.graphics.moveTo(91,29);
        // this.lineTime.graphics.lineTo(449,29);
        // this.lineTime.graphics.endFill();
        // this.addChild( this.lineTime );

        // this.lineTimeMask = new egret.Bitmap(RES.getRes('scoreMask_png'));
        // this.lineTimeMask.x = 80;
        // this.lineTimeMask.y = 24;
        // this.lineTimeMask.mask = this.lineTime ;
        // this.addChild(this.lineTimeMask);
        // egret.Tween.get( this.lineTimeMask ).to( { x : 200 } ,8000 ) //358/449

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

        this.lineTime = new egret.Bitmap(RES.getRes('scoreMask_png'));
        this.lineTime.x = 85;
        this.lineTime.y = 26;
        this.lineTime.width = 1;
        this.addChild(this.lineTime);
        
    }


    /**
     * 处理层级
     */

    private upLineTimeLev(){
        if( this.timer.parent ){
            if( this['getChildIndex']( this.lineTime ) < this['getChildIndex']( this.timer ) ){
                this.swapChildren( this.lineTime , this.timer ) ;
            }
        }
        if( this.timer2.parent ){
            if( this['getChildIndex']( this.lineTime ) < this['getChildIndex']( this.timer2 ) ){
                this.swapChildren( this.lineTime , this.timer2 ) ;
            }
        }

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
        var self = this;
        if( is_extratime ){  //358  449
            this.upLineTimeLev();
            if( is_extratime === '0' ){
                egret.Tween.get( this.lineTime ).to( { width : 273 } , 18750 ).call(()=>{
                    self.lineTime.width = 0;
                });
            }else if( is_extratime === '1' ){

                setTimeout(()=>{
                    if( this.timer.parent ){
                        this.removeChild( this.timer );
                    }
                    this.addChild( this.timer2 );
                    this.upLineTimeLev();
                },18750 )
                egret.Tween.get( this.lineTime ).to( { width : 360 } , 25000 ).call(()=>{
                    self.lineTime.width = 0;
                });
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
                        penaltyIn.x = 336 * parseInt ( timeline[i].at_time ) / 7200 + 100 ;
                        penaltyIn.y = 1;
                        this.collFootball.push( penaltyIn );
                        this.addChild(penaltyIn);
                        egret.Tween.get(penaltyIn).to({y:10},100).to({y:-10},100).to({y:1},100)
                        if( matchid ){
                            l_score++ ;
                        }
                    }else{
                        let penaltyIn2 = this.drawIn();
                        penaltyIn2.x = 336 * parseInt ( timeline[i].at_time ) / 7200 + 100 ;
                        penaltyIn2.y = 34;
                        this.collFootball.push( penaltyIn2 );
                        this.addChild(penaltyIn2);
                        egret.Tween.get(penaltyIn2).to({y:44},100).to({y:24},100).to({y:34},100)
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
        if( this.collFootball ){
            let len = this.collFootball.length ;
            for( let i = 0;i < len ; i++ ){
                if( this.collFootball[i] && this.collFootball[i].parent ){
                    this.removeChild( this.collFootball[i] );
                    this.collFootball[i] = null ;
                }
            }
        }


    }

    /**
     *  初始化 进度条
     */
    private initLine(){
        //初始化點球
        setTimeout(()=>{
            if( this.timer2.parent ){
                this.removeChild( this.timer2 );
            }
            if( !!this.timer ){
                this.addChild( this.timer );
            }
        },300)
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
