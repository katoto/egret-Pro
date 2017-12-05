// 冠军记录内容
class ChampionC extends eui.Group{
    public constructor(){
        super();
        this.drawChampionC();
    }
    private text:egret.TextField;
    private cWrap:eui.Group;
    private myScroller;

    private arrWrap01 = [] ;

    private cWrap:egret.DisplayObjectContainer ;

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

        this.cWrap = new eui.Group();
        // this.cWrap.width = 680;
        // this.cWrap.height = 700;
        // var img = new eui.Image("resource/assets/bg.jpg");
        // this.cWrap.addChild(img);
        // 详细数据
        this.myScroller = new eui.Scroller();
        this.myScroller.y = 50;
        this.myScroller.width = 680;
        this.myScroller.height = 802;
        this.myScroller.viewport = this.cWrap;
        this.addChild(this.myScroller);
    }
    /**
     *  合并一起 
     *  传入列相关的数据
     */
    private AllWrapMsg( data , top ){
        let wrap01:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap01.width = 680;
        wrap01.height = 100;
        // 期号
        let a = new egret.TextField();
        a.textColor = 0x6f799a;
        a.text = data.expect ;
        a.size = 24;
        a.width = 170;
        a.height = 100;
        a.verticalAlign = egret.VerticalAlign.MIDDLE;
        a.textAlign = egret.HorizontalAlign.CENTER;
        wrap01.addChild(a);

        // 赛事
        let b = new egret.TextField();
        b.textColor = 0xd9ddff;
        b.text = data.leaguename ;
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
        c.text = data.champion ;
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

        if( data.champion === data.awayname ){
            teamIcon.source = data.awaylogo ;
        }else if( data.champion === data.homename ){
            teamIcon.source = data.homelogo ;
        }

        teamIcon.width = 68;
        teamIcon.height = 68;
        UserBox.addChild(teamIcon);
        
        wrap01.y = 42 + parseInt( top )* 100 ;
        // y值  100*i+42
        return wrap01 ;
        // this.addChild(wrap01)
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
     *  更新 列表数据 top -==> pop2-ChampionC => chanmpionC
     */
    private upPopWrapCMsg( arr ){
        for( let i=0,len = arr.length;i<len;i++ ){
            let wrap01 =  this.AllWrapMsg( arr[i] , i ) ;
<<<<<<< HEAD
            this.arrWrap01.push( wrap01 ) 
            this.cWrap.addChild( wrap01 )
        }
        // this.addChild(this.cWrap);
        // this.myScroller.viewport = this.cWrap;
        // this.addChild(this.myScroller);
        // var img = new eui.Image("resource/assets/bg.jpg");
        // this.cWrap.addChild(wrap01);
=======
            // this.group.addChild( wrap01 );
            // this.group.addChild( wrap01 );
            this.cWrap.addChild( wrap01)
            this.arrWrap01.push( wrap01 );
        }
        this.group.addChild( this.cWrap )
>>>>>>> f04fd16a57e38b89b24ce192fdd964c93fe81509
    }

    /**
     *  remove ALl data
     */
<<<<<<< HEAD
=======
    private clearAllWrap(){
        for( let i=0,len = this.arrWrap01.length;i<len ;i++ ){
            if( this.arrWrap01[i].parent ){
                this.removeChild( this.arrWrap01[i] ) ;
            }
        }
    }
    
>>>>>>> f04fd16a57e38b89b24ce192fdd964c93fe81509
}