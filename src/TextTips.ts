class TextTips extends egret.DisplayObjectContainer{
    // 文字提示区域
    private textField:egret.TextField ;
    private wrap:egret.DisplayObjectContainer;

    public constructor(){
        super();
        this.drawText();
    }
    private drawText(){
        // 内容区
        this.wrap = new egret.DisplayObjectContainer();
        this.wrap.width = 231;
        this.wrap.height = 36; 
        this.wrap.x = 0;
        this.wrap.y = 0;
        this.addChild(this.wrap);
        // 背景 
        let bg:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-textTips_png'));
        bg.x = 0;
        bg.y = 0;
        this.wrap.addChild(bg);
        //文字
        this.textField = new egret.TextField();
        this.textField.textColor = 0x94d7bd;
        this.textField.size = 24;
        this.textField.width = 231;
        this.textField.height = 36; 
        // text.textAlign = hAlign;
        // text.verticalAlign = vAlign;
        this.textField.textAlign = egret.HorizontalAlign.CENTER;
        this.textField.verticalAlign = egret.VerticalAlign.MIDDLE;
    }
    /**
     * 更新文案
     */
    private upTextTips( tips:string ){
        this.textField.text = tips ;
    }
    /**
     *   显示
     */
    private addTextTips(){
        this.wrap.addChild(this.textField);
    }
    /**
     *  隐藏
     */
    private delTextTips(){
        if( this.textField.parent ){
            this.wrap.removeChild(this.textField);
        }
    }
}