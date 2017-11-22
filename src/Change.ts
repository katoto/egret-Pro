// 杯赛换场
class Change extends eui.UILayer{
    public constructor(){
        super();
        this.drawChange();
    }
    private teamName:egret.TextField;
    private drawChange(){
        let bg:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-change_jpg'));
        this.addChild(bg);

        let logo:egret.Bitmap = new egret.Bitmap(RES.getRes('logo-yz_png'));
        logo.anchorOffsetX = logo.width/2;
        logo.x = window['store']['stage_anWidth'];
        logo.y = 206;
        this.addChild(logo);
        this.teamName = new egret.TextField();
        this.teamName.text = '亚洲杯';
        this.teamName.size = 46;
        this.teamName.textColor = 0xffffff;
        this.teamName.bold = true;
        this.teamName.italic = true;
        this.teamName.x = 160;
        this.teamName.y = 533;
        this.addChild(this.teamName);

        

    }
}