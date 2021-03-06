/**
 *  虚拟杯
 */
class Main extends egret.DisplayObjectContainer {
    /**
     *  loading
     */
    private loadingView: LoadingUI;
    /**
     * websocket
     */
    private webSocket:egret.WebSocket;
    //  头部lei
    private top;
    private cnt;
    //   底部
    private bottom;
    //  弹窗
    private pop;
    // 聊天实例
    // private popChat;
    // 杯赛过场
    private change;
    // 晋升
    private promotion;  
    //离开
    private out;
    
    private penalty02;
    private coinNone;

    private textfield:egret.TextField;
    
    private Width;
    private Height;
    private anWidth;
    private anHeight;

    //声音
    private startOver:egret.Sound;
    private mpromotion:egret.Sound;
    private mchange:egret.Sound;
    
    // 竞猜开始文案
    private start_pop = null;
    private stop_pop = null ;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
   
    private onAddToStage(event: egret.Event) {
        // egret.lifecycle.addLifecycleListener((context) => {
        //     context.onUpdate = () => {
        //     }
        // })
        // egret.lifecycle.onPause = () => {
        //     this.cnt.showTips('11111111') ;
        //     // egret.ticker.pause();
        // }
        // egret.lifecycle.onResume = () => {
        //     console.log(22)
        //     this.cnt.showTips('2222') ;
        // }
        // this.loadingView = new LoadingUI(750,1334);
        // this.stage.addChild(this.loadingView);
 
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("load");
    }

    /**
     * preload资源组加载完成
     */
    private onResourceLoadComplete(event: RES.ResourceEvent) {
        if (event.groupName == "load") {
            this.loadingView = new LoadingUI(750,1334);
            this.stage.addChild(this.loadingView);
            RES.loadGroup("preload");
        }
        if (event.groupName == "preload") {
            // this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     */
    private onItemLoadError(event: RES.ResourceEvent) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
        if( !!this.out && !this.out.parent ){
            this.out.showSocketErr();
            this.addChild(this.out) ;
        }
    }

    /**
     * 资源组加载出错
     */
    private onResourceLoadError(event: RES.ResourceEvent) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        this.onResourceLoadComplete(event);

    }

    /**
     * preload资源组加载进度
     */
    private onResourceProgress(event: RES.ResourceEvent) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    /**
     * 创建游戏场景 ( 申请房间 、建立websocket)
     */
    async createGameScene() {
        let $store = window['store'];
        this.Width = $store['stage_Width'] = this.stage.stageWidth;
        this.Height = $store['stage_Height'] = this.stage.stageHeight;
        this.anWidth = $store['stage_anWidth'] = this.Width/2;
        const anHeight =  $store['stage_anHeight'] = this.Height/2;
        $store.scale = ( this.Height / 1334 ).toFixed(2);
        if(parseFloat(($store.scale))<0.92){
           $store.scale = parseFloat(($store.scale))+0.08;
        }
        
        $store['$main'] = this ;
        // 头部实例
        // let header:Header = new Header(Width);
        // header.x = 0;
        // header.y = 0;
        // this.addChild(header);

        // 内容区实例
        this.cnt = new Cnt(this.Width,this.Height,this.anWidth,anHeight);
        this.cnt.x = 0;
        this.cnt.y = 0;
        this.addChild(this.cnt);
        $store['$cnt'] = this.cnt ;

        // 底部实例
        this.bottom = new Foot();
        this.bottom.anchorOffsetY = 90;
        this.bottom.x = 0;
        this.bottom.y = this.Height;
        this.addChild(this.bottom);

        // 晋级  缺动画
        this.promotion = new Promotion();
        // this.addChild(this.promotion) ;

        //杯赛过场change
        this.change = new Change();
        this.change.x = 0;

        // this.addChild( this.change );
        // setTimeout(()=>{
        //     egret.Tween.get( this.change ).to({x:-750},200);  
        // },2000)

        //被踢出房间 的实例
        setTimeout(()=>{
            this.out = new Pop02Out();
        },5000)

        this.start_pop = new Pop( $store['stage_Width'] , $store['stage_Height'] ,'text-begin_png');
        this.stop_pop = new Pop( $store['stage_Width'] , $store['stage_Height'] ,'text-over_png' );

         //头部实例2
        this.top = new Top(this.Width);
        this.top.x = 0;

        // 金币不足
        this.coinNone = new Pop02Money();
        $store['$coinNone'] = this.coinNone ;

        this.initStage();

        /**
         *  声音
         * mchange 登场
         * startOver 比赛开始or结束
         * mpromotion  晋级
         * 
         */
        this.startOver = RES.getRes("start_mp3");
        this.mpromotion = RES.getRes("promotion_mp3");
        this.mchange = RES.getRes("change_mp3");

        if( $store['env_variable'].src === 'qqsd' && window['platform'] === 'ios' ){
             this.top.y = 45;
        }else{
            this.top.y = 0;
        }

        this.addChild(this.top);

        if( $store['env_variable'].ck === '' || !$store['env_variable'].ck ){
            console.error('请带上ck');
            // 临时ck
            await window['getJson']( { type:'get' ,url :'http://crazybet.choopaoo.com:7899/login/guest?deviceid=1238815' ,dataType:'json'} ).then(( res )=>{
                $store['env_variable'].ck = res.data.ck;
                $store['orderObj'].ck = res.data.ck;
            })

        }
        await window['getJson']( { type:'get' ,url :  $store['initDomain']+'/api/join?ck='+ $store['env_variable'].ck +'&src='+ $store['env_variable'].src ,dataType:'json'} ).then(( res )=>{
                // 申请房间
                if( res.status && res.status === '100' ){
                    // 保存房间信息
                    let roomMsg = res.data;
                    $store['orderObj']['roomid'] = roomMsg.roomid ;  // 下单 需要
                    $store['orderObj']['node'] = roomMsg.node ;
                    // websocket
                    try{
                        this.webSocket = new egret.WebSocket();
                        this.webSocket.addEventListener( egret.ProgressEvent.SOCKET_DATA , this.onReceiveMess ,this );
                        this.webSocket.addEventListener( egret.Event.CONNECT ,this.onSocketOpen ,this );
                        this.webSocket.addEventListener( egret.IOErrorEvent.IO_ERROR ,this.onIOError ,this );
                        this.webSocket.addEventListener( egret.Event.CLOSE ,this.onCloseSock ,this );

this.webSocket.connectByUrl("ws://crazybet.choopaoo.com:7699/vguess?uid="+ roomMsg.uid +'&roomid='+roomMsg.roomid +'&port='+roomMsg.port+'&node='+roomMsg.node+'&ip='+roomMsg.ip+'&create_time='+roomMsg.create_time );
// this.webSocket.connectByUrl("ws://10.0.1.41:9000/vguess?uid="+ roomMsg.uid +'&roomid='+roomMsg.roomid +'&port='+roomMsg.port+'&node='+roomMsg.node+'&ip='+roomMsg.ip+'&create_time='+roomMsg.create_time );


                    }catch(e){
                        alert('websock error')
                    }
                }else{
                    alert( res.message );
                    console.log('申请房间出错')
                }
            })
    }

