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

        let text01 = this.drawTitie("期号",210,0);
        let text02 = this.drawTitie("赛事",260,210);
        let text03 = this.drawTitie("冠军",210,470);
        tWrap.addChild(text01);
        tWrap.addChild(text02);
        tWrap.addChild(text03);

        
        
        //获胜队伍大容器
        let teamBigWrap:eui.Group = new eui.Group();

        //  n个小容器
        let n =  Math.ceil(window['store']['recording'].length/5);
        for(let i=0;i<n;i++){
            //获胜队伍小容器，每五支队伍为一个小容器
            // let name = 'teamWrap'+i;
            let name = new eui.Group();
            name.width = 680;
            name.height = 530;

             //小容器背景色
            let textWrapBg:egret.Shape = new egret.Shape();
            textWrapBg.graphics.beginFill(0x30313b);
            textWrapBg.graphics.drawRect(0,0,680,530);
            textWrapBg.graphics.endFill();
            name.addChild(textWrapBg);

            //详细数据
            for(let i=0;i<5;i++){
                let chamTeam01 = this.chamTeam("121501","世界杯","https://imgsa.baidu.com/news/pic/item/0df431adcbef7609ece86edb25dda3cc7dd99e97.jpg");
                chamTeam01.y = i*100+28;
                name.addChild(chamTeam01);
            }

            teamBigWrap.addChild(name);
        }
       

        
   
        
        
       



        var group = new eui.Group();
        group.addChild(teamBigWrap);
        var myScroller = new eui.Scroller();
        myScroller.y = 50;
        myScroller.width = 680;
        myScroller.height = 800;
        myScroller.viewport = group;
        this.addChild(myScroller);

    //    window['store']['recording']
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
    private chamTeam(a,b,c){ /*期号,赛事,冠军队伍url*/
        let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap.width = 680;
        wrap.height = 100;

        // 期号
        let text01 = new egret.TextField();
        text01.textColor = 0x6f799a;
        text01.text = a;
        text01.size = 24;
        text01.width = 210;
        text01.height = 100;
        text01.verticalAlign = egret.VerticalAlign.MIDDLE;
        text01.textAlign = egret.HorizontalAlign.CENTER;
        wrap.addChild(text01);

        // 赛事
        let text02 = new egret.TextField();
        text02.textColor = 0xd9ddff;
        text02.text = b;
        text02.size = 30;
        text02.x = 210;
        text02.width = 260;
        text02.height = 100;
        text02.verticalAlign = egret.VerticalAlign.MIDDLE;
        text02.textAlign = egret.HorizontalAlign.CENTER;
        wrap.addChild(text02);

        // 冠军队伍icon
        // 头像容器
        let UserBox:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        UserBox.width = 68;
        UserBox.height = 68;
        UserBox.x = 540;
        UserBox.y = 16;
        this.addChild(UserBox); 

        // 插入边框
        let bgBorder:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        UserBox.addChild(bgBorder);
        // 插入遮罩层
        let bgMask:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-user_png'));
        bgMask.x = 3;
        bgMask.y = 3;
        UserBox.addChild(bgMask);
        //队伍icon
        let teamIcon:eui.Image = new eui.Image();
        teamIcon.source = c;
        teamIcon.width = 62;
        teamIcon.height = 62;
        teamIcon.x = 3;
        teamIcon.y = 3;
        UserBox.addChild(teamIcon);
        teamIcon.mask = bgMask;
        wrap.addChild(UserBox);
        return wrap;
    }
    
}