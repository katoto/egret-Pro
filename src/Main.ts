/**
 *  虚拟杯
 * 
 * ( 用户信息和场地优化 new实例减少 )
 */

class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
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
    private popChat;

    private textfield:egret.TextField;
    
    private Width;
    private Height;
    private anWidth;
    private anHeight;
    


    private position:Array<number> =  [];

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
   
    private onAddToStage(event: egret.Event) {
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
            context.onUpdate = () => {
            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }
        //设置加载进度界面
        //Config to load process interface


        // this.loadingView = new LoadingUI(750,1334);
        // this.stage.addChild(this.loadingView);
 
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
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
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent) {
        if (event.groupName == "load") {
            this.loadingView = new LoadingUI(750,1334);
            this.stage.addChild(this.loadingView);
            RES.loadGroup("preload");
        }
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event: RES.ResourceEvent) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event: RES.ResourceEvent) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }


    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        this.Width = window['store']['stage_Width'] = this.stage.stageWidth;
        this.Height = window['store']['stage_Height'] = this.stage.stageHeight;
        this.anWidth = window['store']['stage_anWidth'] = this.Width/2;
        const anHeight =  window['store']['stage_anHeight'] = this.Height/2;


        // let sky = this.createBitmapByName("btn-500_png");
        // this.addChild(sky)

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

         //头部实例2
        this.top = new Top(this.Width);
        this.top.x = 0;
        this.top.y = 0;
        this.addChild(this.top);

        // 底部实例
        this.bottom = new Foot();
        this.bottom.anchorOffsetY = 90;
        this.bottom.x = 0;
        this.bottom.y = this.Height;
        this.addChild(this.bottom);

        //聊天区域实例
        this.popChat = new PopChat();
        this.popChat.y = this.Height;
        this.addChild(this.popChat);

        // 弹窗实例,竞猜开始or竞猜完毕
        // text-begin_png text-over_png
        this.pop = new Pop(this.Width,this.Height,'text-begin_png');
        // this.addChild(this.pop);
        

        



        // 层级控制
        // this.setChildIndex(header,0)
        // this.setChildIndex(this.cnt,1)
        // this.setChildIndex(this.top,2)
        // this.setChildIndex(this.bottom,3)
        // this.setChildIndex(this.pop,4)
        // this.setChildIndex(this.popChampionRecord,4)


        /*
        优化：
        1.图片合并，使用纹理集
        2. 函数
        */


        this.initStage();
        console.log( window['store'] )
        
        // websocket
        try{
            this.webSocket = new egret.WebSocket();
            this.webSocket.addEventListener( egret.ProgressEvent.SOCKET_DATA , this.onReceiveMess ,this );
            this.webSocket.addEventListener( egret.Event.CONNECT ,this.onSocketOpen ,this );
            this.webSocket.addEventListener( egret.IOErrorEvent.IO_ERROR ,this.onIOError ,this );
            this.webSocket.addEventListener( egret.Event.CLOSE ,this.onCloseSock ,this );
            this.webSocket.connectByUrl("ws://192.168.81.240:9777/ws?uid=1002920");
        }catch(e){
            alert('websock error')
        }


    }

    /**
     * 常用数据初始化
     */
    private initStage(){
        // 桌子缩放计算 
        window['store'].scale = 0.91;
        // 取ck 按src+ck 的形式，防止串号
        window['store']['orderObj'].ck = egret.localStorage.getItem('ck');
        // platform
        window['store']['platform'] = egret.localStorage.getItem('platform'); 
        // 头像随机的位置
        window['store']['userPosition'] = window['randomArray']( 9 );

        //  用户头像的9个 实例对象 
        this.cnt.initUserImg();

    }


    // 函数：生成图片
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     *  onReceiveMess  websock 接收消息
     */
    private onReceiveMess(e:egret.Event):void{
// event.updateAfterEvent();  //  什么时候进行强制刷新 ??????手机上用户立场 舞台不刷新 
        var msg = this.webSocket.readUTF();
        if(~msg.indexOf('You said')|| !~msg.indexOf('{')){
            console.log(msg)
        }else{
            //  后台数据  分发
            var msgObj = JSON.parse( msg );
            console.log( msgObj );
            var i = 1;
                i = i+1;

                if( msgObj && msgObj.body && msgObj.body.room_info && msgObj.body.room_info.desc ){
                    msgObj.body.room_info.desc = '第'+(i+1) +'期目';
                }
                if( msgObj && msgObj.body && msgObj.body.room_info && msgObj.body.room_info.title ){
                    msgObj.body.room_info.title = '欧洲杯赛'+(i+1)+'期目';
                }

            switch ( msgObj.messageid ) {
                    // 进场的数据 2000
                case '2000':
                    this.top.setTextDate(  msgObj.body.room_info.desc )
                    this.top.setTextTitle(  msgObj.body.room_info.title )
                    
                    if( msgObj.body ){
                        if( msgObj.body.user_info ){
                            window['store'].user_info =  msgObj.body.user_info ;
                            // 初始化用户信息
                            this.cnt.initUserMsg();
                            // 初始化底部按钮
                            this.bottom.initBtn();
                        }
                        if( msgObj.body.matches ){
                            window['store'].matches =  msgObj.body.matches;
                            //  初始化场地容器 数据
                            this.cnt.initFieldCon();
                        }
                    }
                    ;break;
                case '2012':
                    // 用户进场
                    if( msgObj.body ){
                        this.cnt.addUserImage( msgObj.body.username, msgObj.body.photo ,msgObj.body.total , msgObj.body.uid );
                    }
                    break;
                case '2013':
                    // 删除用户
                    if( msgObj.body ){
                        this.cnt.removeUserImage( msgObj.body.uid );
                    }
                break;
        
            }
            // var i = 0;
            // setInterval(() => {
            //     var obj = { 
            //         "username": "游客_2867477",
            //         "photo": "https://imgsa.baidu.com/news/pic/item/0df431adcbef7609ece86edb25dda3cc7dd99e97.jpg",
            //         "total": i+'202422',
            //         "uid": "1003118"+i
            //      }
            //     i = i+1 ;
            //     // 加用户
            //     this.cnt.addUserImage( obj.username, obj.photo ,obj.total , obj.uid );
            // },5000)


            // var j =0 ;
            // setInterval(() => {
            //     console.log('user out')
            //     // "uid": "1003118"+ j
            //     var obj = { 
            //         "uid": "1003118"+ j
            //      }
            //      j = j+1;
            //     // 删除用户
            //     // console.log( obj.uid )
            //     if( this.cnt ){
            //         this.cnt.removeUserImage( obj.uid );
            //     }
            // },10000)

            // console.log( this.cnt )
        }

    }

    
    /**
     *  onSocketOpen  websock 接收消息
     */
    private onSocketOpen():void{
        var start = {
            "msg_type":"user_join",
            "msg_id":"225",
            "data":{
                "uid":"1002920"
            }               
        }
        this.webSocket.writeUTF(JSON.stringify(start))

        // this.webSocket.writeUTF('x')
        
        this.webSocket.flush();
    }

    
    /**
     *  onIOError  websock 接收消息
     */
    private onIOError():void{
        console.error('linsten error')
    }
    /**
     *  onCloseSock  websock 接收消息
     */
    private onCloseSock():void{
        
    }


}