    /**
     * 常用数据初始化
     */
    private initStage(){
        // uid  还得有个uid ..
        let $store = window['store'] ,
            $urlData = window['urlData'];

        // 桌子缩放计算 
        // $store.scale = 0.91;
        // 取ck 按src+ck 的形式，防止串号 = 替换 $
        if( $urlData ){
            if( $urlData.ck ){
                $store['orderObj'].ck = $urlData.ck.replace(/\$/g,'=');
                $store['env_variable'].ck = $urlData.ck.replace(/\$/g,'=');
            }else{
                $store['orderObj'].ck = egret.localStorage.getItem('ck');
                $store['env_variable'].ck = egret.localStorage.getItem('ck');
            }
            if( $urlData.src ){
                $store['env_variable'].src = $urlData.src ;
            }else{
                $store['env_variable'].src = egret.localStorage.getItem('src')
            }
            if( $urlData.uid ){
                $store['env_variable'].uid = $urlData.uid ;
            }
            if( $urlData.backUrl ){
                 $store['env_variable'].backUrl = $urlData.backUrl ;
            }
        }

        // platform
        if( window['platform'] ){
            $store['env_variable'].platform = window['platform'] ;
        }else{
            $store['env_variable'].platform = egret.localStorage.getItem('platform'); 
        }

        // 头像随机的位置
        $store['userPosition'] = window['randomArray']( 9 );

        //  用户头像的9个 实例对象 
        this.cnt.initUserImg();

        // 初始化点球
        this.cnt.initAllPenalty() ;
    }

    // 函数：生成图片

    // private createBitmapByName(name: string): egret.Bitmap {
    //     let result = new egret.Bitmap();
    //     let texture: egret.Texture = RES.getRes(name);
    //     result.texture = texture;
    //     return result;
    // }

