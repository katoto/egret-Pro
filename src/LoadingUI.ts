
class LoadingUI extends egret.Sprite {

    public constructor(width,height) {
        super();
        this.createView(width,height);
    }

    private textField:egret.TextField;
    private pro:number;
    private img_football:egret.Bitmap;
    private bg_pro:egret.Bitmap;
    private bg_myPro:egret.Bitmap;

    private createView(width,height):void {

        let bg:egret.Shape = new egret.Shape();
        bg.graphics.beginFill(0x3d3258);
        bg.graphics.drawRect(0,0,width,height);
        this.addChild(bg);

        this.img_football = new egret.Bitmap(RES.getRes('bg-load_png'));
        this.img_football.anchorOffsetX = this.img_football.width/2;
        this.img_football.x = width/2;
        this.img_football.y = 105;
        this.addChild(this.img_football);

        this.textField = new egret.TextField();
        this.textField.y = 900;
        this.textField.width = 750;
        this.textField.size = 30;
        this.textField.textColor = 0xd8d1e8;
        this.textField.textAlign = "center";
        this.textField.text = "火速加载中.....";
        this.addChild(this.textField);

        this.bg_pro = new egret.Bitmap(RES.getRes('bg-loading_png')); 
        this.bg_pro.x = 140;
        this.bg_pro.y = 960;
        this.addChild(this.bg_pro);

        this.bg_myPro = new egret.Bitmap(RES.getRes('bg-myLoad_png'));
        this.bg_myPro.x = 140;
        this.bg_myPro.y = 960;
        this.addChild(this.bg_myPro);

    }

    public setProgress(current:number, total:number):void {
        this.pro = (Math.ceil((current/total)*100))/100; //加载进度百分比
        this.bg_myPro.width = 487*this.pro;
    }
}
