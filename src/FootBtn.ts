class FootBtn extends egret.DisplayObjectContainer {
    private _this;
    private btn:egret.Bitmap;
    
    public constructor(n){
        super();
        this.drawBtn(n);
        this.anchorOffsetX = this.width/2;
        this.anchorOffsetY = this.height/2;
        this.scaleX = 0.9;
        this.scaleY = 0.9;
        this.y= 45;
        this.touchEnabled = true;
        this._this = this;
    }
    private drawBtn(n){
        let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap.width = 157;
        wrap.height = 70; 
        wrap.x = 0;
        wrap.y = 0;
        this.addChild(wrap);
        this.btn = new egret.Bitmap(RES.getRes('btn_png'));
        wrap.addChild(this.btn);
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
    private init_scale( num:Number ){
        this._this.scaleX = num;
        this._this.scaleY = num;
        if(num === 1 ){
           this.btn.texture = RES.getRes('btn_png');
        }else{
            this.btn.texture = RES.getRes('btnOn_png');
        }
    }
    private get_scaleVal(){
        return this._this.scaleX
    }
}