    /**
     *  onReceiveMess  websock 接收消息
     */
    private onReceiveMess(e:egret.Event):void{
        let self = this ,
            $store = window['store'] ,
        // event.updateAfterEvent();  //  什么时候进行强制刷新 ??????手机上用户立场 舞台不刷新 
            msg = this.webSocket.readUTF();
        if(~msg.indexOf('You said')|| !~msg.indexOf('{')){
            // console.log(msg)
        }else{
            //  后台数据  分发
            let msgObj = JSON.parse( msg ),
                $msgObjBody = msgObj.body;

            switch ( msgObj.messageid ) {
                    // 进场的数据 2000  （时间进度分析）
                case '2000':
                    if( $msgObjBody ){
                        // 房间信息
                        if( $msgObjBody.room_info ){
                            this.top.setTextDate( $msgObjBody.room_info.desc )
                            this.top.setTextTitle(  $msgObjBody.room_info.title )
                            $store['cur_room_info'] = $msgObjBody.room_info;
                            // 下单需要的期号
                            $store['orderObj']['expect'] = $msgObjBody.room_info.expect ;
                            $store['orderObj']['stageid'] = $msgObjBody.room_info.stageid ;

                        }
                        if( $msgObjBody.user_info ){
                            $store.user_info =  $msgObjBody.user_info ;
                            // 初始化用户信息
                            this.cnt.initUserMsg();
                            // 初始化底部按钮
                            this.bottom.initBtn();
                        }
                        if( $msgObjBody.matches ){
                            $store.matches =  $msgObjBody.matches; 
                            //  初始化场地容器 数据
                            this.cnt.initFieldCon();

                        }
                        // 初始化 进场的数据
                        if( $msgObjBody.pre_result && !!this.promotion ){
                            // 临时去
                            this.promotion.upPromotionMsg( $msgObjBody.pre_result ) ;
                        }

                        // 处理其他阶段进入的时间 ( 用于不同阶段进入的情况 )
                        if( $msgObjBody.curr_messageid ){
                            $store['unableClick'] = true ;
                            switch( $msgObjBody.curr_messageid ){
                                case '2021':
                                    if( $msgObjBody.result && $msgObjBody.result ){
                                        // 直接显示出win的结果 
                                        this.cnt.showFieldWin( $msgObjBody.result ) ;
                                    }
                                ;break;
                                case '2006':
                                    if( !!this.cnt ){
                                        this.cnt.cnt_upTextTips('正在派奖...');
                                    }
                                    if( $msgObjBody.result && $msgObjBody.result ){
                                        // 直接显示出win的结果 
                                        this.cnt.showFieldWin( $msgObjBody.result ) ;
                                    }
                                ;break;
                                case '2002':
                                    if( !!this.cnt ){
                                        this.cnt.cnt_upTextTips('竞猜即将开始...');
                                    }
                                ;break;
                                case '2004':
                                    if( !!this.cnt ){
                                        this.cnt.cnt_upTextTips('等待开奖');
                                    }
                                    // 竞猜完毕
                                    $store['unableClick'] = true ;

                                    // 停止竞猜 直接移除定时器 加入开始
                                    if( this.out && !this.out.parent ){
                                        this.stop_pop.y = 0;
                                        this.addChild( this.stop_pop );
                                        this.upTopLev();
                                        if( !( ( $store['env_variable'].src === 'qqsd' || $store['env_variable'].src === '500app' ) && window['platform'] === 'android' ) ){
                                            this.stop_pop.y = 227;
                                            egret.Tween.get( this.stop_pop ).to( { y:0 } , 250 );
                                            this.startOver.play(0,1);
                                        }

                                    }

                                    if( this.stop_pop){
                                        if( !( ( $store['env_variable'].src === 'qqsd' || $store['env_variable'].src === '500app' ) && window['platform'] === 'android' ) ){
                                            egret.Tween.get( this.stop_pop ).to({y:227},250).call(()=>{
                                                if( this.stop_pop.parent ){
                                                    this.removeChild( this.stop_pop );
                                                }
                                            });
                                        }else{
                                            if( this.stop_pop.parent ){
                                                this.removeChild( this.stop_pop );
                                            }
                                        }

                                    }

                                ;break;
                                // 可投注阶段
                                case '2003': 
                                    $store['unableClick'] = false ;
                                    // 请下注
                                    switch ( $msgObjBody.stageid ){
                                        case '1':
                                            this.cnt.cnt_timer(( 30 - parseInt( $msgObjBody.process_time ))+ '' );
                                            $store['lock_time'] = Math.floor (( new Date().getTime() / 1000 )) * 1000  + ( 30 - parseInt( $msgObjBody.process_time) )*1000;
                                        ;break;
                                        case '2':
                                            $store['lock_time'] = Math.floor (( new Date().getTime() / 1000 )) * 1000 + ( 25 - parseInt( $msgObjBody.process_time) )*1000;
                                            this.cnt.cnt_timer(( 25 - parseInt( $msgObjBody.process_time ))+ '' );
                                        ;break;
                                        case '3':
                                            $store['lock_time'] = Math.floor (( new Date().getTime() / 1000 )) * 1000 + ( 21 - parseInt( $msgObjBody.process_time) )*1000;                                        
                                            this.cnt.cnt_timer(( 21 - parseInt( $msgObjBody.process_time ))+ '' );
                                        ;break;
                                    }
                                    if( !!this.cnt ){
                                        this.cnt.cnt_upTextTips('请选择球队下注...');
                                    }

                                    // 处理层级
                                    if( $store.userPositionLocal ){
                                        let item = null ,
                                            choseUserImg = 'userImg',
                                            bigIndex = 0 ,
                                            bigUserImg = null ;

                                        for( item  in $store.userPositionLocal ){
                                            if( $store.userPositionLocal[item] ){
                                                if( $store['$bgCourtWrap']['getChildIndex']( this.cnt[ choseUserImg +  $store.userPositionLocal[item] ] ) > bigIndex ){
                                                    bigIndex = $store['$bgCourtWrap']['getChildIndex']( this.cnt[ choseUserImg +  $store.userPositionLocal[item] ] ) ;
                                                    bigUserImg = this.cnt[ choseUserImg +  $store.userPositionLocal[item] ] ;
                                                }
                                            }
                                        }
                                        if( !!bigUserImg ){
                                            if( !!$store['$fieldContain'] && $store['$fieldContain'].parent && bigUserImg.parent ){
                                                $store['$bgCourtWrap'].swapChildren( $store['$fieldContain'] , bigUserImg ) ;
                                                $store['$bgCourtWrap'].setChildIndex( $store['$fieldContain'] , bigIndex + 1 ) ;
                                            }
                                        }
                                    }

                                ;break;
                                case '2005':
                                    if( !!this.cnt ){
                                        this.cnt.cnt_upTextTips('正在开奖...');
                                    }
                                    if( this.start_pop && this.start_pop.parent ){
                                        this.removeChild( this.start_pop );
                                    }                                    
                                    if( this.stop_pop && this.stop_pop.parent ){
                                        this.removeChild( this.stop_pop );
                                    }
                                    if( $msgObjBody.result && $msgObjBody.result.length > 0 ){
                                        if( parseInt ( $msgObjBody.process_time ) < 4 ){
                                            this.cnt.adjustPenalty( $msgObjBody.result )
                                        }else{
                                            // 直接显示出win的结果 
                                            this.cnt.showFieldWin( $msgObjBody.result ) ;
                                        }
                                    }
                                ;break;
                            }
                        }
                    }
                    ;break;
                case '2012':
                    // 用户进场
                    if( $msgObjBody ){
                        this.cnt.addUserImage( $msgObjBody.username, $msgObjBody.photo , $msgObjBody.total , $msgObjBody.uid );
                    }
                    break;
                case '2013':
                    // 删除用户
                    if( $msgObjBody ){
                        this.cnt.removeUserImage( $msgObjBody.uid );
                    }
                break;
                case '2001':
                    // 赛事消息 2001  缺一个 换厂  清除  数据
                    if( $msgObjBody ){
                         // 清空 投注 数据  coin_Num   是否合理 ？
                         if( $store['coin_Num'] ){
                             $store['coin_Num'] = {} ;
                         }

                        if( this.start_pop && this.start_pop.parent ){
                            this.removeChild( this.start_pop );
                        }      

                        if( $msgObjBody.room_info ){
                            this.top.setTextDate(  $msgObjBody.room_info.desc )
                            this.top.setTextTitle(  $msgObjBody.room_info.title )
                            $store['cur_room_info'] = $msgObjBody.room_info;
                        }
                        if( $msgObjBody.matches ){
                            $store.matches =  $msgObjBody.matches;
                            //  初始化场地容器 数据
                            this.cnt.initFieldCon();

                        }
                        
                        if( $msgObjBody.stageid ){
                            switch( $msgObjBody.stageid  ){
                                case '1':
                                    // 出现换厂
                                    if( $msgObjBody.matches && $msgObjBody.room_info ){
                                        // 更新数据
                                        this.change.upChangeMsg(  $msgObjBody.matches , $msgObjBody.room_info );
                                        if( !!this.change || !this.change.parent ){
                                            this.mchange.play(0,1);
                                            this.change.x = 0;
                                            this.addChild( this.change );
                                            this.upTopLev();

                                            this.swapChildren( this.change , this.top )

                                            setTimeout(()=>{
                                                egret.Tween.get( this.change ).to( { x : -750 }, 700 ).call(()=>{
                                                    if( this.change.parent ){
                                                        this.removeChild( this.change ) ;
                                                    }
                                                });  
                                            },2500)                                    
                                        }
                                    }
                                ;break;
                                case '2':
                                    // 4 ==> 2 的动画  ( 转场的声音 )
                                    if( !!this.promotion ){
                                        this.mpromotion.play(0,1);
                                        this.addChild(this.promotion);
                                        this.upTopLev() ;
                                        this.swapChildren( this.promotion , this.top )
                                    }
                                    this.promotion.moveSecond( $msgObjBody.pre_result );
                                    setTimeout(()=>{
                                        if( this.promotion.parent ){
                                            this.removeChild( this.promotion )
                                        }
                                    },2500)
                                ;break;
                                case '3':
                                    // 2 == > 1 动画 ( 转场的声音 )
                                    if( !!this.promotion ){
                                        this.mpromotion.play(0,1);
                                        this.addChild(this.promotion)
                                        this.upTopLev();
                                        this.swapChildren( this.promotion , this.top )
                                        
                                    }
                                    this.promotion.moveThree( $msgObjBody.pre_result ) ;
                                    setTimeout(()=>{
                                        if( this.promotion.parent ){
                                            this.removeChild( this.promotion )
                                        }
                                    },2500)
                                ;break;
                            }
                        }

                        // 处理层级
                        if( $store.userPositionLocal ){
                            let item = null ,
                                choseUserImg = 'userImg',
                                bigIndex = 0 ,
                                bigUserImg = null ;
                            for( item  in $store.userPositionLocal ){
                                if( $store.userPositionLocal[item] ){
                                    if( $store['$bgCourtWrap']['getChildIndex']( this.cnt[ choseUserImg +  $store.userPositionLocal[item] ] ) > bigIndex ){
                                        bigIndex = $store['$bgCourtWrap']['getChildIndex']( this.cnt[ choseUserImg +  $store.userPositionLocal[item] ] ) ;
                                        bigUserImg = this.cnt[ choseUserImg +  $store.userPositionLocal[item] ] ;
                                    }
                                }
                            }
                            if( !!bigUserImg ){
                                if( !$store['unableClick'] && !!$store['$fieldContain']
                                    && $store['$fieldContain'].parent && bigUserImg.parent ){
                                    $store['$bgCourtWrap'].swapChildren( $store['$fieldContain'] , bigUserImg ) ;
                                    $store['$bgCourtWrap'].setChildIndex( $store['$fieldContain'] , bigIndex + 1 ) ;
                                }
                            }
                        }

                        // clean all  win
                        this.cnt.cnt_removeAllWinIcon();
                        // clean all  点球、进球黑框
                        this.cnt.cleanAllPenalty() ;
                        // clean all 自己投注和他人投注
                    }
                break;
                case '2002':
                    // 准备 prepare_bet   出现开始竞猜  
                    this.cnt.cnt_removeAllWinIcon();
                    if( $msgObjBody ){
                        $store['orderObj']['expect'] = $msgObjBody.expect ;
                        $store['orderObj']['stageid'] = $msgObjBody.stageid ;
                    }
                    this.cnt.cnt_upTextTips('竞猜即将开始...');
                    
                ;break;
                case '2019':
                    // start_guess   去文案 
                    if( this.out && !this.out.parent ){
                        this.start_pop.y = 0;
                        this.addChild( this.start_pop );
                        this.upTopLev() ;
                        if( !( ( $store['env_variable'].src === 'qqsd' || $store['env_variable'].src === '500app' ) && window['platform'] === 'android' ) ){
                            this.start_pop.y = 227;
                            egret.Tween.get( this.start_pop ).to({y:0},250);
                            this.startOver.play(0,1);
                        }

                    }

                    if( $msgObjBody ){
                        $store['orderObj']['expect'] = $msgObjBody.expect ;
                        $store['orderObj']['stageid'] = $msgObjBody.stageid ;
                    }
                    this.cnt.cnt_upTextTips('');

                    // 处理层级
                    if( $store.userPositionLocal ){
                        let item = null ,
                            choseUserImg = 'userImg',
                            bigIndex = 0,
                            bigUserImg = null ;
                        for( item  in $store.userPositionLocal ){
                            if( $store.userPositionLocal[item] ){
                                if( $store['$bgCourtWrap']['getChildIndex']( this.cnt[ choseUserImg +  $store.userPositionLocal[item] ] ) > bigIndex ){
                                    bigIndex = $store['$bgCourtWrap']['getChildIndex']( this.cnt[ choseUserImg +  $store.userPositionLocal[item] ] ) ;
                                    bigUserImg = this.cnt[ choseUserImg +  $store.userPositionLocal[item] ] ;
                                }
                            }
                        }
                        if( !!bigUserImg ){
                            if( !$store['unableClick'] && !!$store['$fieldContain']
                                && $store['$fieldContain'].parent && bigUserImg.parent ){
                                $store['$bgCourtWrap'].swapChildren( $store['$fieldContain'] , bigUserImg ) ;
                                $store['$bgCourtWrap'].setChildIndex( $store['$fieldContain'] , bigIndex + 1 ) ;
                            }
                        }
                    }

                ;break;
                case '2003':
                    // 开始 投注 显示文案，请下注 去除竞猜 开始定时器 start_bet  4 == 30s
                    if( $msgObjBody ){
                        $store['orderObj']['expect'] = $msgObjBody.expect ;
                        $store['orderObj']['stageid'] = $msgObjBody.stageid ;

                        $store['unableClick'] = false ;
                        // 处理层级
                        if( $store.userPositionLocal ){
                            let item = null ,
                                choseUserImg = 'userImg',
                                bigIndex = 0 ,
                                bigUserImg = null ;
                            
                            for( item  in $store.userPositionLocal ){
                                if( $store.userPositionLocal[item] ){
                                    if( $store['$bgCourtWrap']['getChildIndex']( this.cnt[ choseUserImg +  $store.userPositionLocal[item] ] ) > bigIndex ){
                                        bigIndex = $store['$bgCourtWrap']['getChildIndex']( this.cnt[ choseUserImg +  $store.userPositionLocal[item] ] ) ;
                                        bigUserImg = this.cnt[ choseUserImg +  $store.userPositionLocal[item] ] ;
                                    }
                                }

                            }
                            if( !!bigUserImg ){
                                if( !$store['unableClick'] && !!$store['$fieldContain']
                                    && $store['$fieldContain'].parent && bigUserImg.parent ){
                                    $store['$bgCourtWrap'].swapChildren( $store['$fieldContain'] , bigUserImg ) ;
                                    $store['$bgCourtWrap'].setChildIndex( $store['$fieldContain'] , bigIndex + 1 ) ;
                                }
                            }

                        }

                        // 请下注
                        this.cnt.cnt_upTextTips('请选择球队下注...');
                        let newTime = new Date().getTime() ;
                        
                        switch ( $msgObjBody.stageid ){
                            case '1':
                                $store['lock_time'] = Math.floor ( newTime / 1000 ) * 1000 + 30*1000;
                                this.cnt.cnt_timer('30');
                            ;break;
                            case '2':
                                $store['lock_time'] = Math.floor (( newTime / 1000 )) * 1000 + 25*1000;
                                this.cnt.cnt_timer('26');
                            ;break;
                            case '3':
                                $store['lock_time'] = Math.floor (( newTime / 1000 )) * 1000 + 21*1000;
                                this.cnt.cnt_timer('21');
                            ;break;
                        }

                        if( this.start_pop && this.start_pop.parent ){

                            if( !( ( $store['env_variable'].src === 'qqsd' || $store['env_variable'].src === '500app' ) && window['platform'] === 'android' ) ){
                                egret.Tween.get( this.start_pop ).to({y:227},200).call(()=>{
                                    if( this.start_pop.parent ){
                                        this.removeChild( this.start_pop );
                                    }
                                });
                            }else{
                                if( this.start_pop.parent ){
                                    this.removeChild( this.start_pop );
                                }
                            }

                        }
                    }

                ;break;
                case '2004':
                    // 竞猜完毕
                    $store['unableClick'] = true ;

                    // 停止竞猜 直接移除定时器 加入开始
                    if( this.out && !this.out.parent ){
                        this.stop_pop.y = 0;
                        this.addChild( this.stop_pop );
                        this.upTopLev();

                        if( !( ( $store['env_variable'].src === 'qqsd' || $store['env_variable'].src === '500app' ) && window['platform'] === 'android' ) ){
                            this.stop_pop.y = 227;
                            egret.Tween.get( this.stop_pop ).to( { y:0 } , 250 );
                            this.startOver.play(0,1);
                        }

                    }

                    // 移除文案
                    this.cnt.cnt_upTextTips('');
                    this.cnt.cnt_timerRemove();

                    if( this.start_pop && this.start_pop.parent ){
                        this.removeChild( this.start_pop );
                    }      

                    setTimeout(()=>{
                        if( this.stop_pop){
                            if( !( ( $store['env_variable'].src === 'qqsd' || $store['env_variable'].src === '500app' ) && window['platform'] === 'android' ) ){
                                egret.Tween.get( this.stop_pop ).to({y:227},250).call(()=>{
                                    if( this.stop_pop.parent ){
                                        this.removeChild( this.stop_pop );
                                    }
                                });
                            }else{
                                if( this.stop_pop.parent ){
                                    this.removeChild( this.stop_pop );
                                }
                            }

                        }
                        // 收集金币
                        this.cnt.cnt_collectCoin();
                        setTimeout(()=>{
                            this.cnt.cnt_upTextTips('等待开奖');
                        },300)
                    },2500);

                    if( $msgObjBody ){
                        $store['orderObj']['expect'] = $msgObjBody.expect ;
                        $store['orderObj']['stageid'] = $msgObjBody.stageid ;
                    }
                ;break;

                case '2005':
                    // 正在开奖 出现 进度条 比分的进度等等
                    $store['unableClick'] = true ;
                    this.cnt.cnt_upTextTips('正在开奖...');
                    if( this.stop_pop && this.stop_pop.parent ){
                        this.removeChild( this.stop_pop );
                    }

                    if( $msgObjBody ){
                        // 模拟显示中奖
                        if( $msgObjBody.result &&  $msgObjBody.result.length > 0 ){
                            this.cnt.adjustPenalty( $msgObjBody.result )
                        }
                    }
                    // again 收集金币
                    if( this.cnt ){
                        this.cnt.cnt_collectCoin();
                    }

                ;break;
                case'2006':
                    // 正在派奖
                    $store['unableClick'] = true ;
                    this.cnt.cnt_upTextTips('正在派奖...');
                ;break;

                case '2007':
                    // 派奖
                    this.cnt.cnt_upTextTips('');
                    // settle_list 处理
                    if( $msgObjBody && $msgObjBody.settle_list &&$msgObjBody.settle_list.length > 0 ){
                        // settle_list = window['convertArrToObj']( $msgObjBody.settle_list , 'uid' )
                        $store['settle_list'] = $msgObjBody.settle_list ;
                        this.cnt.settle_listFn(  $msgObjBody.settle_list ) ;
                    }
                ;break;

                case '2010':
                    // 他人投注 金币
                    let $store_coinNum = window['store']['coin_Num'];
                    if($msgObjBody){
                        if( !($store_coinNum[$msgObjBody.matchid]) ){
                            $store_coinNum[$msgObjBody.matchid] = {
                                home_golds : null,
                                my_golds_l : null,
                                my_golds_r : null ,
                                away_golds: null ,
                            }
                        }
                        if( $msgObjBody.selection === '1' ){
            $store_coinNum[$msgObjBody.matchid].home_golds = $store_coinNum[$msgObjBody.matchid]['home_golds'] ? parseInt ( $store_coinNum[$msgObjBody.matchid]['home_golds'] ) + parseInt( $msgObjBody.bet_golds )  :
            parseInt ( $msgObjBody.bet_golds ) ;
                            
                        }else if( $msgObjBody.selection === '2' ){
            $store_coinNum[$msgObjBody.matchid].away_golds = $store_coinNum[$msgObjBody.matchid]['away_golds'] ? parseInt ( $store_coinNum[$msgObjBody.matchid]['away_golds'] ) + parseInt( $msgObjBody.bet_golds )  :
            parseInt ( $msgObjBody.bet_golds ) ;
                        }
                        //  执行金币动画  
                        //  matchid:string , selection:string , uid:string , bet_golds:string
                        this.cnt.cnt_Other_Coin( $msgObjBody.matchid , $msgObjBody.selection ,$msgObjBody.uid, $msgObjBody.bet_golds , $msgObjBody.total );
                    }

                ;break;

                case '2025':
                    // 提出用户 展现弹窗
                ;break;
                case '2016':
                    // 被提出
                    if( !!this.out || !this.out.parent ){
                        this.out.showLongTime();
                        this.addChild(this.out) ;
                    }
                    
                ;break;
                case '2017':
                    this.cnt.showTips('使用了旧的房间号 error at 2017') ;
                    window.location.reload() ;
                ;break

                case '2011':
                    if( $msgObjBody && $msgObjBody.uid && $msgObjBody.phrase_id ){
                        this.cnt.showChat( $msgObjBody.uid , $msgObjBody.phrase_id )
                    }
                break;

            }

            // setTimeout(()=>{
            //     console.log( 123 );
            // },2000)

        }
    }
    
