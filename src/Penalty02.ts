// 点球
class Penalty02 extends eui.UILayer {
    public constructor(){
        super();
        this.drawPenalty02();
    }
    private topTeam:eui.Image;
    private bottomTeam:eui.Image;

    private penaltyWin;

    private drawPenalty02(){

        let bgPenalty:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-penalty_png'));
        this.addChild(bgPenalty);

        let textPenalty:egret.TextField = new egret.TextField();
        textPenalty.text = '点球';
        textPenalty.height = 58;
        textPenalty.textColor = 0xffffff;
        textPenalty.size = 22;
        textPenalty.x = 20;
        textPenalty.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(textPenalty);

        // 插入遮罩层
        // let bgMask:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-mask_png'));
        // bgMask.x = 72;
        // bgMask.y = 2;
        // this.addChild(bgMask);
         // 上边队伍icon
        this.topTeam = new eui.Image();
        this.topTeam.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.topTeam.width = 24;
        this.topTeam.height = 24;
        this.topTeam.x = 72;
        this.topTeam.y = 2;
        this.addChild(this.topTeam);
        // this.topTeam.mask = bgMask;


        //插入遮罩层
        // let bgMask02:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-mask_png'));
        // bgMask02.x = 72;
        // bgMask02.y = 30;
        // this.addChild(bgMask02);

         // 下边队伍icon
        this.bottomTeam = new eui.Image();
        this.bottomTeam.source = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';
        this.bottomTeam.width = 24;
        this.bottomTeam.height = 24;
        this.bottomTeam.x = 72;
        this.bottomTeam.y = 30;
        this.addChild(this.bottomTeam);
        // this.bottomTeam.mask = bgMask02;

        //上边队伍点球情况
        // for(var i=0;i<5;i++){
        //     let penaltyIn = this.drawIn();
        //     penaltyIn.x = 123+i*44;     //x坐标[123,167,211,255,299,343,387]
        //     penaltyIn.y = 1;
        //     this.addChild(penaltyIn);
        // }
        // //下边队伍点球情况
        // for(var i=0;i<5;i++){
        //     let penaltyOut = this.drawOut();
        //     penaltyOut.x = 123+i*44;
        //     penaltyOut.y = 34;
        //     this.addChild(penaltyOut);
        // }

        // this.penaltyWin = this.drawWin();
        // this.penaltyWin.x = 371;  
        // this.penaltyWin.y = 1;
        // // penaltyWin.y = 36;
        // this.addChild( this.penaltyWin );

    }

