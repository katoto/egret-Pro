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
var Field4 = (function (_super) {
    __extends(Field4, _super);
    // 设置锚点和x值
    function Field4(width, x, leftImg, leftT, leftO, rightImg, rightT, rightO) {
        var _this = _super.call(this) || this;
        _this.anchorOffsetX = width / 2;
        _this.x = x;
        _this.drawField(leftImg, leftT, leftO, rightImg, rightT, rightO);
        return _this;
    }
    Field4.prototype.drawField = function (leftImg, leftT, leftO, rightImg, rightT, rightO) {
        var court4 = new egret.Bitmap(RES.getRes('bg-court4_png'));
        this.addChild(court4);
        var leftTeam = new egret.Bitmap(RES.getRes(leftImg));
        leftTeam.x = 25;
        leftTeam.y = 54;
        this.addChild(leftTeam);
        var leftTitle = new egret.TextField();
        leftTitle.text = leftT;
        leftTitle.size = 22;
        leftTitle.x = 102;
        leftTitle.y = 60;
        this.addChild(leftTitle);
        var leftOdds = new egret.TextField();
        leftOdds.text = leftO;
        leftOdds.size = 28;
        leftOdds.x = 102;
        leftOdds.y = 94;
        this.addChild(leftOdds);
        // 右边位置有误
        var rightTeam = new egret.Bitmap(RES.getRes(rightImg));
        rightTeam.x = 400;
        rightTeam.y = 54;
        this.addChild(rightTeam);
        var rightTitle = new egret.TextField();
        rightTitle.text = rightT;
        rightTitle.width = 140;
        rightTitle.textAlign = egret.HorizontalAlign.RIGHT;
        rightTitle.size = 22;
        rightTitle.x = 250;
        rightTitle.y = 60;
        this.addChild(rightTitle);
        var rightOdds = new egret.TextField();
        rightOdds.text = rightO;
        rightOdds.width = 140;
        rightOdds.textAlign = egret.HorizontalAlign.RIGHT;
        rightOdds.size = 28;
        rightOdds.x = 250;
        rightOdds.y = 94;
        this.addChild(rightOdds);
    };
    return Field4;
}(egret.DisplayObjectContainer));
__reflect(Field4.prototype, "Field4");
//# sourceMappingURL=footballField.js.map