    /**
     *  onSocketOpen  websock 接收消息
     */
    private onSocketOpen():void{
        // this.webSocket.writeUTF(JSON.stringify(start))
        this.stage.removeChild(this.loadingView);
        setInterval(()=>{
            this.webSocket.writeUTF('p')
        },5000)
        this.webSocket.flush();
    }

    /**
     *  onIOError  websock 接收消息
     */
    async onIOError(){
        let $store = window['store'] ;
        if(  $store &&  $store['isAgainConnect'] &&  $store['isAgainConnect'] === 1  ){
            // 重连
        await window['getJson']( { type:'get' ,url :  $store['initDomain']+'/api/join?ck='+ $store['env_variable'].ck +'&src='+ $store['env_variable'].src ,dataType:'json'} ).then(( res )=>{
                // 申请房间
                if( res.status && res.status === '100' ){
                    // 保存房间信息
                    let roomMsg = res.data;
                    $store['orderObj']['roomid'] = roomMsg.roomid ;  // 下单 需要
                    $store['orderObj']['node'] = roomMsg.node ;
                    // websocket
                    try{
                        this.webSocket = new egret.WebSocket();
                        this.webSocket.addEventListener( egret.ProgressEvent.SOCKET_DATA , this.onReceiveMess ,this );
                        this.webSocket.addEventListener( egret.Event.CONNECT ,this.onSocketOpen ,this );
                        this.webSocket.addEventListener( egret.IOErrorEvent.IO_ERROR ,this.onIOError ,this );
                        this.webSocket.addEventListener( egret.Event.CLOSE ,this.onCloseSock ,this );

this.webSocket.connectByUrl("ws://crazybet.choopaoo.com:7699/vguess?uid="+ roomMsg.uid +'&roomid='+roomMsg.roomid +'&port='+roomMsg.port+'&node='+roomMsg.node+'&ip='+roomMsg.ip+'&create_time='+roomMsg.create_time );

// this.webSocket.connectByUrl("ws://10.0.1.41:9000/vguess?uid="+ roomMsg.uid +'&roomid='+roomMsg.roomid +'&port='+roomMsg.port+'&node='+roomMsg.node+'&ip='+roomMsg.ip+'&create_time='+roomMsg.create_time );
                    }catch(e){
                        alert('websocket error')
                        console.error('websocket error')
                    }
                }else{
                    console.error('申请房间出错')
                }
            })

             $store['isAgainConnect'] === 0 ;

        }else{
            if( this.out && !this.out.parent ){
                if( !!this.out ){
                    this.out.showSocketErr();
                    this.addChild(this.out) ;
                }
                console.error('linsten error')
            }
        }

    }
    /**
     *  onCloseSock  websock 接收消息
     */
    private onCloseSock():void{
        if( !!this.out && !this.out.parent ){
            this.out.showSocketErr();
            this.addChild(this.out) ;
            console.error( 'websock error' ) ;   
        }
    }


