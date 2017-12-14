// class Header extends egret.DisplayObjectContainer{
//     // 头部
//     public constructor(Width){
//         super();
//         this.drawHeader(Width);
//     }
//     private drawHeader(Width){
//         let top:egret.Sprite = new egret.Sprite();
//         top.graphics.beginFill(0x1f2025);
//         top.graphics.drawRect(0,0,Width,80);
//         top.graphics.endFill();
//         this.addChild(top);

//         let h1:egret.TextField = new egret.TextField();
//         h1.text = '疯狂猜球';
//         h1.width = Width;
//         h1.height = 80;
//         h1.size = 36;
//         h1.x=0;
//         h1.y=0;
//         h1.textAlign = egret.HorizontalAlign.CENTER;
//         h1.verticalAlign = egret.VerticalAlign.MIDDLE;
//         top.addChild(h1);

//         //返回  返回事件在back上添加
//         let back:egret.Sprite = new egret.Sprite();  
//         back.graphics.drawRect(0,0,80,80);
//         back.graphics.endFill();
//         top.addChild(back);
//         let backImg:egret.Bitmap = new egret.Bitmap(RES.getRes('back_png'));
//         backImg.x = 27;
//         backImg.y = 22;
//         back.addChild(backImg);
//     }
// }