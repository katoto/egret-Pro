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
var Top = (function (_super) {
    __extends(Top, _super);
    // 头部
    function Top(Width) {
        var _this = _super.call(this) || this;
        _this.drawTop(Width);
        return _this;
    }
    Top.prototype.drawTop = function (Width) {
        //    左上角标题
        var textTitle = '欧洲杯1/4决赛';
        var title = new egret.TextField();
        title.text = textTitle;
        title.textColor = 0xffffff;
        title.size = 30;
        title.x = 20;
        title.y = 14;
        this.addChild(title);
        var textDate = '当日第55期';
        var date = new egret.TextField();
        date.text = textDate;
        date.textColor = 0xffffff;
        date.size = 18;
        date.x = 20;
        date.y = 54;
        this.addChild(date);
        // 右上角充值与往期
        var btnPast = new egret.Bitmap(RES.getRes('btn-past_png'));
        btnPast.x = Width - 163;
        btnPast.y = 21;
        this.addChild(btnPast);
        btnPast.touchEnabled = true;
        btnPast.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('往期弹窗');
        }, this);
        var btnRecharge = new egret.Bitmap(RES.getRes('btn-recharge_png'));
        btnRecharge.x = Width - 76;
        btnRecharge.y = 23;
        this.addChild(btnRecharge);
        btnRecharge.touchEnabled = true;
        btnRecharge.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('充值弹窗');
        }, this);
    };
    return Top;
}(egret.DisplayObjectContainer));
__reflect(Top.prototype, "Top");