    /**
     *  冠军列表
     */
    private upTopLev(){
        let $store = window['store'] ;
        if( this.$children && this.$children.length ){
            // 处理层级
            let item = null ,
                choseUserImg = 'userImg',
                bigIndex = this['getChildIndex']( this.top ) ,
                bigUserImg = null ;
            for( item  in this.$children ){
                if( this.$children[item] && this.top ){
                    if( this['getChildIndex']( this.$children[item] ) > bigIndex ){
                        this.swapChildren( this.top , this.$children[item] ) ;
                    }
                }
            }
        }

    }



}

/**
 *  线下走 41 的虚拟杯   （ 端口号 ）
 *  10.0.1.41 
 *  9000  websock 
 *  9899  下单
 *  申请房间 2332
 * 
 * 
 *  线上 端口 数据
 *  7899  下单
 *  7799 申请房间  https 走 47799
 *   7699  ws  websock
 *   106.75.167.151   预发布走的接口
 * 
 *  线上直接走 crazybet.choopaoo.com
 * 
 */


window['store'] = {
    orderDomain:'http://crazybet.choopaoo.com:7899',
    initDomain:'http://crazybet.choopaoo.com:7799',

    // orderDomain:'http://10.0.1.41:9899',
    // initDomain:'http://10.0.1.41:2332',

    isAgainConnect: 1 , // 用于sock 重新连

    $main:null,
    $Top:null, // 往期弹窗
    $pop02Cham:null,
    $fieldContain:null ,
    $cnt:null, // cnt 实例
    $bgCourtWrap:null,  // 清除点球
    settle_list:[] , // 派奖的数据
    stage_Width: null ,
    stage_Height: null ,
    stage_anWidth: null ,
    stage_anHeight: null ,

    lock_time:null, // 定时器时间
    unableClick:true , // 限制投注行为 

    env_variable:{ // 查询当前的环境变量
        src : null ,
        ck : null ,
        uid : null ,
        platform : null ,
        backUrl: null,
    },
    scale: 1,  // 桌子缩放
    userPosition:[],  //  随机数组
    userPositionID:[],  // 头像的uid
    userPositionLocal:{},  // 维护一套 位置，为了金币分发
    emptyUserPosition:[],  // 空闲的位置
    user_info:[],
    curr_btn_coin:null,
    curr_btn_arr:[],
    coin_arr:[], // 为了收起
    userMySelf:null,  // 自己的实例便于修改自身金币
    cur_room_info:{
        // 当前房间信息
    },
    // 比赛id 找场地
    matFindField:{  
        // 112300330:'field41'
    },
    fieldLeftOrRight:{ // 找左右 分发金币

    },
    coin_Num:{
        // 112228430:{ // eg 累加金币
        //     home_golds:'0',
        //     away_golds:'0',
        //     my_golds_l:'0',
        //     wy_golds_r:'0'
        // }
    },
    orderObj:{
        // 下单 有些是非必须字段
        ck:null,
        expect:null,
        stageid:null,
        roomid:null,
        node:null,
    },
    matches:[],  // 赛事信息原

    // 记录 投注的金币数 ( 可能的金币 )
    allCoinObj:{
        // field41:{
        //     coin_left:[],
        //     coin_right:[],
        //     coin_left_local:{ x:null ,y:null },
        //     coin_right_local:{ x:null ,y:null }
        // }
    },
    // 收集金币的坐标集合 （分发金币的start）
    coin_local:{
        field41_l:{ x:214 ,y:128 },
        field41_r:{ x:458 ,y:128 },

        field42_l:{ x:214 ,y:328 },
        field42_r:{ x:458 ,y:328 },

        field43_l:{ x:214 ,y:528 },
        field43_r:{ x:458 ,y:528 },

        field44_l:{ x:214 ,y:728 },
        field44_r:{ x:458 ,y:728 },

        field21_l:{ x:214 ,y:242 },
        field21_r:{ x:458 ,y:242 },

        field22_l:{ x:214 ,y:516 },
        field22_r:{ x:458 ,y:516 },
  
        field1_l:{ x:214 ,y:330 },
        field1_r:{ x:458 ,y:330 }

    },
    userPositionObj:[
        //  位置坐标    
        {
            'x':null,
            'y':null
        },
        {
            'x':15,
            'y':80
        },
        {
            'x':15,
            'y':300
        },
        {
            'x':15,
            'y':520
        },
        {
            'x':15,
            'y':740
        },
        {
            'x':104,
            'y':80
        },
        {
            'x':104,
            'y':300
        },
        {
            'x':104,
            'y':520
        },
        {
            'x':104,
            'y':740
        }
    ],
} 
