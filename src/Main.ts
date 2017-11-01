//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

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
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
 
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
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent) {
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


    private textfield:egret.TextField;
    
    


    private position:Array<number> =  [];

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        const Width = this.stage.stageWidth;
        const Height = this.stage.stageHeight;
        const anWidth = Width/2;
        // const wrapHeight = (Height-80)/2;
        const anHeight = Height/2;

        this.initStage();
        console.log( window['store'] )
        // let sky = this.createBitmapByName("btn-500_png");
        // this.addChild(sky)

        // 头部实例
        // let header:Header = new Header(Width);
        // header.x = 0;
        // header.y = 0;
        // this.addChild(header);

        //头部实例2
        this.top = new Top(Width);
        this.top.x = 0;
        this.top.y = 0;
        this.addChild(this.top);

        // 底部实例
        let bottom:Foot = new Foot(Width,Height);
        bottom.anchorOffsetY = 90;
        bottom.x = 0;
        bottom.y = Height;
        bottom.alpha = 0.6;
        this.addChild(bottom);
        // 内容区实例
        this.cnt = new Cnt(Width,Height,anWidth,anHeight);
        this.cnt.x = 0;
        this.cnt.y = 0;
        this.addChild(this.cnt);

        //test
        let btn:egret.Bitmap = new egret.Bitmap(RES.getRes('btn_png'));
        this.addChild(btn);
        btn.touchEnabled=true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            btn.texture = RES.getRes('btnOn_png');
        },this)



        // //竞猜弹窗：开始或者结束,层级最高 ,这里思考是否可以优化，使用构造函数
        // let popGame:egret.Bitmap = new egret.Bitmap(RES.getRes('pop-game_png'));
        // popGame.anchorOffsetX = popGame.width/2;
        // popGame.anchorOffsetY = popGame.height/2;
        // popGame.x = Width/2;
        // popGame.y = Height/2;
        // this.addChild(popGame);

        // let textBegin:egret.Bitmap = new egret.Bitmap(RES.getRes('text-begin_png'));
        // textBegin.anchorOffsetX = textBegin.width/2;
        // textBegin.anchorOffsetY = textBegin.height/2;
        // textBegin.x = Width/2;
        // textBegin.y = Height/2;
        // this.addChild(textBegin);


        // let textOver:egret.Bitmap = new egret.Bitmap(RES.getRes('text-over_png'));
        // textOver.anchorOffsetX = textOver.width/2;
        // textOver.anchorOffsetY = textOver.height/2;
        // textOver.x = Width/2;
        // textOver.y = Height/2;
        // this.addChild(textOver);



        // 层级控制
        // this.setChildIndex(header,0)
        // this.setChildIndex(cnt,1)
        this.setChildIndex(this.top,2)
        this.setChildIndex(bottom,3)



        // 优化：
        // 1.图片合并，使用纹理集

        
        // websocket
        this.webSocket = new egret.WebSocket();
        this.webSocket.addEventListener( egret.ProgressEvent.SOCKET_DATA , this.onReceiveMess ,this );
        this.webSocket.addEventListener( egret.Event.CONNECT ,this.onSocketOpen ,this );
        this.webSocket.addEventListener( egret.IOErrorEvent.IO_ERROR ,this.onIOError ,this );
        this.webSocket.addEventListener( egret.Event.CLOSE ,this.onCloseSock ,this );

        this.webSocket.connectByUrl("ws://192.168.81.240:7777/ws");


    }

    /**
     * 常用数据初始化
     */
    private initStage(){
        // 桌子缩放计算 
        window['store'].scale = 0.91;
        // 取ck 打算按src+ck 的形式，防止串号
        window['store']['orderObj'].ck = egret.localStorage.getItem('ck');
        // platform
        window['store']['platform'] = egret.localStorage.getItem('platform'); 

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
    private onReceiveMess():void{
        var msg = this.webSocket.readUTF();
        if(~msg.indexOf('You said')|| !~msg.indexOf('{')){
            console.log(msg)
        }else{
            //  后台数据  分发
            var msgObj = JSON.parse( msg );
            var i = 1;
            setInterval(()=>{
                i = i+1;
                if( msgObj && msgObj.body && msgObj.body.room_info && msgObj.body.room_info.desc ){
                    msgObj.body.room_info.desc = '第'+(i+1) +'期目';
                }
                msgObj.body.room_info.title = '欧洲杯赛'+(i+1)+'期目';

            switch ( msgObj.messageid ) {
                case '2000':
                    // 进程的数据
                    this.top.setTextDate(  msgObj.body.room_info.desc )
                    this.top.setTextTitle(  msgObj.body.room_info.title )
                    ;break;
            }


            },3000)
            console.log( this.cnt )


        }

    }

    
    /**
     *  onSocketOpen  websock 接收消息
     */
    private onSocketOpen():void{
        var start = {
            "msg_type":"user_join",
            "msg_id":"123",
            "data":{
                "uid":"1002922"
            }               
        }
        this.webSocket.writeUTF(JSON.stringify(start))
        this.webSocket.writeUTF('x')

        // this.webSocket.flush();
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
    'scale': 1,  // 桌子缩放
    'src':'off',
    'platform':'',
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
    'commit':function(key,val){
        console.log(key)
        console.log(val)

    }
} 
