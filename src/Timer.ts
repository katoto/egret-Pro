class Timer extends egret.DisplayObjectContainer{
    // 倒计时
    public constructor(Width,Height,anWidth,anHeight){
        super();
        this.drawTimer(Width,Height,anWidth,anHeight);
    }
    private time:egret.Timer;
    private drawTimer(Width,Height,anWidth,anHeight){
        //倒计时
        //倒计时-舞台
        let wrapTimer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        this.addChild(wrapTimer);
        //倒计时-背景
        let bgTimer:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-time_png'));
        wrapTimer.addChild(bgTimer);
        //倒计时-文字
        let textTimer:egret.TextField = new egret.TextField();
        textTimer.text = '倒计时';
        textTimer.textColor = 0x94d7bd;
        textTimer.size = 22;
        textTimer.x = 36;
        textTimer.y = 17;
        wrapTimer.addChild(textTimer);
         //倒计时-动态文字
        let textSS:egret.TextField = new egret.TextField();
        textSS.text = '21″';
        textSS.textColor = 0xffffff; 
        textSS.size = 30;
        textSS.x = 114;
        textSS.y = 12;
        wrapTimer.addChild(textSS);
        //计时器
        this.time = new egret.Timer(3000,5);
        this.time.addEventListener(egret.TimerEvent.TIMER,()=>{
           textSS.text = "开始了";
        },this);
        this.time.addEventListener(egret.TimerEvent.TIMER_COMPLETE,()=>{
              console.log(2)
        },this);
        this.time.start();
    }
}