class FootBtn extends egret.DisplayObjectContainer{
    public constructor(n){
        super();
        this.drawBtn(n);
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height/2;
        this.scaleX = 0.9;
        this.scaleY = 0.9;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnDown,this)
    }
    private drawBtn(n){
        let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap.width = 157;
        wrap.height = 70; 
        wrap.x = 0;
        wrap.y = 0;
        this.addChild(wrap);
        let btn:egret.Bitmap = new egret.Bitmap(RES.getRes('btn_png'));
        wrap.addChild(btn);
        // 投注金额
        let betMoney:egret.TextField = new egret.TextField();
        betMoney.text = n;
        betMoney.stroke = 3;
        betMoney.strokeColor = 0xb47300;
        betMoney.width = 157;
        betMoney.height = 70;
        betMoney.textColor = 0xffffff;
        betMoney.size = 36;
        betMoney.textAlign = egret.HorizontalAlign.CENTER;
        betMoney.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap.addChild(betMoney);
    }
    private btnDown(){
        this.scaleX = 1;
        this.scaleY = 1;
        this.drawBtn.
    }
}