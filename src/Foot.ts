class Foot extends egret.DisplayObjectContainer{

    //  底部按钮实例
    private  btn_one:FootBtn
    private  btn_two:FootBtn
    private  btn_three:FootBtn
    //  底部背景
    private bottom:egret.Sprite

    // 底部按钮区域
    public constructor(){
        super();
        this.drawFoot();
    }
    private start_pop = null;
    private stop_pop = null ;
    //声音
    private musicgold:egret.Sound;
    private drawFoot(){
         this.musicgold = RES.getRes("bet_mp3");
        // //创建 URLLoader 对象
        // var loader:egret.URLLoader = new egret.URLLoader();
        // //设置加载方式为声音
        // loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
        // //添加加载完成侦听
        // loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        // //开始加载
        // loader.load(new egret.URLRequest("resource/assets/music/bet.mp3"));
        
        // 底部背景与投注按钮
        // 底部背景
        this.bottom = new egret.Sprite();
        this.bottom.graphics.beginFill(0x2c253e,0.6);
        this.bottom.graphics.drawRect(0,0,750,90);
        this.bottom.graphics.endFill();
        // 设置锚点，使背景处于舞台最下方
       
        this.addChild(this.bottom);

         // 规则
         let popRule = new Pop02RuleC();

         let btnRule:egret.Bitmap = new egret.Bitmap(RES.getRes('rule_png'));
         btnRule.x = 0;
         btnRule.y = 0;
         this.addChild(btnRule);
         btnRule.touchEnabled = true;
         btnRule.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
              this.parent.addChild(popRule);
              popRule.scale();
         },this)
        
       


         // 聊天  暂时隐藏处理

        //  let btnChat:egret.Bitmap = new egret.Bitmap(RES.getRes('chat_png'));
        //  btnChat.x = 670;
        //  btnChat.y = 20;
        //  this.addChild(btnChat);
        //  btnChat.touchEnabled = true;
        //  btnChat.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
        //         //聊天区域
        //     console.log('聊天');
        //     //聊天区域实例
        //     let popChat = new PopChat();
        //     this.parent.addChild(popChat);
            
        //  },this)
        // this.btn_one = new FootBtn(100);
        // this.btn_two = new FootBtn(500);
        // this.btn_three = new FootBtn(1000);
        // this.addChild(this.btn_one)
       

    }
    // private onLoadComplete(event:egret.Event):void {
    //     var loader:egret.URLLoader = <egret.URLLoader>event.target;
    //     //获取加载到的 Sound 对象
    //     var sound:egret.Sound = <egret.Sound>loader.data;
    //     this.sound = sound;
    // }
    // private sound:egret.Sound;
    // private soundChannel:egret.SoundChannel;
    // private onTouch(event:egret.Event){
    //     var sound = this.sound;
    //     var channel:egret.SoundChannel = this.soundChannel;
    //     //使用SoundChannel播放音频
    //     channel = sound.play(0,1);
    //     //Egret 3.0.4 新增获取音频长度 length 属性。
    //     //保存soundChannel对象
    //     this.soundChannel = channel;
    // }
    public initBtn(){
        let $store = window['store'] ;
        //三个投注按钮
        if( $store['user_info'] && $store['user_info'][0] && $store['user_info'][0].total ){
            if( parseInt ( $store['user_info'][0].total ) < 100000  ){
                this.btn_one = new FootBtn(100);
                this.btn_two = new FootBtn(500);
                this.btn_three = new FootBtn(1000);
                $store['curr_btn_arr'] = [ 100 ,500 , 1000 ];
            }else if( parseInt ( $store['user_info'][0].total ) >= 1000000  ){
                this.btn_one = new FootBtn(1000);
                this.btn_two = new FootBtn(10000);
                this.btn_three = new FootBtn(50000);
                $store['curr_btn_arr'] = [ 1000 ,10000 , 50000 ];
            }else{
                this.btn_one = new FootBtn(500);
                this.btn_two = new FootBtn(1000);
                this.btn_three = new FootBtn(10000);
                $store['curr_btn_arr'] = [ 500 ,1000 , 10000 ];
            }

            this.btn_one.x = 188;
            this.btn_two.x = $store['stage_Width'] / 2;
            this.btn_three.x = 560;
            this.addChild( this.btn_one );
            this.addChild( this.btn_two );
            this.addChild( this.btn_three );  
            
            this.btn_one['init_scale']( 1 )
            this.btn_two['init_scale']( 0.9 )
            this.btn_three['init_scale']( 0.9 )
            $store['curr_btn_coin'] = $store['curr_btn_arr'][0]

            this.btn_one.addEventListener( egret.TouchEvent.TOUCH_TAP, this.btn_oneDown ,this )
            this.btn_two.addEventListener( egret.TouchEvent.TOUCH_TAP, this.btn_twoDown ,this )
            this.btn_three.addEventListener( egret.TouchEvent.TOUCH_TAP, this.btn_threeDown ,this )
            //监听按钮的触摸事件
            // this.btn_one.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
            // this.btn_two.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
            // this.btn_three.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);

        }else{
            console.error( 'user_info data error  at foot.ts' )
        }

    }
    private btn_oneDown( e:egret.Event){
        this.btn_two['init_scale']( 0.9 )
        this.btn_three['init_scale']( 0.9 )
        if( this.btn_one['get_scaleVal']() !== 1 ){
            this.btn_one['init_scale']( 1 );
            window['store']['curr_btn_coin'] = window['store']['curr_btn_arr'][0] 
        }
         this.musicgold.play(0,1);
    }
    private btn_twoDown( e:egret.Event){
        this.btn_one['init_scale']( 0.9 )
        this.btn_three['init_scale']( 0.9 )
        if( this.btn_two['get_scaleVal']() !== 1 ){
            this.btn_two['init_scale']( 1 )
            window['store']['curr_btn_coin'] = window['store']['curr_btn_arr'][1]
        }
         this.musicgold.play(0,1);
    }
    private btn_threeDown( e:egret.Event){
        this.btn_two['init_scale']( 0.9 )
        this.btn_one['init_scale']( 0.9 )
        if( this.btn_three['get_scaleVal']() !== 1 ){
            this.btn_three['init_scale']( 1 )
            window['store']['curr_btn_coin'] = window['store']['curr_btn_arr'][2]
        }
         this.musicgold.play(0,1);
    }
   
}