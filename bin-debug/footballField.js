// class Field_ball extends egret.DisplayObjectContainer{
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
var Field_ball = (function (_super) {
    __extends(Field_ball, _super);
    // 设置锚点和x值  头像 队名 赔率 （  感觉得设置成 修改类的方式  ）
    function Field_ball(leftImg, leftT, leftO, rightImg, rightT, rightO) {
        var _this = _super.call(this) || this;
        _this.anchorOffsetX = 242.5;
        _this.x = window['store']['stage_Width'] / 2;
        _this.drawField(leftImg, leftT, leftO, rightImg, rightT, rightO);
        return _this;
    }
    Field_ball.prototype.drawField = function (leftImg, leftT, leftO, rightImg, rightT, rightO) {
        var court4 = new egret.Bitmap(RES.getRes('bg-court4_png'));
        this.addChild(court4);
        //两个金币收集的背景， 这里要考虑假如没人投注的情况，是否要隐藏  62+246;
        this.goldItems_left = new egret.Bitmap(RES.getRes('gold-items_png'));
        this.goldItems_left.x = 62;
        this.goldItems_left.y = -6;
        this.goldItems_left02 = new egret.Bitmap(RES.getRes('gold-items02_png'));
        this.goldItems_left02.x = 62;
        this.goldItems_left02.y = -6;
        this.goldItems_right = new egret.Bitmap(RES.getRes('gold-items_png'));
        this.goldItems_right.x = 308;
        this.goldItems_right.y = -6;
        this.goldItems_right02 = new egret.Bitmap(RES.getRes('gold-items02_png'));
        this.goldItems_right02.x = 308;
        this.goldItems_right02.y = -6;
        // 左边队伍头像容器
        var leftUserBox = new egret.DisplayObjectContainer();
        leftUserBox.width = 68;
        leftUserBox.height = 68;
        leftUserBox.x = 25;
        leftUserBox.y = 54;
        this.addChild(leftUserBox);
        // 插入边框
        var bgBorder = new egret.Bitmap(RES.getRes('bg-item_png'));
        leftUserBox.addChild(bgBorder);
        // 插入遮罩层
        var bgMask = new egret.Bitmap(RES.getRes('bg-user_png'));
        bgMask.x = 3;
        bgMask.y = 3;
        // leftUserBox.addChild(bgMask);
        //队伍icon
        var leftTeam = new eui.Image();
        // leftTeam.source = leftImg;
        leftTeam.source = 'http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1579.png';
        leftTeam.width = 62;
        leftTeam.height = 62;
        leftTeam.x = 3;
        leftTeam.y = 3;
        leftUserBox.addChild(leftTeam);
        leftTeam.mask = bgMask;
        // this.addChild( leftTeam )
        // 左边队伍对面
        var leftTitle = new egret.TextField();
        leftTitle.text = leftT;
        leftTitle.size = 22;
        leftTitle.x = 102;
        leftTitle.y = 60;
        this.addChild(leftTitle);
        // 左边队伍赔率
        var leftOdds = new egret.TextField();
        leftOdds.text = leftO;
        leftOdds.size = 28;
        leftOdds.x = 102;
        leftOdds.y = 94;
        leftOdds.bold = true;
        this.addChild(leftOdds);
        // 右边同上
        var rightUserBox = new egret.DisplayObjectContainer();
        rightUserBox.width = 68;
        rightUserBox.height = 68;
        rightUserBox.x = 400;
        rightUserBox.y = 54;
        this.addChild(rightUserBox);
        // 插入边框
        var bgBorder02 = new egret.Bitmap(RES.getRes('bg-item_png'));
        rightUserBox.addChild(bgBorder02);
        // 插入遮罩层
        var bgMask02 = new egret.Bitmap(RES.getRes('bg-user_png'));
        bgMask02.x = 3;
        bgMask02.y = 3;
        // rightUserBox.addChild(bgMask02);
        //队伍icon
        var rightTeam = new eui.Image();
        // leftTeam.source = rightImg;
        rightTeam.source = 'http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1579.png';
        rightTeam.width = 62;
        rightTeam.height = 62;
        rightTeam.x = 3;
        rightTeam.y = 3;
        rightUserBox.addChild(rightTeam);
        rightTeam.mask = bgMask02;
        var rightTitle = new egret.TextField();
        rightTitle.text = rightT;
        rightTitle.width = 140;
        rightTitle.textAlign = egret.HorizontalAlign.RIGHT;
        rightTitle.size = 22;
        rightTitle.x = 250;
        rightTitle.y = 58;
        this.addChild(rightTitle);
        var rightOdds = new egret.TextField();
        rightOdds.text = rightO;
        rightOdds.width = 140;
        rightOdds.textAlign = egret.HorizontalAlign.RIGHT;
        rightOdds.size = 28;
        rightOdds.x = 250;
        rightOdds.y = 94;
        rightOdds.bold = true;
        this.addChild(rightOdds);
        // win、左边队伍图标和右边队伍图片会影响金币点击效果
        // 
    };
    //  left add icon win   胜利图标
    Field_ball.prototype.addwinIcon_l = function () {
        if (!!this.winIcon_l) {
            this.addChild(this.winIcon_l);
        }
        else {
            this.winIcon_l = new egret.Bitmap(RES.getRes('win2_png'));
            this.winIcon_l.anchorOffsetY = this.winIcon_l.height / 2;
            // -80  or 350
            this.winIcon_l.x = -80;
            this.winIcon_l.y = 90;
            // this.addChild(this.winIcon_l);
        }
    };
    // right add icon
    Field_ball.prototype.addwinIcon_r = function () {
        if (!!this.winIcon_r) {
            // this.addChild(this.winIcon_r);
        }
        else {
            this.winIcon_r = new egret.Bitmap(RES.getRes('win2_png'));
            this.winIcon_r.anchorOffsetY = this.winIcon_r.height / 2;
            this.winIcon_r.x = 350;
            this.winIcon_r.y = 90;
            // this.addChild(this.winIcon_r);
        }
    };
    // 更新左边总金币的背景
    Field_ball.prototype.upLeftCoinBg = function () {
        this.removeChild(this.goldItems_left02);
        this.addChild(this.goldItems_left);
        // 提高层级，不然会被挡住
        this.setChildIndex(this.allLeftCoin, this.getChildIndex(this.goldItems_left));
    };
    // 更新右边总金币的背景
    Field_ball.prototype.upRightCoinBg = function () {
        this.removeChild(this.goldItems_right02);
        this.addChild(this.goldItems_right);
        this.setChildIndex(this.allRightCoin, this.getChildIndex(this.goldItems_right));
    };
    //  创建 左边 收起的类
    Field_ball.prototype.addLeftAllCoin = function (coin) {
        // 左边队伍金币收集
        if (!!this.allLeftCoin) {
            this.allLeftCoin.text = coin;
        }
        else {
            this.allLeftCoin = new egret.TextField();
            this.allLeftCoin.text = coin;
            this.allLeftCoin.textColor = 0xbbcfc6;
            this.allLeftCoin.size = 20;
            this.allLeftCoin.width = 110;
            this.allLeftCoin.height = 28;
            this.allLeftCoin.x = 75;
            this.allLeftCoin.y = -6;
            this.allLeftCoin.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.allLeftCoin.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.goldItems_left02);
            this.addChild(this.allLeftCoin);
            // this.setChildIndex( this.allLeftCoin , this.getChildIndex( this.goldItems_left ))
        }
    };
    //  创建 右边 收起的类
    Field_ball.prototype.addRightAllCoin = function (coin) {
        if (!!this.allRightCoin) {
            this.allRightCoin.text = coin;
        }
        else {
            this.allRightCoin = new egret.TextField();
            this.allRightCoin.text = coin;
            this.allRightCoin.textColor = 0xbbcfc6;
            this.allRightCoin.size = 20;
            this.allRightCoin.width = 110;
            this.allRightCoin.height = 28;
            this.allRightCoin.x = 320;
            this.allRightCoin.y = -6;
            this.allRightCoin.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.allRightCoin.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.goldItems_right02);
            this.addChild(this.allRightCoin);
            // this.setChildIndex( this.allLeftCoin , this.getChildIndex( this.goldItems_left ))
        }
    };
    // 更新 自己投注的数值 (判断是否有该事物 left)
    Field_ball.prototype.upLeftMyMoney = function (coin) {
        if (!!this.leftMyMoneyBox) {
            this.leftMyMoneyText.text = coin;
        }
        else {
            this.leftMyMoneyBox = new egret.DisplayObjectContainer();
            this.leftMyMoneyBox.width = 196;
            this.leftMyMoneyBox.height = 27;
            this.leftMyMoneyBox.x = 25;
            this.leftMyMoneyBox.y = 148;
            var leftMyMoneyBg = new egret.Bitmap(RES.getRes('bg-betting_png'));
            this.leftMyMoneyBox.addChild(leftMyMoneyBg);
            this.leftMyMoneyText = new egret.TextField();
            this.leftMyMoneyText.text = coin;
            this.leftMyMoneyText.width = 196;
            this.leftMyMoneyText.height = 27;
            this.leftMyMoneyText.textColor = 0xffd146;
            this.leftMyMoneyText.size = 22;
            this.leftMyMoneyText.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.leftMyMoneyText.textAlign = egret.HorizontalAlign.CENTER;
            this.leftMyMoneyBox.addChild(this.leftMyMoneyText);
            this.addChild(this.leftMyMoneyBox);
        }
    };
    // 更新 自己投注的数值 (判断是否有该事物 right)
    Field_ball.prototype.upRightMyMoney = function (coin) {
        if (!!this.rightMyMoneyBox) {
            this.rightMyMoneyText.text = coin;
        }
        else {
            this.rightMyMoneyBox = new egret.DisplayObjectContainer();
            this.rightMyMoneyBox.width = 196;
            this.rightMyMoneyBox.height = 27;
            this.rightMyMoneyBox.x = 270;
            this.rightMyMoneyBox.y = 148;
            var rightMyMoneyBg = new egret.Bitmap(RES.getRes('bg-betting_png'));
            this.rightMyMoneyBox.addChild(rightMyMoneyBg);
            this.rightMyMoneyText = new egret.TextField();
            this.rightMyMoneyText.text = coin;
            this.rightMyMoneyText.width = 196;
            this.rightMyMoneyText.height = 27;
            this.rightMyMoneyText.textColor = 0xffd146;
            this.rightMyMoneyText.size = 22;
            this.rightMyMoneyText.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.rightMyMoneyText.textAlign = egret.HorizontalAlign.CENTER;
            this.rightMyMoneyBox.addChild(this.rightMyMoneyText);
            this.addChild(this.rightMyMoneyBox);
        }
    };
    return Field_ball;
}(eui.UILayer));
__reflect(Field_ball.prototype, "Field_ball");
//# sourceMappingURL=footballField.js.map