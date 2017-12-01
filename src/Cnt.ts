class Cnt extends egret.DisplayObjectContainer{
    public constructor(Width,Height,anWidth,anHeight){
        super();
        this.drawCnt(Width,Height,anWidth,anHeight);
    }
    // 缩放系数
    private scale:number = window['store'].scale;

    // 比赛进程 1/4 / 1/2  / 决赛
    private matchPro = '决赛';
    // 内容舞台 操作头像
    private bgCourtWrap:egret.DisplayObjectContainer ;

    // 可能的头像位置  1 是自己
    private  userImg1:userImage
    private  userImg2:userImage
    private  userImg3:userImage
    private  userImg4:userImage
    private  userImg5:userImage
    private  userImg6:userImage
    private  userImg7:userImage
    private  userImg8:userImage
    private  userImg9:userImage

    // 比赛容器
    private fieldContain

    //  文字区域 开始 、 投注 、 结束 (放入 放出)
    private textT:TextTips ;

    // 定时器
    private timer:Timer ;

    // 总决赛的点球 4 个 进行复用
    private penalty0 ; private bgMask0;
    private penalty_point0 ; private bgMask_point0

    private penalty1 ; private bgMask1;
    private penalty_point1 ; private bgMask_point1 ;

    private penalty2 ; private bgMask2;
    private penalty_point2 ; private bgMask_point2;

    private penalty3 ; private bgMask3;
    private penalty_point3 ; private bgMask_point3;
    //冠军
    private champion:egret.DisplayObjectContainer;
    private championText:egret.TextField;

    //toast
    private toastText:egret.TextField;
    private toast;
    private toastBg:egret.Bitmap ;

    private drawCnt(Width,Height,anWidth,anHeight){
        // 内容区
        let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap.width = Width;
        wrap.height = Height; 
        wrap.x = 0;
        wrap.y = 0;
        this.addChild(wrap);

        // 背景 
        let bg:egret.Bitmap = new egret.Bitmap(RES.getRes('bg_jpg'));
        bg.anchorOffsetX = anWidth;
        bg.x = anWidth;
        bg.y = 0;
        wrap.addChild(bg);

         // 背景 桌子区域，用来定位桌子计时器和里面的足球场等
        this.bgCourtWrap = new egret.DisplayObjectContainer();
        this.bgCourtWrap.width = Width;
        this.bgCourtWrap.height = 1035; //963+30+42  桌子的高度加上计时器突出高度+头像突出高度
        this.bgCourtWrap.anchorOffsetX = this.bgCourtWrap.width/2;
        this.bgCourtWrap.anchorOffsetY = this.bgCourtWrap.height/2;
        this.bgCourtWrap.x = anWidth;
        this.bgCourtWrap.y = anHeight;

        window['store']['$bgCourtWrap'] = this.bgCourtWrap ;
        //问题，测试屏幕大小进行缩放
        this.bgCourtWrap.scaleX=this.scale;
        this.bgCourtWrap.scaleY=this.scale;
        wrap.addChild(this.bgCourtWrap);

        // 背景 大桌子
        let bgCourt:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-court_png'));
        bgCourt.anchorOffsetX = bgCourt.width/2;
        bgCourt.x = anWidth;
        bgCourt.y = 30;
        this.bgCourtWrap.addChild(bgCourt);

        //倒计时
        this.timer = new Timer();
        this.timer.anchorOffsetX = 100;
        this.timer.x = anWidth;
        this.timer.y = 0;
        this.bgCourtWrap.addChild( this.timer );

        //文字说明区域
        this.textT = new TextTips();
        this.textT.anchorOffsetX = this.textT.width/2;
        this.textT.x = anWidth;
        this.textT.y = 66;
        this.bgCourtWrap.addChild( this.textT );

        this.fieldContain = new Field_ball_contain();
        window['store']['$fieldContain'] = this.fieldContain ;
        this.bgCourtWrap.addChild( this.fieldContain );

    //     //决赛的开奖-点球
    //     // 插入遮罩层,正常进球和点球要分开两个遮罩
    //     this.f1_penalty02 = this.bgMask();
    //     this.f1_penalty02.anchorOffsetX = 245;
    //     this.f1_penalty02.x = window['store'].stage_anWidth;
    //     this.f1_penalty02.y = 265;  
    //     this.bgCourtWrap.addChild( this.f1_penalty02 );

    //     //正常进球
        // this.penalty0 = new Penalty01();
        // this.penalty0.anchorOffsetX = 245;
        // this.penalty0.x = window['store'].stage_anWidth;
        // this.penalty0.y = 323;  //决赛265   +58  
        // this.penalty0.mask = this.penalty0 ;
        // this.bgCourtWrap.addChild(this.penalty0);

    //     // 过一会出现的
        // setTimeout(()=>{
        //     egret.Tween.get( this.penalty0 ).to( {y:265 },200 );
        // },3000)
 
    //     //点球

    //     this.bgMask02 = this.bgMask();
    //     this.bgMask02.anchorOffsetX = 245;
    //     this.bgMask02.x = window['store'].stage_anWidth;
    //     this.bgMask02.y = 265;  
    //     this.bgCourtWrap.addChild(this.bgMask02);

    //     this.penalty02 = new Penalty02();
    //     this.penalty02.anchorOffsetX = 245;
    //     this.penalty02.x = window['store'].stage_anWidth;
    //     this.penalty02.y = 323;  //决赛265   +58  
    //     this.penalty02.mask = this.bgMask02;
    //     this.bgCourtWrap.addChild(this.penalty02);

    // // egret.Tween.get( this.penalty02 ).to( {y:265 },200 );
    //    setTimeout(()=>{
    //         egret.Tween.get( this.penalty01 ).to( {y:107 },200 );
    //     },5000)
    //     setTimeout(()=>{
    //         egret.Tween.get( this.penalty02 ).to( {y:265 },200 );
    //     },5000)
        

        //冠军
        this.champion = new egret.DisplayObjectContainer();
        this.champion.width = 241;
        this.champion.height = 200; 
        this.champion.x = 254.5;
        this.champion.y = 93;

        let championImg:egret.Bitmap = new egret.Bitmap(RES.getRes('champion_png'));
        this.champion.addChild(championImg);   

        this.championText = new egret.TextField();
        this.championText.text = '';
        this.championText.textColor = 0xffffff;
        this.championText.size = 36;
        this.championText.width = 241;
        this.championText.height = 200;
        this.championText.textAlign = egret.HorizontalAlign.CENTER;
        this.championText.verticalAlign = egret.VerticalAlign.BOTTOM;

        // this.bgCourtWrap.addChild(this.champion);
        // this.champion.addChild(this.championText); 

        //toast
        this.toast = new egret.DisplayObjectContainer();
        this.toast.width = 430;
        this.toast.height = 90; 
        this.toast.anchorOffsetX = 215;
        this.toast.anchorOffsetY = 45;
        this.toast.x =  window['store']['stage_anWidth'] ;
        this.toast.y =  window['store']['stage_anHeight'] ;
 
        this.toastBg = new egret.Bitmap(RES.getRes('bg-toast_png'));
        this.toastText = new egret.TextField();
        this.toastText.textColor = 0xffffff;
        this.toastText.size = 30;
        this.toastText.width =430;
        this.toastText.height = 90;
        this.toastText.textAlign = egret.HorizontalAlign.CENTER;
        this.toastText.verticalAlign = egret.VerticalAlign.MIDDLE;

        // this.addChild(this.toast);
        // this.toastText.text = 'toast提示';
        // this.toast.addChild(this.toastBg);
        // this.toast.addChild(this.toastText); 

    }

    /**
     *  tips 提示
     */
    private showTips( val:string ){
        if( val !== '' ){
            this.toastText.text = val ;
            if( !!this.toastBg ){
                this.toast.addChild(this.toastBg);
            }
            if( !!this.toast ){
                this.addChild(this.toast);
            }
            if( !!this.toastText ){
                this.toast.addChild(this.toastText);   
            }
            setTimeout(()=>{
                if( this.toastBg.parent  ){
                    this.toast.removeChild(this.toastBg);
                }
                if( this.toastText.parent ){
                    this.toast.removeChild(this.toastText);   
                }
            },1700)

        }else{
            if( !!this.toast ){
                this.removeChild(this.toast);
            }
            if( this.toastBg.parent  ){
                this.toast.removeChild(this.toastBg);
            }
            if( this.toastText.parent ){
                this.toast.removeChild(this.toastText);   
            }
        }
    }

    /**
     *  champion 冠军
     */
    private showChampion( name:string ){
        if( !!this.champion ){
            this.bgCourtWrap.addChild( this.champion ) ;
        }
        if( !!this.championText ){
            this.championText.text = name ;
            this.champion.addChild(this.championText) ; 
        }
    }

    /**
     *  remove champion 冠军
     */
    private delChampion(){
        if( this.champion.parent ){
            this.bgCourtWrap.removeChild(this.champion);
        }
        if( this.championText.parent ){
            this.champion.removeChild(this.championText); 
        }
    }

    /**
     *  4个进球的实例的初始化
     */
    private initAllPenalty(){
        let penaltyStr = 'penalty' ;
        let bgMaskStr = 'bgMask' ;
        let penaltyStr_p = 'penalty_point' ;
        let bgMaskStr_p = 'bgMask_point' ;   

        for( let i = 0; i < 4 ; i++ ){
            penaltyStr = 'penalty'+i ;
            bgMaskStr = 'bgMask'+i ;
            penaltyStr_p = 'penalty_point'+i ;
            bgMaskStr_p = 'bgMask_point'+i ;  
            
            //决赛的开奖
            // 插入遮罩层,正常进球和点球要分开两个遮罩 mark
            this[bgMaskStr] = this.bgMask();
            this[bgMaskStr].anchorOffsetX = 245;
            this[bgMaskStr].x = window['store'].stage_anWidth;
            // this[bgMaskStr].y = 265;  
            // this.bgCourtWrap.addChild( this[bgMaskStr] );
            //正常进球
            this[penaltyStr] = new Penalty01();
            this[penaltyStr].anchorOffsetX = 245;
            this[penaltyStr].x = window['store'].stage_anWidth;

            // this[penaltyStr].y = 323;  //决赛265   +58  
            // this[penaltyStr].mask = this[bgMaskStr] ;
            // this.bgCourtWrap.addChild( this[penaltyStr] );

            // 过一会出现的
            // setTimeout(()=>{
            //     egret.Tween.get( this[penaltyStr] ).to( {y:265 },200 );
            // },3000)
    
            //点球
            this[bgMaskStr_p] = this.bgMask();
            this[bgMaskStr_p].anchorOffsetX = 245;
            this[bgMaskStr_p].x = window['store'].stage_anWidth;
            // this[bgMaskStr_p].y = 265;  
            // this.bgCourtWrap.addChild( this[bgMaskStr_p] );

            this[penaltyStr_p] = new Penalty02();
            this[penaltyStr_p].anchorOffsetX = 245;
            this[penaltyStr_p].x = window['store'].stage_anWidth;

            // this[penaltyStr_p].y = 323;  //决赛265   +58  
            // this[penaltyStr_p].mask = this[bgMaskStr_p] ;
            // this.bgCourtWrap.addChild( this[penaltyStr_p] );

            // setTimeout(()=>{
            //         egret.Tween.get( this[penaltyStr] ).to( {y:107 },200 );
            //     },5000)
            //     setTimeout(()=>{
            //         egret.Tween.get( this[penaltyStr_p]  ).to( {y:265 },200 );
            //     },5000)            
            // }
        }
    }

    /**
     *  延迟函数  临时在 adjustPenalty 用一下
     */
    private wait (duration = 250) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, duration)
        })
    }


    /**
     *  传入结算 长度  调整 4 2 1 的位置  
     *  显示比分 记得加上点球的比分  要做判断
     *  调整位置 -- 放入舞台 -- 执行动画 
     *  @param result  所有的数据 2005
     */
    async adjustPenalty( allResult ){
        // 比赛框的位置坐标 
        let local_4 = [80,280,500,700] ;
        let local_2 = [130,500] ; // 130 500
        let local_1 = [ 265 ] ; // 265
        let curr_local = null ;

        let penaltyStr = 'penalty' ;
        let bgMaskStr = 'bgMask' ;
        let penaltyStr_p = 'penalty_point' ;
        let bgMaskStr_p = 'bgMask_point' ;   

        let len = allResult.length;  // 数据长度

        let findIndex = null ;
        let endResult = null ;
        let $store = window['store'] ;
        // 确保 在调用之前已经清除
        switch (len){
            case 4:
                curr_local = [...local_4] ;
            ;break;
            case 2:
                curr_local = [...local_2] ;
            ;break;
            case 1:
                curr_local = [...local_1] ;
            ;break;
        }
        // 放出对应进球 点球
        for( let i = 0;i < len; i++ ){

            penaltyStr = 'penalty'+i ;
            bgMaskStr = 'bgMask'+i ;
            penaltyStr_p = 'penalty_point'+i ;
            bgMaskStr_p = 'bgMask_point'+i ;  

            this[bgMaskStr].y = curr_local[i];                                  
            this[penaltyStr].y = curr_local[i] + 58 ;

            this[bgMaskStr_p].y = curr_local[i];           
            this[penaltyStr_p].y = curr_local[i] + 58 ;

            if( !!this[bgMaskStr] ){
                this.bgCourtWrap.addChild( this[bgMaskStr] );
            }
            if( !!this[penaltyStr] ){
                this.bgCourtWrap.addChild( this[penaltyStr] );
            }
            if( !!this[bgMaskStr_p] ){
                this[penaltyStr].mask = this[bgMaskStr] ;
                this.bgCourtWrap.addChild( this[bgMaskStr_p] );
            }
            if( !!this[penaltyStr_p] ){
                this[penaltyStr_p].mask = this[bgMaskStr_p] ;
                this.bgCourtWrap.addChild( this[penaltyStr_p] );
            }
            this[penaltyStr].clearAllball();
            // 更新头像  获取头像  

            this[penaltyStr].upFootballImg(  this.cnt_getFieldImg( allResult[i].matchid ) )
            // 等等正常比分

            egret.Tween.get( this[penaltyStr] ).to( {y: curr_local[i] }, 300 );
            this[penaltyStr].createFootball( allResult[i].timeline , allResult[i].is_extratime ,allResult[i].matchid );

            if( $store['matFindField'][ allResult[i].matchid ] ){
                if( allResult[i].is_spotkick === '0' ){
                    if( parseInt ( allResult[i].score[0] ) > parseInt ( allResult[i].score[2] ) ){
                        $store['fieldLeftOrRight'][allResult[i].matchid] = $store['matFindField'][ allResult[i].matchid ] + '_l'
                    }else{
                        $store['fieldLeftOrRight'][allResult[i].matchid] = $store['matFindField'][ allResult[i].matchid ] + '_r'
                    }
                }else{
                    if( parseInt ( allResult[i].spotkick[0] ) > parseInt ( allResult[i].spotkick[2] ) ){
                        $store['fieldLeftOrRight'][allResult[i].matchid] = $store['matFindField'][ allResult[i].matchid ] + '_l'
                    }else{
                        $store['fieldLeftOrRight'][allResult[i].matchid] = $store['matFindField'][ allResult[i].matchid ] + '_r'
                    }
                }
            }

        }

        // 在外面  await 18s  25s  
        await this.wait( 18000 );  
        // 同步  执行 点球
        // await this.start_showPenalty( allResult ,  curr_local);
        for( let i = 0; i < len ;i ++ ){
            penaltyStr = 'penalty'+i ;
            bgMaskStr = 'bgMask'+i ;
            penaltyStr_p = 'penalty_point'+i ;
            bgMaskStr_p = 'bgMask_point'+i ;  

            findIndex = this.findPenaltyStr( allResult[i].matchid ) ;
            if( allResult[i] && allResult[i].is_spotkick === '1' ){
                this.showPenalty( allResult[i].spotkick_style , curr_local , findIndex , allResult[i].matchid ,allResult[i].score )
            }else{
                // 无点球  根据 score 来显示对应的 win 图标 score 1:1
                // 去除 进球框 显示win .showWinLocation( matchid , leftOrRig );
                if( allResult[i] && allResult[i].is_extratime === '1' ){
                   endResult =  this.is_extratimeFn( allResult[i] , bgMaskStr,penaltyStr );
                }else{
                    if( allResult[i].score ){

                        if( this[bgMaskStr].parent ){
                            this.bgCourtWrap.removeChild( this[bgMaskStr] );
                        }
                        if( this[penaltyStr].parent ){
                            this.bgCourtWrap.removeChild( this[penaltyStr] );
                        }

                        if( parseInt ( allResult[i].score[0] ) > parseInt ( allResult[i].score[2] ) ){
                            this.fieldContain.showWinLocation( allResult[i].matchid , '_l' ) ;
                        }else{
                            this.fieldContain.showWinLocation( allResult[i].matchid , '_r' ) ;
                        }
                        // 取 出
                        if( len === 1 ){
                            endResult = allResult[i] ;
                        }else{
                            endResult = null ;
                        }
                    }
                }
            }
        }

        // 显示冠军 
        if( endResult && $store['matches'] && $store['matches'].length === 1 ){
            let championName = null;
            await this.wait(300);
            if( $store['matFindField'][ endResult.matchid ] ){
                championName = this.fieldContain[ $store['matFindField'][ endResult.matchid ] ].getFieldImg();
                
                if( parseInt ( endResult.score[0] ) > parseInt ( endResult.score[2] ) ){
                     this.showChampion( championName['l_name'] )
                }else{
                    this.showChampion( championName['r_name'] )
                }
            }
        }

    }


    /**
     *  直接显示  win 的 结果
     *  allResult
     */
    private showFieldWin( allResult ){
        let len = allResult.length ;
        let $store = window['store'] ;

        for( let i = 0;i < len; i++ ){
            if( allResult[i].is_spotkick === '0' ){
                if( parseInt ( allResult[i].score[0] ) > parseInt ( allResult[i].score[2] ) ){
                    this.fieldContain.showWinLocation( allResult[i].matchid , '_l' ) ;
                }else{
                    this.fieldContain.showWinLocation( allResult[i].matchid , '_r' ) ;
                }
            }else{
                if( parseInt( allResult[i].spotkick[0] ) > parseInt( allResult[i].spotkick[2] ) ){
                    this.fieldContain.showWinLocation( allResult[i].matchid , '_l' ) ;
                }else{
                    this.fieldContain.showWinLocation( allResult[i].matchid , '_r' ) ;
                }
            }
        }

        // 显示冠军 (快捷)
        if( allResult && allResult.length === 1 ){
            let championName = null;
            if( $store['matFindField'][ allResult[0].matchid ] ){
                championName = this.fieldContain[ $store['matFindField'][ allResult[0].matchid ] ].getFieldImg();

                setTimeout(()=>{
                    if( allResult[0].is_spotkick === '0' ){
                        if( parseInt ( allResult[0].score[0] ) > parseInt ( allResult[0].score[2] ) ){
                            this.showChampion( championName['l_name'] )
                        }else{
                            this.showChampion( championName['r_name'] )
                        }
                    }else{
                        if( parseInt ( allResult[0].spotkick[0] ) > parseInt ( allResult[0].spotkick[2] ) ){
                            this.showChampion( championName['l_name'] )
                        }else{
                            this.showChampion( championName['r_name'] )
                        }
                    }
                },1800 )

            }
        }

    }
    /**
     *  隐藏进球 出现win
     */
    async is_extratimeFn(allResult , bgMaskStr ,penaltyStr ){
        await this.wait( 7000 );
        if( allResult.score ){
            if( this[bgMaskStr].parent ){
                this.bgCourtWrap.removeChild( this[bgMaskStr] );
            }
            if( this[penaltyStr].parent ){
                this.bgCourtWrap.removeChild( this[penaltyStr] );
            }

            if( parseInt ( allResult.score[0] ) > parseInt ( allResult.score[2] ) ){
                this.fieldContain.showWinLocation( allResult.matchid , '_l' ) ;
            }else{
                this.fieldContain.showWinLocation( allResult.matchid , '_r' ) ;
            }
            // 取 出
            if( window['store']['matches'].length === 1 ){
                return allResult ;
            }else{
                return null ;
            }
        }
    }

    /**
     *  清楚中奖 main ==》 cnt ==> fieldcontain
     */
    private cnt_removeAllWinIcon(){
        // remove  champion 
        this.delChampion() ;
        // remove field 
        this.fieldContain.removeAllWinIcon()
    }

    /**
     *  根据 matchid  找 对应的img
     *  @param matchid
     */
    private cnt_getFieldImg( matchid:string ){
        let $store = window['store'] ;
        let currFieldStr = '';
        if( matchid ){
            currFieldStr = $store['matFindField'][ matchid ] ;
            if( currFieldStr ){
                return this.fieldContain[currFieldStr].getFieldImg() ;
            }else{
                console.warn('获取头像error')
            }
        }
        return {}
    }

    /**
     *  根据 matchid  找 对应的点球
     *  @param matchid
     */
    private  findPenaltyStr( matchid:string ){
        let $store = window['store'] ;
        let currFieldStr = '';
        if( matchid ){
            //  matchid  找 位置
            if( $store['matFindField'][ matchid ] ){
                currFieldStr = $store['matFindField'][ matchid ] ;
                switch (currFieldStr){
                    case 'field1':
                    case 'field21':
                    case 'field41':
                        return '0' ;
                    ;
                    case 'field22':
                    case 'field42':
                        return '1' ;
                    ;
                    case 'field43':
                        return '2' ;
                    ;
                    case 'field44':
                        return '3' ;
                    ;
                }
            }else{
                console.error('not find matchid at field_ball_contain' );
            }
        }
    }

    /**
     *  清除 所有的点球 
     *  main ==》 cnt
     */
    private cleanAllPenalty(){

        let penaltyStr = 'penalty' ;
        let bgMaskStr = 'bgMask' ;
        let penaltyStr_p = 'penalty_point' ;
        let bgMaskStr_p = 'bgMask_point' ;  

        for( let i = 0;i<4;i++ ){
            penaltyStr = 'penalty'+i ;
            bgMaskStr = 'bgMask'+i ;
            penaltyStr_p = 'penalty_point'+i ;
            bgMaskStr_p = 'bgMask_point'+i ;  

            if( this[penaltyStr] && this[penaltyStr].parent ){
                this.bgCourtWrap.removeChild( this[penaltyStr] );
            }
            if( this[bgMaskStr] && this[bgMaskStr].parent ){
                this.bgCourtWrap.removeChild( this[bgMaskStr] );
            }
            if( this[penaltyStr_p] && this[penaltyStr_p].parent ){
                this.bgCourtWrap.removeChild( this[penaltyStr_p] );
            }
            if( this[bgMaskStr_p] && this[bgMaskStr_p].parent ){
                this.bgCourtWrap.removeChild( this[bgMaskStr_p] );
            }
        }
    }

    /**
     *  是否出现点球 (对应场地)
     * @param curr_local 运动的坐标
     *  @param penaltyArr 点球坐标
     *  @param footIndex 点球的坐标 （通过比赛id 找到的）
     *  @param mathcid 为了 显示最终的win
     */
    async showPenalty( penaltyArr  , curr_local , footIndex ,matchid:string ,score:string ){
        let penaltyStr = 'penalty' ;
        let bgMaskStr = 'bgMask' ;
        let penaltyStr_p = 'penalty_point' ;
        let bgMaskStr_p = 'bgMask_point' ;  

        penaltyStr = 'penalty'+footIndex ;
        bgMaskStr = 'bgMask'+footIndex ;
        penaltyStr_p = 'penalty_point'+footIndex;
        bgMaskStr_p = 'bgMask_point'+footIndex  ;  

        // 更新点球的 图片  
        if( this[penaltyStr_p] ){
            this[penaltyStr_p].upPenaltyballImg(  this.cnt_getFieldImg( matchid ) )
        }
        await this.wait( 7000 ) ;
        //  进球 切 点球
        egret.Tween.get( this[penaltyStr] ).to( {y:curr_local[footIndex] -158 }, 200 ).call(()=>{
            if( this[bgMaskStr].parent ){
                this.bgCourtWrap.removeChild( this[bgMaskStr] );
            }
            if( this[penaltyStr].parent ){
                this.bgCourtWrap.removeChild( this[penaltyStr] );
            }

        });
        
        egret.Tween.get( this[ penaltyStr_p ]  ).to( {y: curr_local[footIndex] }, 200 ).call(()=>{
            // 对应点球动画
            setTimeout(()=>{
                this[ penaltyStr_p ].movePenalty( penaltyArr , matchid ,score ,footIndex )
            },500)
        });
    }

    // timer 定时器
    // main => cnt => Timer
    private cnt_timer( setTime:string ){
        this.timer['createTimer']( setTime );
    }

    private cnt_timerRemove(){
        this.timer['timerRemove']( );
    }

    // 修改顶部文案
    // main => cnt => textTips
    private cnt_upTextTips( tips:string ){
        this.textT['upTextTips']( tips )
    }

    private bgMask(){
        let bgMask:egret.Bitmap = new egret.Bitmap(RES.getRes('penaltyWrap-mask_png'));
        return bgMask;
    }

    // 金币发出 ( 分发 )   
    //  settle-list 处理函数 更新用户的金币（延迟一下吧）
    //  通过matchid 找到 开始位置 通过uid 找到头像位置
    // 没有告知是左还是右 ？ 
    // 
    async settle_listFn( settleData:any ){
        let choseUser = null ;
        let $store = window['store'] ;

        let baseImg = 'userImg' ; 
        let curFindField = '' ;
        let allShowWinNum = 0 ;

        let userImgArr = [] ;
// delIndex = window['store']['userPositionLocal'][uid] ;
// let choseUserImg = 'userImg'+ ( delIndex ) ;
        if( settleData ){
            for( let i=0,len = settleData.length ;i<len ; i++ ){
                choseUser = $store['userPositionLocal'][ settleData[i].uid ] ;
                if( settleData[i].prize_info &&  settleData[i].prize_info.length > 0 ){
                    console.log( baseImg + choseUser ) ;
                    console.log( '++++++++++' ) ;
                    allShowWinNum = 0 ;
                    // 派金币
                    for( let j = 0;j< settleData[i].prize_info.length ;j++ ){
                        if( settleData[i].prize_info[j] && settleData[i].prize_info[j].matchid ){
                            // curFindField = $store['matFindField'][ settleData[i].prize_info[j].matchid ] ;
                            curFindField = $store['fieldLeftOrRight'][settleData[i].prize_info[j].matchid];
                            console.log( curFindField )
                            // curFindField = 'field42_r';
                            // this.fieldContain[curFindField]   left  or right 动画
                            // curFindField = curFindField + '_l';
                            allShowWinNum =  allShowWinNum + parseInt( settleData[i].prize_info[j].prize );
                            if( !curFindField ){
                                await this.fieldContain.sendEndCoin( curFindField , settleData[i].uid ) ;
                            }
                        }
                    }
                    if( this[ baseImg + choseUser ] && allShowWinNum ){
                        console.log('---------');
                        console.log( allShowWinNum )
                        this[ baseImg + choseUser ].isShowWinGold( allShowWinNum );
                        userImgArr.push( this[ baseImg + choseUser ] )
                    }
                }
                //  更新每个用户的信息 可能要再动画之后
                if( settleData[i].uid && settleData[i].total ){
                    this[ baseImg + choseUser ]['setMyGold']( settleData[i].total )
                }else{
                    // 没找到对应的用户
                    console.error('没找到对应的用户 at 2007 websock')
                }
            }

            // 清除对应的奖
            setTimeout(()=>{
                for( let i = 0; i< userImgArr.length;i++ ){
                    userImgArr[i].isHideWinGold() 
                }
            }, 2800 )

        }
        // let startString = 'field41_l';
        // let uid = '10015140' ;
        // await this.fieldContain.sendEndCoin( startString , uid.toString() )
        // 中奖展示 

    }

    // 他人金币 发出
    //
    private cnt_Other_Coin( matchid:string , selection:string , uid:string , bet_golds:string ){
        // 处理 他人金币的金币减少 .
        let $store = window['store'] ;
        let choseOther = $store['userPositionLocal'][uid] 
        let selOtherCoin = $store['userPosition'][$store['userPositionLocal'][uid] - 1];
        let baseImg = 'userImg' ; 

        let oldCoin ;
        // this.userImg1['setMyGold']('1234')

        // this[ 'userImg'+selOtherCoin ]['setMyGold']('21') 
        // console.log('---------------------')
        // console.log( $store['userPosition'] )
        // console.log( $store['userPositionLocal'][uid] )
        // console.log(selOtherCoin)
        // console.log( baseImg + choseOther  )
        // this.userImg1['getCurGold']()
        // this.userImg2['getCurGold']()
        // this.userImg3['getCurGold']()
        // this.userImg4['getCurGold']()
        // this.userImg5['getCurGold']()

        // this.userImg6['getCurGold']()

        // this.userImg7['getCurGold']()
        // this.userImg8['getCurGold']()
        // this.userImg9['getCurGold']()  

        // console.log('++++++++++++++++++++++++++')
        // this[ baseImg + choseOther ]['getCurGold']()
        // this[ baseImg + 1 ]['getCurGold']()
        // this[ baseImg + 2 ]['getCurGold']()
        // this[ baseImg + 3 ]['getCurGold']()
        // this[ baseImg + 4 ]['getCurGold']()
        // this[ baseImg + 5 ]['getCurGold']()
        // this[ baseImg + 6 ]['getCurGold']()
        // this[ baseImg + 7 ]['getCurGold']()
        // this[ baseImg + 8 ]['getCurGold']()
        // this[ baseImg + 9 ]['getCurGold']()
        // console.log('==========================')
        // console.log( this[ baseImg + choseOther ]['getCurGold']() )
        if( isNaN( this[ baseImg + choseOther ]['getCurGold']() ) ){
            console.log( 'isNaN 了 cnt.ts' )
        }else{
            oldCoin = parseInt( this[ baseImg + choseOther ]['getCurGold']() ) ;
        }
        // setMyGold
        this[ 'userImg'+choseOther ]['setMyGold']( oldCoin - parseInt( bet_golds ) );

        this.fieldContain.other_Coin( matchid , selection , selOtherCoin - 1 , bet_golds );

    }


    // 金币收起  main ==> cnt ==> fieldcontain
    // app 上是延迟 收集
    private cnt_collectCoin(){
        setTimeout(()=>{
            this.fieldContain.collectCoin();
        },1500)
    }

    // 调研初始化场地
    private initFieldCon(){
        this.fieldContain.initFieldMsg();
    }

    //  容器 new
    private initUserImg(){
        for( let i=0;i<9;i++ ){
            var choseUserImg = 'userImg'+(i+1)
            this[choseUserImg] = new userImage();
            if( i === 0 ){
                this[choseUserImg].anchorOffsetX = 44;
                this[choseUserImg].anchorOffsetY = 124 ;
                this[choseUserImg].x = window['store']['stage_anWidth'] ;
                this[choseUserImg].y = 1035;
                window['store']['userMySelf'] = this[choseUserImg];
            }else if( ( window['store']['userPosition'][i] - 1 ) < 5 ){
                this[choseUserImg].x = window['store']['userPositionObj'][window['store']['userPosition'][i] - 1].x;
                this[choseUserImg].y = window['store']['userPositionObj'][window['store']['userPosition'][i] - 1].y;
            }else{
                this[choseUserImg].x = window['store']['stage_Width'] - window['store']['userPositionObj'][window['store']['userPosition'][i] - 1].x;
                this[choseUserImg].y = window['store']['userPositionObj'][window['store']['userPosition'][i] - 1].y;
            }
        }
    }

    //  初始的用户信息  new
    public initUserMsg(){
        // 调整原数组
        let len = window['store']['user_info'].length
        let newUserInfo = [];
        let firstUser = null ;

        if( !len || len === undefined){
            len = 0
        }

        for( let i =0 ;i< len ;i++ ){
            if(  window['store']['user_info'][i].uid === window['store']['env_variable']['uid'] ){
                firstUser = window['store']['user_info'][i];
            }else{
                newUserInfo.push( window['store']['user_info'][i] )
            }
        }
        if( firstUser !== null ){
            newUserInfo.unshift( firstUser )
        }
        window['store']['user_info'] = newUserInfo ;

        window['store']['emptyUserPosition'] = [];
        for( let i=0;i<9 ; i++ ){
            if( i >=len ){
                window['store']['emptyUserPosition'].push( i+1 )
            }
        }
        for(let i=0; i<len ;i++){
            if( window['store']['user_info'][i] && window['store']['user_info'][i].photo === '' ){
                window['store']['user_info'][i].photo = 'http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1213.png'
            }
            if( window['store']['user_info'][i].uid ){
                window['store']['userPositionLocal'][window['store']['user_info'][i].uid] = ( i + 1 ) 

            }else{
                console.error( 'websock 无uid' )
            }

            var choseUserImg = 'userImg'+(i+1) ;

            if( this[choseUserImg] ){
                this[choseUserImg].upDataUseMsg( window['formateName'] ( window['store']['user_info'][i].username ) , window['store']['user_info'][i].photo ,
                    window['store']['user_info'][i].total );
            }

            this.bgCourtWrap.addChild(this[choseUserImg]);

            setTimeout(()=>{
                if( !!this.fieldContain && !!this[choseUserImg]  ){
                    this.bgCourtWrap.swapChildren( this.fieldContain , this[choseUserImg] ) ;
                }
            },1000)
        }
    }

    // 用户 进入  new
    private addUserImage( username:string , photo:string , total:string , uid:string ){
        var userI = window['store']['emptyUserPosition'].shift() ;
        if( !userI ){
            console.error('无空闲房间')
            return false;
        }
        window['store']['userPositionLocal'][uid] = userI
        var choseUserImg = 'userImg' + ( userI )
        console.log( choseUserImg )
        if( photo === '' ){
            photo = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=547138142,3998729701&fm=27&gp=0.jpg'
        }

        if( this[choseUserImg] ){
            this[choseUserImg].upDataUseMsg( window['formateName'] (username) ,photo  ,
            total );
        }

        this.bgCourtWrap.addChild(this[choseUserImg]);

        setTimeout(()=>{
            if( !!this.fieldContain && !!this[choseUserImg] ){
                this.bgCourtWrap.swapChildren( this.fieldContain , this[choseUserImg] ) ;
            }
        },1000)

    }
    // 用户 离开  new
    private removeUserImage( uid:string ){
        var delIndex = 0;

        if( window['store']['userPositionLocal'][uid] ){
            delIndex = window['store']['userPositionLocal'][uid] ;
        }

        if( delIndex === 0 ){
            console.error( 'not find uid');
            return false;
        }

        if( delIndex ){
            let choseUserImg = 'userImg'+ ( delIndex ) ;
            // 更新数组
            if( window['store']['userPositionLocal'][uid] ){
                window['store']['userPositionLocal'][uid] = null ;
            }

            window['store']['emptyUserPosition'].push( delIndex );

            // console.log( delIndex )
            if( this.bgCourtWrap && this[choseUserImg] && this[choseUserImg].parent ){
                this.bgCourtWrap.removeChild(this[choseUserImg]);
            }
        }
    }
    //晋级队伍
    private proTeam(){
        
    }
}