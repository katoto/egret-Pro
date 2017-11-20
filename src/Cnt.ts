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



        // if(this.matchPro == '决赛'){
        //     let court1 = new Court();
        //     // court1.anchorOffsetX = court1.width/2;
        //     // court1.anchorOffsetY = court1.height/2;
        //     court1.x = 150;
        //     court1.y = 100;
        //     this.bgCourtWrap.addChild(court1);
        // }


        //生成四个足球场，1/4比赛  485为小球场宽度，应该可以在构造函数里设置，需要优化
        //参数分辨是 x,x，左边球队icon，队名，赔率，总投注，我的投注，右边~
        //  http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1579.png

        this.fieldContain = new Field_ball_contain();
        this.bgCourtWrap.addChild(this.fieldContain);

        let penalty = new Penalty();
        penalty.y = 100;
        this.bgCourtWrap.addChild(penalty);

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
            }else{
                console.error( 'websock 无uid' )
            }
            var choseUserImg = 'userImg'+(i+1)
            if( this[choseUserImg] ){
                this[choseUserImg].upDataUseMsg( window['formateName'] ( window['store']['user_info'][i].username ) , window['store']['user_info'][i].photo ,
                 window['formateGold']( window['store']['user_info'][i].total ));
            }

            //  中奖的处理 ！
            // this[choseUserImg].isShowWinGold('3333333')
            // setTimeout(()=>{
            //    this[choseUserImg].isHideWinGold() 
            // },1000)

            this.bgCourtWrap.addChild(this[choseUserImg]);
            console.log( choseUserImg  )
        }
    }

    // 用户 进入  new
    private addUserImage( username:string , photo:string , total:string , uid:string ){
        var userI = window['store']['emptyUserPosition'].shift() ;
        console.log( userI )
        if( !userI ){
            console.error('无空闲房间')
            return false;
        }
        userI = userI - 1 ;
        var choseUserImg = 'userImg' + ( userI+1 )
        console.log( choseUserImg )
        if( photo === '' ){
            photo = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=547138142,3998729701&fm=27&gp=0.jpg'
        }

        if( this[choseUserImg] ){
            this[choseUserImg].upDataUseMsg( window['formateName'] (username) ,photo  ,
            window['formateGold'] ( total ) );
        }

        window['store']['userPositionID'].splice( userI ,0 ,uid+'' );
        this.bgCourtWrap.addChild(this[choseUserImg]);
        // //  注意层级控制，不然事件会有问题 ！
        // this.bgCourtWrap.setChildIndex( this.fieldContain  , this.bgCourtWrap.getChildIndex( this[choseUserImg] ))    

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
            window['store']['userPositionID'].splice( delIndex -1 , 1 );
            window['store']['emptyUserPosition'].push( delIndex );
            if( this.bgCourtWrap && this[choseUserImg] ){
                this.bgCourtWrap.removeChild(this[choseUserImg]);
            }

        }
    }
}