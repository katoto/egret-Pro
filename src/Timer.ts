class Timer extends egret.DisplayObjectContainer{
    // 倒计时
    public constructor(){
        super();
        this.drawTimer();
    }
    private wrapTimer:egret.DisplayObjectContainer;
    private textSS:egret.TextField;

    private timer:egret.Timer ;

    // 核心 this.timerNum
    private timerNum:number = null;
    private drawTimer(){
        //倒计时
        //倒计时-舞台
        this.wrapTimer = new egret.DisplayObjectContainer();
        
        //倒计时-背景
        let bgTimer:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-time_png'));
        this.wrapTimer.addChild(bgTimer);
        //倒计时-文字
        let textTimer:egret.TextField = new egret.TextField();
        textTimer.text = '倒计时';
        textTimer.textColor = 0x94d7bd;
        textTimer.size = 22;
        textTimer.x = 36;
        textTimer.y = 17;
        this.wrapTimer.addChild(textTimer);
         //倒计时-动态文字
        this.textSS = new egret.TextField();
        this.textSS.textColor = 0xffffff; 
        this.textSS.size = 30;
        this.textSS.x = 114;
        this.textSS.y = 12;
        this.textSS.bold = true;
        this.wrapTimer.addChild(this.textSS);
        //计时器
        // var timer: egret.Timer = new egret.Timer(1000, this.timerNum);
        // timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        // timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);

        // //竞猜开始提示弹窗弹出，然后开始执行倒计时
        // timer.start();
    }

    async createTimer( setTime:string ){

        //  ?
        // this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        // this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        this.timer = null;

        this.timerNum = parseInt( setTime ) ;
        this.timer = new egret.Timer( 1000, parseInt( setTime ) );
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerRemove, this);
        //竞猜开始提示弹窗弹出，然后开始执行倒计时
        // await this.setStartPop() ;

        this.timer.start();
        this.addChild(this.wrapTimer);
    }

    // 等待竞猜开始
    private setStartPop (){
        // this.timer.start();
        // this.addChild(this.wrapTimer);

        // return new Promise( function( resolve ,reject ){
        //     let start_pop = new Pop( window['store']['stage_Width'] , window['store']['stage_Height'] ,'text-begin_png');
        //     window['store']['this_main'].addChild( start_pop )
        //     setTimeout(()=>{
        //         resolve( 1 )
        //         if( start_pop.parent ){
        //             window['store']['this_main'].removeChild( start_pop )  
        //         }
        //     },3000)
        // })

    }
    //  竞猜开始


     private timerFunc(event:egret.TimerEvent) {
        // egret.log("timerFunc count" + (<egret.Timer>event.target).currentCount);
        this.timerNum--;
        this.textSS.text = (this.timerNum).toString()+ '"';
    }

    private timerRemove( ) {
        egret.log('倒计时结束');

        if( this.wrapTimer.parent ){
            this.removeChild(this.wrapTimer);
        }

        // 出现竞猜 结束  竞猜开始

        // let end_pop = new Pop( window['store']['stage_Width'] , window['store']['stage_Height'] ,'text-over_png');
        // window['store']['this_main'].addChild( end_pop )



        // cnt.textT.textTips.text = '正在开奖'
        ////timerFunc count5
    }
}