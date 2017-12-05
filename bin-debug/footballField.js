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
    // 设置锚点和x值  头像 队名 赔率 （  感觉得设置成 修改类的方式  ） ，这里加了一个参数bgUrl，用来控制不同赛场的背景
    function Field_ball(bgUrl) {
        var _this = _super.call(this) || this;
        _this.anchorOffsetX = 242.5;
        _this.x = window['store']['stage_Width'] / 2;
        _this.drawField(bgUrl);
        return _this;
    }
    Field_ball.prototype.drawField = function (bgUrl) {
        var court = new egret.Bitmap(RES.getRes(bgUrl));
        this.courtHeight = court.height;
        this.courtAnHeight = this.courtHeight / 2;
        this.addChild(court);
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
        leftUserBox.anchorOffsetY = 34;
        leftUserBox.x = 25;
        leftUserBox.y = this.courtAnHeight;
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
        this.leftTeam = new eui.Image();
        // leftTeam.source = leftImg;
        this.leftTeam.width = 68;
        this.leftTeam.height = 68;
        leftUserBox.addChild(this.leftTeam);
        this.leftTeam.mask = bgMask;
        // this.addChild( leftTeam )
        // 左边队伍队名
        this.leftTitle = new egret.TextField();
        this.leftTitle.size = 22;
        this.leftTitle.x = 102;
        this.leftTitle.y = this.courtAnHeight - 6;
        this.leftTitle.anchorOffsetY = 22;
        this.addChild(this.leftTitle);
        // 左边队伍赔率
        this.leftOdds = new egret.TextField();
        this.leftOdds.size = 28;
        this.leftOdds.x = 102;
        this.leftOdds.y = this.courtAnHeight + 2;
        this.leftOdds.bold = true;
        this.addChild(this.leftOdds);
        // 右边同上
        var rightUserBox = new egret.DisplayObjectContainer();
        rightUserBox.anchorOffsetY = 34;
        rightUserBox.width = 68;
        rightUserBox.height = 68;
        rightUserBox.x = 400;
        rightUserBox.y = this.courtAnHeight;
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
        this.rightTeam = new eui.Image();
        this.rightTeam.width = 68;
        this.rightTeam.height = 68;
        rightUserBox.addChild(this.rightTeam);
        this.rightTeam.mask = bgMask02;
        this.rightTitle = new egret.TextField();
        this.rightTitle.width = 140;
        this.rightTitle.textAlign = egret.HorizontalAlign.RIGHT;
        this.rightTitle.size = 22;
        this.rightTitle.x = 250;
        this.rightTitle.y = this.courtAnHeight - 6;
        this.rightTitle.anchorOffsetY = 22;
        this.addChild(this.rightTitle);
        this.rightOdds = new egret.TextField();
        this.rightOdds.width = 140;
        this.rightOdds.textAlign = egret.HorizontalAlign.RIGHT;
        this.rightOdds.size = 28;
        this.rightOdds.x = 250;
        this.rightOdds.y = this.courtAnHeight + 2;
        this.rightOdds.bold = true;
        this.addChild(this.rightOdds);
        //比分
        this.bgScore = new egret.Bitmap(RES.getRes('bg-vs_png'));
        this.bgScore.anchorOffsetY = 29;
        this.bgScore.x = 188;
        this.bgScore.y = this.courtHeight / 2;
        this.score = new egret.TextField();
        //    this.score.text= '2:0';
        this.score.textColor = 0xffffff;
        this.score.size = 52;
        this.score.bold = true;
        this.score.width = 485;
        this.score.height = this.courtHeight;
        this.score.textAlign = egret.HorizontalAlign.CENTER;
        this.score.verticalAlign = egret.VerticalAlign.MIDDLE;
        //    this.addChild(this.score)
    };
    /**
     *  比分
     */
    Field_ball.prototype.writeScore = function (num) {
        if (num === '') {
            if (this.score.parent) {
                this.removeChild(this.bgScore);
                this.removeChild(this.score);
            }
        }
        else {
            this.score.text = num;
            if (!this.score.parent) {
                this.addChild(this.bgScore);
                this.addChild(this.score);
            }
        }
    };
    // 更新场地数据 赔率， 对阵 ，homeid awayid   ( 初始的 投注数据 )
    Field_ball.prototype.upFieldAllData = function (leftImg, leftT, leftO, rightImg, rightT, rightO, homeid, awayid, matchid, home_golds, away_golds) {
        var $store_coinNum = window['store']['coin_Num'];
        this.leftTeam.source = leftImg;
        this.leftTitle.text = leftT;
        this.leftOdds.text = leftO;
        this.rightTitle.text = rightT;
        this.rightOdds.text = rightO;
        this.rightTeam.source = rightImg;
        this.homeid = homeid;
        this.awayid = awayid;
        this.matchid = matchid;
        if (!$store_coinNum[matchid]) {
            $store_coinNum[matchid] = {
                home_golds: null,
                my_golds_l: null,
                my_golds_r: null,
                away_golds: null,
            };
        }
        if (home_golds && home_golds !== '0') {
            $store_coinNum[matchid]['home_golds'] = $store_coinNum[matchid]['home_golds'] ? parseInt($store_coinNum[matchid]['home_golds']) + home_golds :
                parseInt(home_golds);
            this.addLeftAllCoin(window['formateGold'](home_golds));
        }
        if (away_golds && away_golds !== '0') {
            $store_coinNum[matchid]['away_golds'] = $store_coinNum[matchid]['away_golds'] ? parseInt($store_coinNum[matchid]['away_golds']) + away_golds :
                parseInt(away_golds);
            this.addRightAllCoin(window['formateGold'](away_golds));
        }
    };
    /**
     *  获取 对应场地的 img & name
     */
    Field_ball.prototype.getFieldImg = function () {
        return {
            l_img: this.leftTeam.source,
            r_img: this.rightTeam.source,
            l_name: this.leftTitle.text,
            r_name: this.rightTitle.text,
        };
    };
    // 当前对阵数据
    Field_ball.prototype.getCurrMatchData = function () {
        return {
            homeid: this.homeid,
            awayid: this.awayid,
            matchid: this.matchid,
            leftOdds: this.leftOdds.text,
            rightOdds: this.rightOdds.text,
        };
    };
    // 删除所有 win 图标
    Field_ball.prototype.removeWinIcon = function () {
        if (this.winIcon_l && this.winIcon_l.parent) {
            this.removeChild(this.winIcon_l);
        }
        if (this.winIcon_r && this.winIcon_r.parent) {
            this.removeChild(this.winIcon_r);
        }
    };
    //  left add icon win   胜利图标
    Field_ball.prototype.addwinIcon_l = function () {
        if (!!this.winIcon_l) {
            this.addChild(this.winIcon_l);
        }
        else {
            this.winIcon_l = new egret.Bitmap(RES.getRes('win_png'));
            this.winIcon_l.width = 0;
            this.winIcon_l.height = 0;
            this.winIcon_l.anchorOffsetY = 101;
            this.winIcon_l.y = this.courtAnHeight;
            this.winIcon_l.x = -80;
            this.addChild(this.winIcon_l);
            egret.Tween.get(this.winIcon_l).to({ width: 203, height: 203 }, 400).to({ width: 300, height: 300 }, 400).to({ width: 203, height: 202 }, 400);
        }
    };
    // right add icon
    Field_ball.prototype.addwinIcon_r = function () {
        if (!!this.winIcon_r) {
            this.addChild(this.winIcon_r);
        }
        else {
            this.winIcon_r = new egret.Bitmap(RES.getRes('win2_png'));
            this.winIcon_r.width = 0;
            this.winIcon_r.height = 0;
            this.winIcon_r.anchorOffsetY = 101;
            this.winIcon_r.x = 350;
            this.winIcon_r.y = this.courtAnHeight;
            this.winIcon_r.y = 90;
            this.addChild(this.winIcon_r);
            egret.Tween.get(this.winIcon_r).to({ width: 203, height: 203 }, 400).to({ width: 300, height: 300 }, 400).to({ width: 203, height: 202 }, 400);
        }
    };
    // 更新左边总金币的背景
    Field_ball.prototype.upLeftCoinBg = function () {
        if (this.goldItems_left02.parent) {
            this.removeChild(this.goldItems_left02);
        }
        // 提高层级，不然会被挡住
        if (this.allLeftCoin && this.allLeftCoin.parent) {
            this.addChild(this.goldItems_left);
            this.setChildIndex(this.allLeftCoin, this.getChildIndex(this.goldItems_left));
        }
    };
    // 更新右边总金币的背景
    Field_ball.prototype.upRightCoinBg = function () {
        if (this.goldItems_right02.parent) {
            this.removeChild(this.goldItems_right02);
        }
        if (this.allRightCoin && this.allRightCoin.parent) {
            this.addChild(this.goldItems_right);
            this.setChildIndex(this.allRightCoin, this.getChildIndex(this.goldItems_right));
        }
    };
    //  创建 左边 收起的类
    Field_ball.prototype.addLeftAllCoin = function (coin) {
        // 左边队伍金币收集
        if (!!this.allLeftCoin) {
            this.allLeftCoin.text = coin;
            if (!this.goldItems_left02.parent) {
                this.addChild(this.goldItems_left02);
            }
            if (!this.allLeftCoin.parent) {
                this.addChild(this.allLeftCoin);
            }
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
            if (!this.goldItems_right02.parent) {
                this.addChild(this.goldItems_right02);
            }
            if (!this.allRightCoin.parent) {
                this.addChild(this.allRightCoin);
            }
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
            if (!this.leftMyMoneyBox.parent) {
                this.addChild(this.leftMyMoneyBox);
            }
        }
        else {
            this.leftMyMoneyBox = new egret.DisplayObjectContainer();
            this.leftMyMoneyBox.width = 196;
            this.leftMyMoneyBox.height = 27;
            this.leftMyMoneyBox.x = 25;
            this.leftMyMoneyBox.anchorOffsetY = 27;
            this.leftMyMoneyBox.y = this.courtHeight - 5;
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
            if (!this.rightMyMoneyBox.parent) {
                this.addChild(this.rightMyMoneyBox);
            }
        }
        else {
            this.rightMyMoneyBox = new egret.DisplayObjectContainer();
            this.rightMyMoneyBox.width = 196;
            this.rightMyMoneyBox.height = 27;
            this.rightMyMoneyBox.x = 270;
            this.rightMyMoneyBox.y = 148;
            this.rightMyMoneyBox.anchorOffsetY = 27;
            this.rightMyMoneyBox.y = this.courtHeight - 5;
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
    // 清除 自己投的和他人投 的 区域  以及总的背景 ？ 是否必须 
    Field_ball.prototype.cleanAllCoinText = function () {
        if (this.rightMyMoneyBox && this.rightMyMoneyBox.parent) {
            this.removeChild(this.rightMyMoneyBox);
        }
        if (this.leftMyMoneyBox && this.leftMyMoneyBox.parent) {
            this.removeChild(this.leftMyMoneyBox);
        }
        if (this.allRightCoin && this.allRightCoin.parent) {
            this.removeChild(this.allRightCoin);
        }
        if (this.allLeftCoin && this.allLeftCoin.parent) {
            this.removeChild(this.allLeftCoin);
        }
        // 总的金币背景
        if (this.goldItems_right && this.goldItems_right.parent) {
            this.removeChild(this.goldItems_right);
        }
        // 总的金币背景
        if (this.goldItems_left && this.goldItems_left.parent) {
            this.removeChild(this.goldItems_left);
        }
        if (this.goldItems_left02 && this.goldItems_left02.parent) {
            this.removeChild(this.goldItems_left02);
        }
        if (this.goldItems_right02 && this.goldItems_right02.parent) {
            this.removeChild(this.goldItems_right02);
        }
    };
    // findWinLocation  ==> findLocal 
    /**
     *   @return  _l  left  _r  right
     */
    Field_ball.prototype.findLocal = function (winid) {
        if (winid) {
            if (this.homeid === winid) {
                return '_l';
            }
            else if (this.awayid === winid) {
                return '_r';
            }
        }
        else {
            console.warn('footballfield findLocal not find winid');
        }
    };
    return Field_ball;
}(eui.UILayer));
__reflect(Field_ball.prototype, "Field_ball");
//# sourceMappingURL=footballField.js.map