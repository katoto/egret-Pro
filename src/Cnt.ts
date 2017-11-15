class Cnt extends egret.DisplayObjectContainer{
    public constructor(Width,Height,anWidth,anHeight){
        super();
        this.drawCnt(Width,Height,anWidth,anHeight);
    }
    // 缩放系数
    private scale:number = window['store'].scale;
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
        

        // 背景 桌子
        let bgCourt:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-court_png'));
        bgCourt.anchorOffsetX = bgCourt.width/2;
        bgCourt.x = anWidth;
        bgCourt.y = 30;
        this.bgCourtWrap.addChild(bgCourt);

        //倒计时
        let timer:Timer = new Timer();
        timer.anchorOffsetX = timer.width/2;
        timer.x = anWidth;
        timer.y = 0;
        this.bgCourtWrap.addChild(timer);

        //文字说明区域
        let textT:TextTips = new TextTips();
        textT.anchorOffsetX = textT.width/2;
        textT.x = anWidth;
        textT.y = 66;
        this.bgCourtWrap.addChild(textT);

        //生成四个足球场，1/4比赛  485为小球场宽度，应该可以在构造函数里设置，需要优化
        //参数分辨是 x,x，左边球队icon，队名，赔率，总投注，我的投注，右边~
        //  http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1579.png

        this.fieldContain = new Field_ball_contain();
        this.bgCourtWrap.addChild(this.fieldContain)

        // this.field2 = new Field_ball(485,anWidth,'http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1579.png','克罗地亚',3.78,'10万','10.09万','team-02_jpg','德国',1.26,'23万','10.09万');
        // this.field2.y = 120;
        // this.bgCourtWrap.addChild(this.field2);
        // this.field2.touchEnabled = true;
        // this.field2.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_twoEvt ,this)


        // this.field1 = new Field_ball(485,anWidth,'team-01_jpg','克罗地亚',3.78,'10万','10.09万','team-02_jpg','德国',1.26,'23万','10.09万');
        // this.field1.y = 120+202*1;
        // this.bgCourtWrap.addChild(this.field1);
        // this.field1.touchEnabled = true;
        // this.field1.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_oneEvt ,this)

        
        // this.field3 = new Field_ball(485,anWidth,'http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1579.png','克罗地亚',3.78,'10万','10.09万','team-02_jpg','德国',1.26,'23万','10.09万');
        // this.field3.y = 120+202*2;
        // this.bgCourtWrap.addChild(this.field3);
        // this.field3.touchEnabled = true;
        // this.field3.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_threeEvt ,this)

        // for(let i=0;i<4;i++){
        //     let _field4:Field4 = new Field4(485,anWidth,'team-01_jpg','克罗地亚',3.78,'10万','10.09万','team-02_jpg','德国',1.26,'23万','10.09万');
        //     _field4.y = 120+202*i;
        //     this.bgCourtWrap.addChild(_field4);
        // }

        // 左边其他用户 头像实例 ,（名字，头像，金币）,位置为数组中的随机一个{x=15,y=80+220*i} 
        // for(let i=0;i<4;i++){
        //     let userImg:userImage = new userImage('飞翔小七','https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4182536181,630612655&fm=173&s=EC7819C7026A2D1399FD589D0300C084&w=218&h=146&img.JPEG','23万');
        //     userImg.x = 15;
        //     userImg.y = 80+220*i;
        //     console.log( userImg.y  )
        //     this.bgCourtWrap.addChild(userImg);
        // }
        // // 右边其他用户 头像实例 ,（名字，头像，金币）,位置为数组中的随机一个{x=15,y=80+220*i} 
        // for(let i=0;i<4;i++){
        //     let userImg:userImage = new userImage('飞翔小七','https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4182536181,630612655&fm=173&s=EC7819C7026A2D1399FD589D0300C084&w=218&h=146&img.JPEG','23万');
        //     userImg.x = Width-104;
        //     userImg.y = 80+220*i;
        //     console.log( userImg.y )
        //     this.bgCourtWrap.addChild(userImg);
        // }
        //  自己的头像
        // let myImg:userImage = new userImage('飞翔小七','https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4182536181,630612655&fm=173&s=EC7819C7026A2D1399FD589D0300C084&w=218&h=146&img.JPEG','23万');
        // myImg.anchorOffsetX = 44;
        // myImg.anchorOffsetY = 124;
        // myImg.x = anWidth;
        // myImg.y = this.bgCourtWrap.height;
        // this.bgCourtWrap.addChild(myImg);

    }

    // 调研初始化场地
    private initFieldCon(){
        this.fieldContain.initField();
    }

    // 初始化场地 
    private initUserImage(){
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
                window['store']['user_info'][i].photo = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4182536181,630612655&fm=173&s=EC7819C7026A2D1399FD589D0300C084&w=218&h=146&img.JPEG'
            }
            if( window['store']['user_info'][i].uid ){
                window['store']['userPositionID'].push( window['store']['user_info'][i].uid )
            }else{
                console.error( '无uid' )
            }
            var choseUserImg = 'userImg'+(i+1)
            this[choseUserImg] = new userImage( window['formateName'] ( window['store']['user_info'][i].username ) , window['store']['user_info'][i].photo  ,
            window['formateGold'] ( window['store']['user_info'][i].total ) );

            //  中奖的处理 ！
            this[choseUserImg].isShowWinGold('3333333')
            setTimeout(()=>{
               this[choseUserImg].isHideWinGold() 
            },1000)

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
            this.bgCourtWrap.addChild(this[choseUserImg]);
            console.log( choseUserImg  )

        }
    }
    // 用户 进入
    private addUserImage( username:string , photo:string , total:string , uid:string ){

        var userI = window['store']['emptyUserPosition'].shift() ;
        if( !userI ){
            console.error('无空闲房间')
            return false;
        }
        userI = userI - 1 ;
        var choseUserImg = 'userImg' + ( userI+1 )
        console.log( choseUserImg )
        this[choseUserImg] = new userImage( window['formateName'] (username) ,photo  ,
        window['formateGold'] ( total ) );

        if( ( window['store']['userPosition'][userI]-1 ) < 5 ){
            this[choseUserImg].x = window['store']['userPositionObj'][window['store']['userPosition'][userI]-1].x;
            this[choseUserImg].y = window['store']['userPositionObj'][window['store']['userPosition'][userI]-1].y;
        }else{
            this[choseUserImg].x = window['store']['stage_Width'] - window['store']['userPositionObj'][window['store']['userPosition'][userI]-1].x;
            this[choseUserImg].y = window['store']['userPositionObj'][window['store']['userPosition'][userI]-1].y;
        }

        // window['store']['userPositionID'].push( uid )
        window['store']['userPositionID'].splice( userI - 1,0 ,uid );
        this.bgCourtWrap.addChild(this[choseUserImg]);

        //  注意层级控制，不然事件会有问题 ！
        this.bgCourtWrap.setChildIndex( this.fieldContain  , this.bgCourtWrap.getChildIndex( this[choseUserImg] ))    

    }
    // 用户 离开 
    private removeUserImage( uid:string ){
        var delIndex = 0;
        for( var i=0 ,len = window['store']['userPositionID'].length;i<len;i++){
            if( window['store']['userPositionID'][i] === uid ){
                delIndex = i;
                break;
            }
        }
        if( i === len || delIndex === 0 ){
            console.error( 'not find uid');
            return false;
        }
        delIndex = delIndex + 1;
        if( delIndex ){
            let choseUserImg = 'userImg'+ ( delIndex) ;
            // 更新数组
            window['store']['userPositionID'].splice( delIndex -1 , 1 );
            window['store']['emptyUserPosition'].push( delIndex );
            console.log( this[choseUserImg] )
            // 还是有问题
            if( this.bgCourtWrap && this[choseUserImg] ){
                this.bgCourtWrap.removeChild(this[choseUserImg]);
            }

            // this.bgCourtWrap.removeChild(this[choseUserImg]);
        }
    }
}