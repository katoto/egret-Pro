// 球场
class Court extends eui.UILayer {
    public constructor(){
        super();
        this.drawCourt();
    }
    private bgHeight      //赛场的高度
    private bgAnHeight;  //赛场的高度中心,重要。
    private drawCourt(){
        //背景
       let bg:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-court4_png'));
       this.addChild(bg);
       this.bgHeight = bg.height;
       this.bgAnHeight = bg.height/2;

       //左边
       //logo
       let leftIcon = this.teamIcon('http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1579.png');
       leftIcon.anchorOffsetY = 34;
       leftIcon.y = this.bgAnHeight;  
       leftIcon.x = 22;
       this.addChild(leftIcon);

       //队名
       let leftName = this.teamName('测试名字');
       leftName.anchorOffsetY = 22;
       leftName.y = this.bgAnHeight - 6;
       leftName.x = 102;
       this.addChild(leftName);

       //赔率
       let leftOdd = this.teamOdd('3.78');
       leftOdd.x = 102;
       leftOdd.y = this.bgAnHeight + 6;
       this.addChild(leftOdd);

       //本人投注
       let leftmyPut = this.myPut('10万');
       leftmyPut.anchorOffsetY = 27;
       leftmyPut.y = this.bgHeight - 5;
       leftmyPut.x = 0;
       this.addChild(leftmyPut);

       //全部投注
       let leftAllPut = this.allPut('10万');
       leftAllPut.y = -6;
       leftAllPut.x = 0;
       this.addChild(leftAllPut);



      





       //右边

       //logo
       let rightIcon = this.teamIcon('http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1579.png');
       rightIcon.anchorOffsetY = 34;
       rightIcon.y = this.bgAnHeight;     
       rightIcon.x = 395;  //485-22-68
       this.addChild(rightIcon);

       //队名
       let rightName = this.teamName('测试名字');
       rightName.anchorOffsetY = 22;
       rightName.y = this.bgAnHeight - 6;
       rightName.textAlign = egret.HorizontalAlign.RIGHT;
       rightName.x = 244;    
       this.addChild(rightName);

       //赔率
       let rightOdd = this.teamOdd('3.78');
       rightOdd.x = 244;
       rightOdd.y = this.bgAnHeight + 6;
       rightOdd.textAlign = egret.HorizontalAlign.RIGHT;
       this.addChild(rightOdd);

       //本人投注
       let rightMyPut = this.myPut('10万');
       rightMyPut.anchorOffsetY = 27;
       rightMyPut.y = this.bgHeight - 5;
       rightMyPut.x = 242.5;
       this.addChild(rightMyPut);

        //全部投注
       let rightAllPut = this.allPut('10万');
       rightAllPut.y = -6;
       rightAllPut.x = 242.5;
       this.addChild(rightAllPut);









       //二选一
       //win 203*202
       let win = this.tramWin();
       win.anchorOffsetY = 101;
       win.y = this.bgAnHeight;
       win.x = 350;
    //    if(左边胜利){
    //        win.x = -80;
    //    }else{
    //        win.x = 350;
    //    }
       this.addChild(win)



    }

    // 队伍logo
    private teamIcon(url){
        //容器
        let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap.width = 68;
        wrap.height = 68;
         // 边框
        let bgBorder:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        wrap.addChild(bgBorder);
         // 遮罩层
        let bgMask:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-user_png'));
        bgMask.x = 3;
        bgMask.y = 3;
         //队伍icon
        let icon:eui.Image = new eui.Image();
        icon.source = url;
        icon.width = 62;
        icon.height = 62;
        icon.x = 3;
        icon.y = 3;
        wrap.addChild(icon);
        icon.mask = bgMask;
        return wrap;
    }
    //队伍队名
    private teamName(t){
        let name:egret.TextField = new egret.TextField();
        name.width = 140;
        name.text = t;
        name.size = 22;
        name.textColor = 0xc5dfd4;
        return name;     
    }
    //队伍赔率
    private teamOdd(o){
        let odd:egret.TextField = new egret.TextField();
        odd.width = 140;
        odd.text = o;
        odd.size = 28;
        odd.textColor = 0xc5dfd4;
        odd.bold = true;
        return odd;     
    }
    //胜利
    private tramWin(){
        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('win_png'));
        this.addChild(img);
        return img;
    }
    //本人下注
    private myPut(m){
        //容器
        let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap.width = 242.5;
        wrap.height = 27;

        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-betting_png'));
        img.x = 23;  //(242.5-196)/2
        wrap.addChild(img);

        let put:egret.TextField = new egret.TextField();
        put.width = 242.5;
        put.height = 27;
        put.text = m;
        put.size = 22;
        put.textColor = 0xffd146;
        put.textAlign = egret.HorizontalAlign.CENTER;
        put.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap.addChild(put);
    
        return wrap;
    }
    //全部投注
    private allPut(a){
        //容器
        let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap.width = 242.5;
        wrap.height = 28;

        let img:egret.Bitmap = new egret.Bitmap(RES.getRes('gold-items02_png'));
        img.x = 65;  //(242.5-113)/2
        wrap.addChild(img);

        let put:egret.TextField = new egret.TextField();
        put.width = 242.5;
        put.height = 28;
        put.text = a;
        put.size = 20;
        put.textColor = 0xbbcfc6;
        put.bold = true;
        put.textAlign = egret.HorizontalAlign.CENTER;
        put.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap.addChild(put);
    
        return wrap;
    }
}