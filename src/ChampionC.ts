// 冠军记录内容
class ChampionC extends eui.Group{
    public constructor(){
        super();
        this.drawChampionC();
    }
    private  text:egret.TextField;
    private drawChampionC(){
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

        let wrap01:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap01.width = 680;
        wrap01.height = 100;

        // 期号
        let a = new egret.TextField();
        a.textColor = 0x6f799a;
        a.text = '121501';
        a.size = 24;
        a.width = 170;
        a.height = 100;
        a.verticalAlign = egret.VerticalAlign.MIDDLE;
        a.textAlign = egret.HorizontalAlign.CENTER;
        wrap01.addChild(a);

        // 赛事
        let b = new egret.TextField();
        b.textColor = 0xd9ddff;
        b.text = '世界杯';
        b.size = 30;
        b.x = 170;
        b.width = 170;
        b.height = 100;
        b.verticalAlign = egret.VerticalAlign.MIDDLE;
        b.textAlign = egret.HorizontalAlign.CENTER;
        wrap01.addChild(b);

        // 队名
        let c = new egret.TextField();
        c.x = 340;
        c.textColor = 0xd9ddff;
        c.text = '中国';
        c.size = 30;
        c.width = 170;
        c.height = 100;
        c.verticalAlign = egret.VerticalAlign.MIDDLE;
        c.textAlign = egret.HorizontalAlign.CENTER;
        wrap01.addChild(c);

        // 冠军队伍icon
        // 头像容器
        let UserBox:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        UserBox.width = 68;
        UserBox.height = 68;
        UserBox.x = 561;
        UserBox.y = 16;
        wrap01.addChild(UserBox); 

        // 插入边框
        let bgBorder:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        UserBox.addChild(bgBorder);
        //队伍icon
        let teamIcon:eui.Image = new eui.Image();
        teamIcon.source = "https://imgsa.baidu.com/news/pic/item/0df431adcbef7609ece86edb25dda3cc7dd99e97.jpg";
        teamIcon.width = 68;
        teamIcon.height = 68;
        UserBox.addChild(teamIcon);
        
        wrap01.y = 42;
        // y值  100*i+42
        this.addChild(wrap01)
        

        // var teamWrap:eui.Group = new eui.Group();
        // teamWrap.width = 680;
        // teamWrap.height = 800;
        //详细数据
        // for(let i=0;i<10;i++){
        //     let chamTeam01 = this.chamTeam("121501","世界杯","https://imgsa.baidu.com/news/pic/item/0df431adcbef7609ece86edb25dda3cc7dd99e97.jpg");
        //     chamTeam01.y = i*100+28;
        //     teamWrap.addChild(chamTeam01);
        // }
        // var group = new eui.Group();
        // group.addChild(teamWrap);
        // var myScroller = new eui.Scroller();
        // myScroller.y = 50;
        // myScroller.width = 680;
        // myScroller.height = 800;
        // myScroller.viewport = group;
        // this.addChild(myScroller);
        
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
    
}