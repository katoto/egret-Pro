
/*冠军记录  */
class ChampionC extends eui.Group {
    constructor() {
        super();
    }
    private list;
    protected createChildren() {
        super.createChildren();
        var exml = `
        <e:Skin xmlns:e="http://ns.egret.com/eui" states="up,down" height="100"> 
            <e:Label text="{data.expect}" textColor.down="0x6f799a" textColor.up="0x6f799a" size="24" verticalAlign="middle" textAlign="center" left="0" width="170" height="100"/> 
            <e:Label text="{data.leaguename}" textColor.down="0x6f799a" textColor.up="0x6f799a" size="24" verticalAlign="middle" textAlign="center" left="170" width="170" height="100"/> 
            <e:Label text="{data.champion}" textColor.down="0xd9ddff" textColor.up="0xd9ddff" size="30" verticalAlign="middle" textAlign="center" left="340" width="170" height="100"/> 
            <e:Image source="resource/assets/bg-item.png" width="68" height="68" top="16" left="561"/>
            <e:Image source="{data.homelogo}" width="68" height="68" top="16" left="561"/>
        </e:Skin>`;
        this.list = new eui.List();
        this.list.dataProvider = new eui.ArrayCollection();
        this.list.itemRendererSkinName = exml;
        this.addChild(this.list);
        this.list.selectedIndex = 1;//设置默认选中项
        // this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.upPopWrapMsg,this);
        //创建一个Scroller
        var myScroller = new eui.Scroller();
        //注意位置和尺寸的设置是在Scroller上面，而不是容器上面
        myScroller.width = 680;
        myScroller.height = 805;
        //设置viewport
        myScroller.viewport = this.list;
        this.addChild(myScroller);
    }
    // private onChange(e:eui.PropertyEvent):void{
    //     //获取点击消息
    //     console.log(this.list.selectedItem,this.list.selectedIndex);
    //     this.upPopWrapMsg();
    // }
    async upPopWrapMsg(){
        let $store = window['store'] ;
        //  请求 更新数据
        await window['getJson']( { type:'get' ,url : $store['orderDomain']+'/vguess/matches/result/list' ,dataType:'json'} ).then(( res )=>{
            if( res && res.status === '100' ){
                for( let i=0,len = res.data.length;i<len;i++ ){
                    if( res.data[i].champion !== res.data[i].homename ){
                        res.data[i].homelogo = res.data[i].awaylogo ;
                    }
                    this.list.dataProvider.addItem(res.data[i])
                }   
                //  this.parent.popWrap.removeChild(this.parent.load)
            }
        })
    }
}