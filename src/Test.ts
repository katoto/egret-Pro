// 
class Test extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.drawxx();
    }
    private drawxx(){
        var txInput:egret.TextField = new egret.TextField;
        txInput.text = '222';
        txInput.width = 282;
        txInput.height = 43;
        txInput.x = 134;
        txInput.y = 592;
        txInput.textColor = 0x000000;
        /// 注意_container是事先建立好的一个显示容器，即 egret.Sprite，并且已经添加到显示列表中
        this.addChild(txInput);
    }
}