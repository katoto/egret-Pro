
class LoadingUI extends egret.Sprite {

    public constructor(width,height) {
        super();
        this.createView(width,height);
    }

    private textField:egret.TextField;
    private pro:number;
    private img_football:egret.Bitmap;

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


    }

    public setProgress(current:number, total:number):void {
        // this.textField.text = `Loading...${current}/${total}`;
        this.pro = Math.ceil((current/total)*100); //加载进度百分比

        
    }
}
