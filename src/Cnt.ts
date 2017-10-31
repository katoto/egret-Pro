class Cnt extends egret.DisplayObjectContainer{
    public constructor(Width,Height,anWidth,anHeight){
        super();
        this.drawCnt(Width,Height,anWidth,anHeight);
    }
    private timer:egret.Timer;
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
         // 背景 桌子
        let bgCourt:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-court_png'));
        bgCourt.anchorOffsetX = bgCourt.width/2;
        bgCourt.anchorOffsetY = bgCourt.height/2;
        bgCourt.x = anWidth;
        bgCourt.y = anHeight;
        // bgCourt.y = 100;
        wrap.addChild(bgCourt);

          //倒计时
        //倒计时-舞台
        let wrapTimer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrapTimer.width = 199;
        wrapTimer.height = 50;
        wrapTimer.anchorOffsetX = wrapTimer.width/2;
        wrapTimer.anchorOffsetY = wrapTimer.height/2;
        wrapTimer.x = anWidth;
        wrapTimer.y = anHeight-486;
        wrap.addChild(wrapTimer);
        //倒计时-背景
        let bgTimer:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-time_png'));
        wrapTimer.addChild(bgTimer);
        // //倒计时-文字
        // let textTimer:egret.TextField = new egret.TextField();
        // textTimer.text = '倒计时';
        // textTimer.textColor = 0x94d7bd;
        // textTimer.size = 22;
        // textTimer.x = 36;
        // textTimer.y = 17;
        // wrapTimer.addChild(textTimer);

        //  //倒计时-动态文字
        // let textSS:egret.TextField = new egret.TextField();
        // textSS.text = '21″';
        // textSS.textColor = 0xffffff; 
        // textSS.size = 30;
        // textSS.x = 114;
        // textSS.y = 12;
        // wrapTimer.addChild(textSS);

       
        // this.timer = new egret.Timer(3000,5);
        // this.timer.addEventListener(egret.TimerEvent.TIMER,()=>{
        //    textSS.text = "开始了";
        // },this);
        // this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,()=>{
        //       console.log(2)
        // },this);
        // this.timer.start();
    }
}