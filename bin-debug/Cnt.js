var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cnt = (function (_super) {
    __extends(Cnt, _super);
    function Cnt(Width, Height, anWidth, anHeight) {
        var _this = _super.call(this) || this;
        _this.scale = 0.85;
        _this.drawCnt(Width, Height, anWidth, anHeight);
        return _this;
    }
    Cnt.prototype.drawCnt = function (Width, Height, anWidth, anHeight) {
        // 内容区
        var wrap = new egret.DisplayObjectContainer();
        wrap.width = Width;
        wrap.height = Height;
        wrap.x = 0;
        wrap.y = 0;
        this.addChild(wrap);
        // 背景 
        var bg = new egret.Bitmap(RES.getRes('bg_jpg'));
        bg.anchorOffsetX = anWidth;
        bg.x = anWidth;
        bg.y = 0;
        wrap.addChild(bg);
        // 背景 桌子区域，用来定位桌子计时器和里面的足球场等
        var bgCourtWrap = new egret.DisplayObjectContainer();
        bgCourtWrap.width = Width;
        bgCourtWrap.height = 1035; //963+30+42  桌子的高度加上计时器突出高度+头像突出高度
        bgCourtWrap.anchorOffsetX = bgCourtWrap.width / 2;
        bgCourtWrap.anchorOffsetY = bgCourtWrap.height / 2;
        bgCourtWrap.x = anWidth;
        bgCourtWrap.y = anHeight;
        bgCourtWrap.scaleX = this.scale;
        bgCourtWrap.scaleY = this.scale;
        wrap.addChild(bgCourtWrap);
        // 背景 桌子
        var bgCourt = new egret.Bitmap(RES.getRes('bg-court_png'));
        bgCourt.anchorOffsetX = bgCourt.width / 2;
        bgCourt.x = anWidth;
        bgCourt.y = 30;
        bgCourtWrap.addChild(bgCourt);
        //倒计时
        var timer = new Timer(Width, Height, anWidth, anHeight);
        timer.anchorOffsetX = timer.width / 2;
        timer.x = anWidth;
        timer.y = 0;
        bgCourtWrap.addChild(timer);
        //生成四个足球场，1/4比赛  485为小球场宽度，应该可以在构造函数里设置，需要优化
        for (var i = 0; i < 4; i++) {
            var _field4 = new Field4(485, anWidth, 'team-01_jpg', '克罗地亚', 3.78, 'team-02_jpg', '德国', 1.26);
            _field4.y = 120 + 202 * i;
            bgCourtWrap.addChild(_field4);
        }
        // 左边其他用户 头像实例 ,（名字，头像，金币）,位置为数组中的随机一个{x=15,y=80+220*i} 
        for (var i = 0; i < 4; i++) {
            var userImg = new userImage('飞翔小七', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4182536181,630612655&fm=173&s=EC7819C7026A2D1399FD589D0300C084&w=218&h=146&img.JPEG', '23万');
            userImg.x = 15;
            userImg.y = 80 + 220 * i;
            bgCourtWrap.addChild(userImg);
        }
        // 右边其他用户 头像实例 ,（名字，头像，金币）,位置为数组中的随机一个{x=15,y=80+220*i} 
        for (var i = 0; i < 4; i++) {
            var userImg = new userImage('飞翔小七', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4182536181,630612655&fm=173&s=EC7819C7026A2D1399FD589D0300C084&w=218&h=146&img.JPEG', '23万');
            userImg.x = Width - 104;
            userImg.y = 80 + 220 * i;
            bgCourtWrap.addChild(userImg);
        }
        // //自己的头像
        var myImg = new userImage('飞翔小七', 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4182536181,630612655&fm=173&s=EC7819C7026A2D1399FD589D0300C084&w=218&h=146&img.JPEG', '23万');
        myImg.anchorOffsetX = 44;
        myImg.anchorOffsetY = 124;
        myImg.x = anWidth;
        myImg.y = bgCourtWrap.height;
        bgCourtWrap.addChild(myImg);
    };
    return Cnt;
}(egret.DisplayObjectContainer));
__reflect(Cnt.prototype, "Cnt");
//# sourceMappingURL=Cnt.js.map