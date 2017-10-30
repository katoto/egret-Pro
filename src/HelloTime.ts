class HelloTime extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this)
    }

    private spr:egret.Sprite;
    private num:egret.TextField;
    private con:egret.TextField;
    private n:number = 6;
    private StartTime:number;
    private StopTime:number;
    private finalTime:number;
    private img:egret.Bitmap;
    private timer:egret.Timer;
    private date:Date;

    private onAddToStage(Event:egret.Event){
        this.spr = new egret.Sprite();
        this.addChild(this.spr);
        this.spr.width = 480;
        this.spr.height = 800;
        this.drawTxt();
        this.drawContent();

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onButtonComp, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadGroup("test");

        this.timer = new egret.Timer(1000,8);
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);

    }
    private drawTxt(){
        this.num = new egret.TextField();
        this.num.text = this.n.toString();
        this.num.width = 480;
        this.num.size = 100;
        this.num.textAlign = egret.HorizontalAlign.CENTER;
        this.spr.addChild(this.num);
    }

    private drawContent():void{
        this.con = new egret.TextField();
        this.con.text = "测试文字";
        this.con.width = 480;
        this.con.textAlign = egret.HorizontalAlign.CENTER;
        this.con.y = 120;
        this.spr.addChild(this.con);
    }

    private onButtonComp():void{
        this.img = new egret.Bitmap();
        this.img.texture = RES.getRes('btn_jpg');
        var rect:egret.Rectangle = new egret.Rectangle(20,20,15,15);
        this.img.scale9Grid = rect;
        this.img.x = 50;
        this.img.y = 200;
        this.img.width *= 5;
        this.img.height = 70;
        this.spr.addChild(this.img);

        this.img.touchEnabled = true;
        this.img.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this,true)
    }
    private onTouch(evt:egret.TouchEvent){
        this.date = new Date();
        this.StartTime =this.date.getTime();
        this.img.alpha = 0;
        this.timer.start();
        this.drawTxt();
        this.spr.touchEnabled =true;
        this.spr.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchSrp,this,true);

    }

    private timerFunc(){
       if(this.n<=3){
           this.num.text = "?";
       }else{
           this.spr.removeChildren();
           this.drawTxt(); 
       }
       this.n--;
    }
    private timerComFunc(){
        if(this.n<=-2){
            this.drawContent();
            this.con.text= '别迷糊了醒醒';
            this.spr.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchSrp,this,true);
        }

    }

    private onTouchSrp(evt:egret.TouchEvent){
        this.date = new Date();
        this.StopTime = this.date.getTime();
        this.finalTime = this.StopTime-this.StartTime;
        this.num.text = (this.finalTime/1000).toFixed(3);
        this.timer.stop();
        this.drawContent();
        this.spr.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchSrp,this,true);
        switch(Math.floor(this.finalTime/1000)){
            case 0: 
                this.con.text = '很专注';
                break;
            case 1:
                this.con.text = '还行';
                break;
            case 2:
                this.con.text = '不专注';
                break;
            default:
                this.con.text = (this.finalTime).toString();

        }
    }
}