    /**
     *  延迟函数
     */
    private wait (duration = 250) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, duration)
        })
    }

    /**
     *  更新 进球头像
     */
    private upPenaltyballImg( imgObj ){
        if( imgObj ){
            this.topTeam.source = imgObj.l_img ;
            this.bottomTeam.source = imgObj.r_img ;
        }
    }

    /**
     *  点球 数组
     *  结果 betRes  ? 不是在这个展示？
     *  @param  结果的matchid 
     *   // var spotkick_style = [["1", "1"], ["1", "0"], ["1", "1"], ["0", "0"], ["0", "0"],[]]
     */

    async movePenalty( penaltyArr:any , matchid:string, score:string ,footIndex ){
        let len = penaltyArr.length ;
        let $store = window['store'] ;

        let penaltyStr_p = 'penalty_point' ;
        let bgMaskStr_p = 'bgMask_point' ;  

        let currFieldStr = '' ;
        let topNum = 0 ;
        let botNum = 0 ;
        let colectPenalt = [] // 收集 点球 ，为了remove 
        let leftOrRig = '' ;
        let basescore = parseInt( score.slice(0,1));

        penaltyStr_p = 'penalty_point'+footIndex;
        bgMaskStr_p = 'bgMask_point'+footIndex  ; 
        // new win
        this.penaltyWin = this.drawWin();
        
        if( penaltyArr.length > 0 ){
            if( matchid ){
                currFieldStr = $store['matFindField'][ matchid ] ;
            }

            for( let i = 0 ;i < len ; i ++ ){
                if( penaltyArr[i] ){
                    if( penaltyArr[i][0] === '1' ){
                        let penaltyIn = this.drawIn();
                        penaltyIn.width = 0;
                        penaltyIn.height = 0;
                        penaltyIn.anchorOffsetX = 11.5;
                        penaltyIn.anchorOffsetY = 11.5;
                        penaltyIn.x = 123+i*44;     
                        penaltyIn.y = 12.5;
                        colectPenalt.push( penaltyIn )
                        await this.wait( )
                        this.addChild(penaltyIn);
                         egret.Tween.get(penaltyIn).to({width:25,height:25},200).to({width:23,height:23},200);
                        topNum ++ ;
                        if( currFieldStr ){
                            $store['$fieldContain'][currFieldStr].writeScore(  ( basescore + topNum ) + ':' + ( basescore + botNum)  )
                        }
                    }else if( penaltyArr[i][0] === '0' ) {
                        let penaltyOut = this.drawOut();
                        penaltyOut.width = 0;
                        penaltyOut.height = 0;
                        penaltyOut.anchorOffsetX = 11.5;
                        penaltyOut.anchorOffsetY = 11.5;
                        penaltyOut.x = 123+i*44;
                        penaltyOut.y = 12.5;
                        colectPenalt.push( penaltyOut )
                        await this.wait( )
                        this.addChild(penaltyOut);
                         egret.Tween.get(penaltyOut).to({width:25,height:25},200).to({width:23,height:23},200);
                    }
                    if( penaltyArr[i][1] === '1' ){
                        let penaltyIn = this.drawIn();
                        penaltyIn.width = 0;
                        penaltyIn.height = 0;
                        penaltyIn.anchorOffsetX = 11.5;
                        penaltyIn.anchorOffsetY = 11.5;
                        penaltyIn.x = 123+i*44;     
                        penaltyIn.y = 45.5;
                        colectPenalt.push( penaltyIn )
                        await this.wait( )
                        this.addChild(penaltyIn);
                         egret.Tween.get(penaltyIn).to({width:25,height:25},200).to({width:23,height:23},200);
                        botNum ++ ;
                        if( currFieldStr ){
                            $store['$fieldContain'][currFieldStr].writeScore(  ( basescore + topNum ) + ':' + ( basescore + botNum)  )
                        }
                    }else if( penaltyArr[i][1] === '0' ){
                        let penaltyOut = this.drawOut();
                        penaltyOut.width = 0;
                        penaltyOut.height = 0;
                        penaltyOut.anchorOffsetX = 11.5;
                        penaltyOut.anchorOffsetY = 11.5;
                        penaltyOut.x = 123+i*44;
                        penaltyOut.y = 45.5;
                        colectPenalt.push( penaltyOut )
                        await this.wait( )
                        this.addChild(penaltyOut);
                        egret.Tween.get(penaltyOut).to({width:25,height:25},200).to({width:23,height:23},200);
                    }
                    
                }
            }
            await this.wait()
            // win xiao 图标 这个坐标还有调整
            this.penaltyWin.x = 121 + ( len - 1 )  * 50
            if( topNum > botNum ){
                this.penaltyWin.y = 1;
                leftOrRig = '_l' ;
            }else{
                this.penaltyWin.y = 36;
                leftOrRig = '_r' ;
            }
            this.addChild( this.penaltyWin );
            // 去除 整个背景

            //  显示win showWinLocation(res05[i].matchid);  _l left  _r right

            // movePenalty

            await this.wait( 350 ) ;
            if( !!$store['$fieldContain'] ){
                $store['$fieldContain'].showWinLocation( matchid , leftOrRig );
            }

            // 去除黑框
            if( $store['$cnt'][bgMaskStr_p].parent ){
                $store['$bgCourtWrap'].removeChild( $store['$cnt'][bgMaskStr_p] );
            }
            if( $store['$cnt'][penaltyStr_p].parent ){
                $store['$bgCourtWrap'].removeChild( $store['$cnt'][penaltyStr_p] );
            }

            // 显示冠军 
            if( currFieldStr &&  $store.matches.length === 1 ){
                let championName = $store['$fieldContain'][currFieldStr].getFieldImg();
                if( championName ){
                    if( leftOrRig === '_l' ){
                         $store['$cnt'].showChampion( championName['l_name'] )
                    }else{
                        $store['$cnt'].showChampion( championName['r_name'] )
                    }
                }
            }
            // 清楚 所有点球 
            setTimeout(()=>{
                for( let i=0 ,len = colectPenalt.length ;i< len ; i++ ){
                    if( colectPenalt[i] && colectPenalt[i].parent ){
                        this.removeChild( colectPenalt[i] );
                    }
                }
                if( this.penaltyWin.parent ){
                    this.removeChild( this.penaltyWin );
                }
            },900)
        }
    }

    private drawIn(){
        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-in_png'));
        return img;
    }
    private drawOut(){
        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-out_png'));
        return img;
    }
    private drawWin(){
        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('penalty-win_png'));
        return img;
    }
}