class TextTips extends egret.DisplayObjectContainer{
    // 文字提示区域
    public constructor(){
        super();
        this.drawText();
    }
    private textTips:string = '请选择球队下注...';
    private drawText(){
        // 内容区
        let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap.width = 231;
        wrap.height = 36; 
        wrap.x = 0;
        wrap.y = 0;
        this.addChild(wrap);
        // 背景 
        let bg:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-textTips_png'));
        bg.x = 0;
        bg.y = 0;
        wrap.addChild(bg);
        //文字
        let text:egret.TextField = new egret.TextField();
        text.text = this.textTips;
        text.textColor = 0x94d7bd;
        text.size = 24;
        text.width = 231;
        text.height = 36; 
        // text.textAlign = hAlign;
        // text.verticalAlign = vAlign;
        text.textAlign = egret.HorizontalAlign.CENTER;
        text.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap.addChild(text);
    }
}