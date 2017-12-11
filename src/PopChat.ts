// 聊天弹窗
class PopChat extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.drawChat();
    }
    private list;
    private chatTime ;

    private drawChat(){
       //弹窗蒙层
       let popLayer:egret.Shape = new egret.Shape();
       popLayer.graphics.beginFill(0x000000,0);
       popLayer.graphics.drawRect(0,0,window['store']['stage_Width'],window['store']['stage_Height'])
       popLayer.graphics.endFill();
       this.addChild(popLayer);

        //背景
        let popBgLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        popBgLayer.width = window['store']['stage_Width'];
        popBgLayer.height = 534;
        popBgLayer.anchorOffsetY = popBgLayer.height;
        popBgLayer.y = window['store']['stage_Height'];
        this.addChild(popBgLayer);

        let popBg:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-chat_png'));
        popBgLayer.addChild(popBg);

       //关闭按钮85*58
       let popClose:egret.Bitmap = new egret.Bitmap(RES.getRes('bgChatClose_png'));
       popClose.anchorOffsetX = 85;
       popClose.x = 750;
       popClose.y = 0;
       popBgLayer.addChild(popClose);
       popClose.touchEnabled = true;
       popClose.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            egret.Tween.get(popBgLayer).to({
                y: 1868  //534+1334
            },200)
            setTimeout(()=>{
                this.parent.removeChild(this);
            },100)
       },this)
       

       //聊天列表
       var exml = 
       `<e:Skin xmlns:e="http://ns.egret.com/eui" states="up,down" height="81" width="750"> 
            <e:Label text="{data}" textColor.down="0xffd02f" textColor.up="0xffffff" size="30" verticalAlign="middle" textAlign="left" left="65" width="750" height="80"/> 
            <e:Label left="0" width="750" height="1" background="0xffffff" top="80"/> 
        </e:Skin>`;
       this.list = new eui.List();
       this.list.dataProvider = new eui.ArrayCollection(['保佑保佑,逢买必中','小手抖一抖,房车到手~','错错错,老是我错~','测试文字','测试文字','测试文字','测试文字','测试文字','测试文字']);
       this.list.itemRendererSkinName = exml;
       this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.showMsg,this);

        // 创建一个Scroller
        let myScroller = new eui.Scroller();
        myScroller.width = 750;
        myScroller.height = 482;
        myScroller.y = 52;
        //设置viewport
        myScroller.viewport = this.list;
        popBgLayer.addChild(myScroller);

        // let group = new eui.Group();
        // for(let i=0;i<10;i++){
        //     let meg = this.message('保佑保佑,逢买必中'+i);
        //     meg.y = i*80;
        //     group.addChild(meg);
        // }
        // //创建一个Scroller
        // let myScroller = new eui.Scroller();
        // //注意位置和尺寸的设置是在Scroller上面，而不是容器上面
        // myScroller.width = 750;
        // myScroller.height = 482;
        // myScroller.y = 52;
        // //设置viewport
        // myScroller.viewport = group;
        // popBgLayer.addChild(myScroller);
        // // 因为ios 10.3.2 滚动会有bug
        // if(myScroller.viewport.scrollV==0){
        //     myScroller.addEventListener(egret.TouchEvent.TOUCH_MOVE,function(){
        //        if( myScroller.viewport.scrollV < 0){
        //            myScroller.viewport.scrollV = 0;
        //        }
        //     },this)
        // }
    }
    private showMsg(e:eui.PropertyEvent):void{
        let currDom = null;
        //获取点击消息 ,this.list.selectedIndex
        currDom = document.querySelector('.local01') ;
        currDom['style']['display'] = 'block' ;
        currDom.innerHTML = this.list.selectedItem ;
        clearTimeout( this.chatTime )
        this.chatTime = setTimeout(()=>{
            currDom['innerHTML'] = '' ;
            currDom.style.display = 'none' ;
        },1500)
        this.parent.removeChild(this);

    }
    private message(t){
        let wrap:eui.Group = new eui.Group();
        wrap.width = 750;
        wrap.height = 80;
        let text:egret.TextField = new egret.TextField();
        text.textColor = 0xffffff;
        text.size = 30;
        text.text = t;
        text.height = 78;
        text.x = 66;
        text.verticalAlign = egret.VerticalAlign.MIDDLE;
        text.textAlign = egret.HorizontalAlign.CENTER;
        wrap.addChild(text);

        let line:egret.Shape = new egret.Shape();
        line.graphics.lineStyle(2,0x8070a5);
        line.graphics.moveTo(0,80);
        line.graphics.lineTo(750,80);
        wrap.addChild(line);

        return wrap;
    }
}