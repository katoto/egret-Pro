class ScrollerDemo extends eui.Group {
    constructor() {
        super();
    }
    protected createChildren() {
        super.createChildren();
        //创建一个容器，里面包含一张图片
        var group = new eui.Group();
        var img = new eui.Image("resource/bg.jpg");
        group.addChild(img);
        //创建一个Scroller
        var myScroller = new eui.Scroller();
        //注意位置和尺寸的设置是在Scroller上面，而不是容器上面
        myScroller.width = 200;
        myScroller.height = 200;
        //设置viewport
        myScroller.viewport = group;
        this.addChild(myScroller);
    }
}