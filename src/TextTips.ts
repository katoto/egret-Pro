class TextTips extends egret.DisplayObjectContainer{
    // 文字提示区域
    private textField:egret.TextField ;
    private wrap:egret.DisplayObjectContainer;
    private bg:egret.Bitmap;

    public constructor(){
        super();
        this.drawText();
    }
    private drawText(){
        // 内容区
        this.wrap = new egret.DisplayObjectContainer();
        this.wrap.width = 231;
        this.wrap.height = 36; 
        this.wrap.anchorOffsetX = 115 ;
        this.wrap.x = 0;
        this.wrap.y = 0;
        //  位置有点问题
        // this.addChild(this.wrap);
        // 背景 
        this.bg = new egret.Bitmap(RES.getRes('bg-textTips_png'));
        this.bg.x = 0;
        this.bg.y = 0;
        this.wrap.addChild( this.bg );
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
        this.wrap.addChild(this.textField);

    }
    /**
     * 更新文案  包含显示和隐藏
     */
    private upTextTips( tips:string ){
        
        console.log(1234)
        console.log(tips)
        if(tips === ''){
            if( this.wrap.parent ){
                this.removeChild(this.wrap);
            }

        }else{
            this.textField.text = tips ;
            if( !this.wrap.parent ){
                this.addChild(this.wrap);
            }
        }
    }

}