window['store'] = {
    'stage_Width': null ,
    'stage_Height': null ,
    'stage_anWidth': null ,
    'stage_anHeight': null ,

    'scale': 1,  // 桌子缩放
    'src':'off',
    'platform':'',
    'userPosition':[],  //  随机数组
    'userPositionID':[],  // 头像的uid
    'emptyUserPosition':[],  // 空闲的位置
    'user_info':[],
    'curr_btn_coin':null,
    'curr_btn_arr':[],
    'userMySelf':null,  // 自己的实例便于修改自身金币
    'orderObj':{
        // 下单
        'ck':null,
        'golds':null,
        'matchid':null,
        'expect':null,
        'odds':null,
        'homeid':null,
        'awayid':null,
        'stageid':null,
        'selection':null,
        'roomid':null,
        'node':null,
    },
    'matches':[],  // 赛事信息
    'userPositionObj':[
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
    'commit':function(key,val){
        console.log(key)
        console.log(val)
    },
    // 冠军记录
    'recording':[
        {'期号':121501,'赛事':'世界杯','url':'https://imgsa.baidu.com/news/pic/item/0df431adcbef7609ece86edb25dda3cc7dd99e97.jpg'},
        {'期号':121501,'赛事':'世界杯','url':'https://imgsa.baidu.com/news/pic/item/0df431adcbef7609ece86edb25dda3cc7dd99e97.jpg'},
        {'期号':121501,'赛事':'世界杯','url':'https://imgsa.baidu.com/news/pic/item/0df431adcbef7609ece86edb25dda3cc7dd99e97.jpg'},
        {'期号':121501,'赛事':'世界杯','url':'https://imgsa.baidu.com/news/pic/item/0df431adcbef7609ece86edb25dda3cc7dd99e97.jpg'},
        {'期号':121501,'赛事':'世界杯','url':'https://imgsa.baidu.com/news/pic/item/0df431adcbef7609ece86edb25dda3cc7dd99e97.jpg'},
        {'期号':121501,'赛事':'欧洲杯','url':'https://imgsa.baidu.com/news/pic/item/0df431adcbef7609ece86edb25dda3cc7dd99e97.jpg'},
        {'期号':121501,'赛事':'欧洲杯','url':'https://imgsa.baidu.com/news/pic/item/0df431adcbef7609ece86edb25dda3cc7dd99e97.jpg'},
        {'期号':121501,'赛事':'欧洲杯','url':'https://imgsa.baidu.com/news/pic/item/0df431adcbef7609ece86edb25dda3cc7dd99e97.jpg'},
        {'期号':121501,'赛事':'欧洲杯','url':'https://imgsa.baidu.com/news/pic/item/0df431adcbef7609ece86edb25dda3cc7dd99e97.jpg'},
        {'期号':121501,'赛事':'欧洲杯','url':'https://imgsa.baidu.com/news/pic/item/0df431adcbef7609ece86edb25dda3cc7dd99e97.jpg'},
        ]
} 
