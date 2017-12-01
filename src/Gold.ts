// 金币
class Gold extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.drawGold();
    }
    private drawGold(){
        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('gold_png'));
        this.addChild(img);
    }
}