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
        // 背景 桌子
        var bgCourt = new egret.Bitmap(RES.getRes('bg-court_png'));
        bgCourt.anchorOffsetX = bgCourt.width / 2;
        bgCourt.anchorOffsetY = bgCourt.height / 2;
        bgCourt.x = anWidth;
        bgCourt.y = anHeight;
        // bgCourt.y = 100;
        wrap.addChild(bgCourt);
        //倒计时
        //倒计时-舞台
        var wrapTimer = new egret.DisplayObjectContainer();
        wrapTimer.width = 199;
        wrapTimer.height = 50;
        wrapTimer.anchorOffsetX = wrapTimer.width / 2;
        wrapTimer.anchorOffsetY = wrapTimer.height / 2;
        wrapTimer.x = anWidth;
        wrapTimer.y = anHeight - 486;
        wrap.addChild(wrapTimer);
        //倒计时-背景
        var bgTimer = new egret.Bitmap(RES.getRes('bg-time_png'));
        wrapTimer.addChild(bgTimer);
        // //倒计时-文字
        // let textTimer:egret.TextField = new egret.TextField();
        // textTimer.text = '倒计时';
        // textTimer.textColor = 0x94d7bd;
        // textTimer.size = 22;
        // textTimer.x = 36;
        // textTimer.y = 17;
        // wrapTimer.addChild(textTimer);
        //  //倒计时-动态文字
        // let textSS:egret.TextField = new egret.TextField();
        // textSS.text = '21″';
        // textSS.textColor = 0xffffff; 
        // textSS.size = 30;
        // textSS.x = 114;
        // textSS.y = 12;
        // wrapTimer.addChild(textSS);
        // this.timer = new egret.Timer(3000,5);
        // this.timer.addEventListener(egret.TimerEvent.TIMER,()=>{
        //    textSS.text = "开始了";
        // },this);
        // this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,()=>{
        //       console.log(2)
        // },this);
        // this.timer.start();
    };
    return Cnt;
}(egret.DisplayObjectContainer));
__reflect(Cnt.prototype, "Cnt");
//# sourceMappingURL=Cnt.js.map