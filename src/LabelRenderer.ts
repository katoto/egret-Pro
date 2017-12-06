class LabelRenderer extends eui.ItemRenderer {
    private labelDisplay:eui.Label;
    public constructor(){
        super();
        this.touchChildren = true;
        this.labelDisplay = new eui.Label();
        this.addChild( this.labelDisplay );
    }
    protected dataChanged():void{
        //显示数据中的 label 值
        this.labelDisplay.text = this.data.label;
    }
}