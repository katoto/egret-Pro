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
        this.bgCourtWrap.addChild(this.fieldContain);


        //决赛的开奖-点球
        // 插入遮罩层,正常进球和点球要分开两个遮罩
        // let bgMask01 = this.bgMask();
        // bgMask01.anchorOffsetX = 245;
        // bgMask01.x = window['store'].stage_anWidth;
        // bgMask01.y = 265;  
        // this.bgCourtWrap.addChild(bgMask01);

        // let bgMask02 = this.bgMask();
        // bgMask02.anchorOffsetX = 245;
        // bgMask02.x = window['store'].stage_anWidth;
        // bgMask02.y = 265;  
        // this.bgCourtWrap.addChild(bgMask02);

        // //正常进球
        // let penalty01 = new Penalty01();
        // penalty01.anchorOffsetX = 245;
        // penalty01.x = window['store'].stage_anWidth;
        // penalty01.y = 323;  //决赛265   +58  
        // penalty01.mask = bgMask01;
        // this.bgCourtWrap.addChild(penalty01);
        // setTimeout(()=>{
        //     egret.Tween.get( penalty01 ).to( {y:265 },200 );
        // },3000)

        // setTimeout(()=>{
        //     egret.Tween.get( penalty01 ).to( {y:107 },200 );
        // },5000)

        // //点球
        // let penalty02 = new Penalty02();
        // penalty02.anchorOffsetX = 245;
        // penalty02.x = window['store'].stage_anWidth;
        // penalty02.y = 323;  //决赛265   +58  
        // penalty02.mask = bgMask02;
        // this.bgCourtWrap.addChild(penalty02);
        // setTimeout(()=>{
        //     egret.Tween.get( penalty02 ).to( {y:265 },200 );
        // },5000)

         


        
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
        console.log( tips )
        this.textT['upTextTips']( tips )
    }

    private bgMask(){
        let bgMask:egret.Bitmap = new egret.Bitmap(RES.getRes('penaltyWrap-mask_png'));
        return bgMask;
    }

    // 金币发出 ( 分发 )  main ==> cnt ==> fieldcontain  
    //  维护了一套uid 的位置 
    // 
    async cnt_sendEndCoin( uid:string , msg:string ){

        let startString = 'field41_l';
        await this.fieldContain.sendEndCoin( startString , uid.toString() )
        // 中奖展示 
    }

    // 他人金币 发出
    //
    private cnt_Other_Coin( matchid:string , selection:string , uid:string , bet_golds:string ){
        // 处理 他人金币的金币减少 .
        let $store = window['store'] ;
        let selOtherCoin = $store['userPosition'][$store['userPositionLocal'][uid] - 1];
        console.log( selOtherCoin )

        // this.userImg1['setMyGold']('1234')

        // this[ 'userImg'+selOtherCoin ]['setMyGold']('21') 

        this.userImg1['getCurGold']()
        this.userImg2['getCurGold']()
        this.userImg3['getCurGold']()
        this.userImg4['getCurGold']()
        this.userImg5['getCurGold']()
        this.userImg6['getCurGold']()
        this.userImg7['getCurGold']()
        this.userImg8['getCurGold']() 
        
        // this[ 'userImg'+selOtherCoin ]['setMyGold']( this[ 'userImg'+selOtherCoin ]['getCurGold']() - parseInt( bet_golds ) )

        // setMyGold
        this.fieldContain.other_Coin( matchid , selection , selOtherCoin - 1 , bet_golds );

    }


    // 金币收起  main ==> cnt ==> fieldcontain
    private cnt_collectCoin(){
        this.fieldContain.collectCoin();
    }

    // 调研初始化场地
    private initFieldCon(){
        this.fieldContain.initFieldMsg();
    }

    // 放入4个场地
    private addFieldtWrap4(){
        this.fieldContain.addcourtWrap4();
    }
    // 放入2个场地
    private addFieldtWrap2(){
        this.fieldContain.addcourtWrap2();
    }
    // 放入1个场地
    private addFieldtWrap1(){
        this.fieldContain.addcourtWrap1();
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
    private initUserMsg(){
        let len = window['store']['user_info'].length
        if( !len || len === undefined){
            len = 0
        }
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
                window['store']['userPositionID'].push( window['store']['user_info'][i].uid )
                window['store']['userPositionLocal'][window['store']['user_info'][i].uid] = ( i + 1 ) 
            }else{
                console.error( 'websock 无uid' )
            }
            var choseUserImg = 'userImg'+(i+1) ;
            var firstUserData = null;



            if( i === 0 && window['store']['user_info'][i].uid === window['store']['env_variable']['uid'] && this[choseUserImg] ){
                // 正常位置
                this[choseUserImg].upDataUseMsg( window['formateName'] ( window['store']['user_info'][i].username ) , window['store']['user_info'][i].photo ,
                window['store']['user_info'][i].total ); 
            }else{

                firstUserData = window['store']['user_info'][0]
                if( this[choseUserImg] ){
                    this[choseUserImg].upDataUseMsg( window['formateName'] ( window['store']['user_info'][i].username ) , window['store']['user_info'][i].photo ,
                     window['store']['user_info'][i].total );
                }
                if(  window['store']['user_info'][i].uid === window['store']['env_variable']['uid'] && this[choseUserImg] ){
                     var choseUserImgCopy = 'userImg1' ;
                     this[choseUserImgCopy].upDataUseMsg( window['formateName'] ( window['store']['user_info'][i].username ) , window['store']['user_info'][i].photo ,
                    window['store']['user_info'][i].total ); 

                    this[choseUserImg].upDataUseMsg( window['formateName'] ( firstUserData.username ) , firstUserData.photo ,
                     firstUserData.total );                 
                }

            }

            //  中奖的处理 ！
            // this[choseUserImg].isShowWinGold('3333333')
            // setTimeout(()=>{
            //    this[choseUserImg].isHideWinGold() 
            // },1000)

            this.bgCourtWrap.addChild(this[choseUserImg]);
            // console.log( choseUserImg  )
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
        userI = userI - 1 ;
        var choseUserImg = 'userImg' + ( userI+1 )
        // console.log( choseUserImg )
        if( photo === '' ){
            photo = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=547138142,3998729701&fm=27&gp=0.jpg'
        }

        if( this[choseUserImg] ){
            this[choseUserImg].upDataUseMsg( window['formateName'] (username) ,photo  ,
            total );
        }

        window['store']['userPositionID'].splice( userI ,0 ,uid +'' );
        this.bgCourtWrap.addChild(this[choseUserImg]);
        // //  注意层级控制，不然事件会有问题 ！
        this.bgCourtWrap.setChildIndex( this.fieldContain  , this.bgCourtWrap.getChildIndex( this[choseUserImg] ))    

    }
    // 用户 离开  new
    private removeUserImage( uid:string ){
        var delIndex = 0;
        for( var i=0 ,len = window['store']['userPositionID'].length;i<len;i++){
            if( window['store']['userPositionID'][i] === uid ){
                delIndex = i;
                break;
            }
        }
        if( delIndex === 0 ){
            console.error( 'not find uid');
            return false;
        }
        delIndex = delIndex + 1;
        if( delIndex ){
            let choseUserImg = 'userImg'+ ( delIndex) ;
            // 更新数组
            window['store']['userPositionID'].splice( delIndex - 1 , 1 );

            if( window['store']['userPositionLocal'][uid] ){
                window['store']['userPositionLocal'][uid] = null ;
            }

            window['store']['emptyUserPosition'].push( delIndex );

            // console.log( delIndex )
            // console.log(  window['store']['userPosition'][delIndex -1 ] )

            if( this.bgCourtWrap && this[choseUserImg] && this[choseUserImg].parent ){
                this.bgCourtWrap.removeChild(this[choseUserImg]);
            }
        }
    }
}