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
var Header = (function (_super) {
    __extends(Header, _super);
    // 头部
    function Header(Width) {
        var _this = _super.call(this) || this;
        _this.drawHeader(Width);
        return _this;
    }
    Header.prototype.drawHeader = function (Width) {
        var top = new egret.Sprite();
        top.graphics.beginFill(0x1f2025);
        top.graphics.drawRect(0, 0, Width, 80);
        top.graphics.endFill();
        this.addChild(top);
        var h1 = new egret.TextField();
        h1.text = '疯狂猜球';
        h1.width = Width;
        h1.height = 80;
        h1.size = 36;
        h1.x = 0;
        h1.y = 0;
        h1.textAlign = egret.HorizontalAlign.CENTER;
        h1.verticalAlign = egret.VerticalAlign.MIDDLE;
        top.addChild(h1);
        //返回  返回事件在back上添加
        var back = new egret.Sprite();
        back.graphics.drawRect(0, 0, 80, 80);
        back.graphics.endFill();
        top.addChild(back);
        var backImg = new egret.Bitmap(RES.getRes('back_png'));
        backImg.x = 27;
        backImg.y = 22;
        back.addChild(backImg);
    };
    return Header;
}(egret.DisplayObjectContainer));
__reflect(Header.prototype, "Header");
//# sourceMappingURL=Header.js.map