// 
// class Test extends egret.DisplayObjectContainer{
//     public constructor(){
//         super();
//         this.drawxx();
//     }
//     private drawxx(){
       
//     }
// }



/*点击列表 适合聊天  */
class DataGroupDemo extends eui.Group {
    constructor() {
        super();
    }
    private list;
    protected createChildren() {
        super.createChildren();
        //标题容器
        let tWrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        tWrap.width = 680;
        tWrap.height = 50;
        this.addChild(tWrap);
        let text01 = this.drawTitie("期号",170,0);
        let text02 = this.drawTitie("赛事",170,170);
        let text03 = this.drawTitie("冠军",170,510);
        let text04 = this.drawTitie("冠军球队",170,340);
        tWrap.addChild(text01);
        tWrap.addChild(text02);
        tWrap.addChild(text03);
        tWrap.addChild(text04);

        var exml = `
        <e:Skin xmlns:e="http://ns.egret.com/eui" states="up,down" height="100"> 
            <e:Label text="{data.expect}" textColor.down="0x6f799a" textColor.up="0x6f799a" size="24" verticalAlign="middle" textAlign="center" left="0" width="170" height="100"/> 
            <e:Label text="{data.leaguename}" textColor.down="0x6f799a" textColor.up="0x6f799a" size="24" verticalAlign="middle" textAlign="center" left="170" width="170" height="100"/> 
            <e:Label text="{data.champion}" textColor.down="0xd9ddff" textColor.up="0xd9ddff" size="30" verticalAlign="middle" textAlign="center" left="340" width="170" height="100"/> 
            <e:Image source="{data.homename}" width="68" height="68" top="16" left="561"/>
        </e:Skin>`;
        this.list = new eui.List();
        this.list.dataProvider = new eui.ArrayCollection([{expect:"one",leaguename:1,champion:'asd',homename:'http://img.choopaoo.com/esun/proj/53/66/5366ac18da5411e7a91f.png'}]);
        this.list.itemRendererSkinName = exml;
        this.addChild(this.list);
        this.list.selectedIndex = 1;//设置默认选中项
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onChange,this);
        //创建一个Scroller
        var myScroller = new eui.Scroller();
        //注意位置和尺寸的设置是在Scroller上面，而不是容器上面
        myScroller.width = 680;
        myScroller.height = 805;
        //设置viewport
        myScroller.viewport = this.list;
        this.addChild(myScroller);
    }
    private onChange(e:eui.PropertyEvent):void{
        //获取点击消息
        console.log(this.list.selectedItem,this.list.selectedIndex);
        this.upPopWrapMsg();
    }

    async upPopWrapMsg(){
        let $store = window['store'] ;
        //  请求 更新数据
        await window['getJson']( { type:'get' ,url : $store['orderDomain']+'/vguess/matches/result/list' ,dataType:'json'} ).then(( res )=>{
            if( res && res.status === '100' ){
                this.upPopWrapCMsg(  res.data ) ;
            }
        })
    }
    private drawTitie(t,w,x){ /*标题，宽度，x位置*/
        let text = new egret.TextField();
        text.textColor = 0x6f799a;
        text.size = 28;
        text.text = t;
        text.width = w;
        text.height = 50;
        text.x = x;
        text.verticalAlign = egret.VerticalAlign.MIDDLE;
        text.textAlign = egret.HorizontalAlign.CENTER;
        return text;
    }
    /**
     *  更新 列表数据 
     */
    private upPopWrapCMsg( arr ){
        for( let i=0,len = arr.length;i<len;i++ ){
         //    let wrap01 =  this.AllWrapMsg( arr[i] , i ) ;
         //    this.list.dataProvider.addItem(arr[i].champion)
            this.list.dataProvider.addItem(arr[i])
        }
        console.log(arr)
    }
}