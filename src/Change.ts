// 杯赛换场
class Change extends eui.UILayer{
    public constructor(){
        super();
        this.drawChange();
    }

    // 各种奖池的情况
    private logo_mz:egret.Bitmap;  // 美洲
    private logo_oz:egret.Bitmap ; // 欧洲
    private logo_fz:egret.Bitmap ; // 非洲
    private logo_yz:egret.Bitmap ; // 亚洲
    private logo_sj:egret.Bitmap ; // 世界

    private teamName:egret.TextField;

    // 修改对用容器的图片
    private teamImg01_l ;
    private teamImg02_l ;
    private teamImg03_l ;
    private teamImg04_l ;

    private teamImg01_r ;
    private teamImg02_r ;
    private teamImg03_r ;
    private teamImg04_r ;

    // name
    private teamImg01_name_l ;
    private teamImg02_name_l ;
    private teamImg03_name_l ;
    private teamImg04_name_l ;

    private teamImg01_name_r ;
    private teamImg02_name_r ;
    private teamImg03_name_r ;
    private teamImg04_name_r ;

    private drawChange(){
        let $store = window['store'] ,
            bg:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-change_jpg'));
        this.addChild(bg);

        this.logo_mz = this.createLogoBitmap( 'logo-mz_png' ) ;
        this.logo_oz = this.createLogoBitmap( 'logo-oz_png' ) ;
        this.logo_fz = this.createLogoBitmap( 'logo-fz_png' ) ;
        this.logo_yz = this.createLogoBitmap( 'logo-yz_png' ) ;
        this.logo_sj = this.createLogoBitmap( 'logo-sjb_png' ) ;
        // this.addChild( this.logo_mz );
        // setTimeout(()=>{
        //     egret.Tween.get( this.logo_mz ).to({x:window['store']['stage_anWidth'],y:206},200);
        // },500 )

        this.teamName = new egret.TextField();
        // this.teamName.text = '亚洲杯';
        this.teamName.size = 46;
        this.teamName.textColor = 0xffffff;
        this.teamName.bold = true;
        this.teamName.italic = true;
        this.teamName.x = 160;
        this.teamName.y = 533;
        this.addChild(this.teamName);

        let teamWrap01 = this.teamWrap( 'teamImg01' );
        teamWrap01.anchorOffsetX = 283;
        teamWrap01.x = $store['stage_anWidth'];
        teamWrap01.y = 630;
        this.addChild(teamWrap01);
        // setTimeout(function(){  //动画过多发热
        //     egret.Tween.get(teamWrap01).to({y:630},200);
        // },600)

        let teamWrap02 = this.teamWrap( 'teamImg02' );
        teamWrap02.anchorOffsetX = 283;
        teamWrap02.x = $store['stage_anWidth'];
        teamWrap02.y = 750;
        this.addChild(teamWrap02);

        let teamWrap03 = this.teamWrap( 'teamImg03' );
        teamWrap03.anchorOffsetX = 283;
        teamWrap03.x = $store['stage_anWidth'];
        teamWrap03.y = 870;
        this.addChild(teamWrap03);

        let teamWrap04 = this.teamWrap( 'teamImg04' );
        teamWrap04.anchorOffsetX = 283;
        teamWrap04.x = $store['stage_anWidth'];
        teamWrap04.y = 990;
        this.addChild(teamWrap04);

    }

    /**
     *  抽离是否合理
     */
    private createLogoBitmap( imgStr:string ){
        let nameObj = new egret.Bitmap();
        nameObj.texture = RES.getRes( imgStr );

        nameObj.anchorOffsetX = nameObj.width/2;
        nameObj.x = window['store']['stage_anWidth'];
        nameObj.y = -500;
        return nameObj;
    }

    /**
     *  容器的初始化
     */
    private teamWrap( baseName ){

        let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap.width = 566;
        wrap.height = 68;

         // 左边队伍头像容器
        let leftUserBox:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        leftUserBox.width = 68;
        leftUserBox.height = 68;
        leftUserBox.x = 0;
        leftUserBox.y = 0;  
        // 插入边框
        let bgBorder:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        leftUserBox.addChild(bgBorder);
        // 插入遮罩层
        let bgMask:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-user_png'));
        bgMask.x = 3;
        bgMask.y = 3;
        leftUserBox.addChild(bgMask);
        //队伍icon
        this[baseName+'_l' ] = new eui.Image();
        this[baseName+'_l' ].width = 68;
        this[baseName+'_l' ].height = 68;
        leftUserBox.addChild (this[baseName+'_l' ]);
        this[baseName+'_l' ].mask = bgMask;
        //左边队伍名称
        this[baseName+'_name_l'] = new egret.TextField();
        this[baseName+'_name_l'].height = 68;
        this[baseName+'_name_l'].size = 22;
        this[baseName+'_name_l'].textColor = 0xffffff;
        this[baseName+'_name_l'].alpha = 0.6;
        this[baseName+'_name_l'].verticalAlign = egret.VerticalAlign.MIDDLE;
        this[baseName+'_name_l'].x = 80;
        leftUserBox.addChild(this[baseName+'_name_l'])
        wrap.addChild(leftUserBox); 

        //  右边队伍头像容器
        let rightUserBox:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        rightUserBox.width = 68;
        rightUserBox.height = 68;
        rightUserBox.x = 498;
        rightUserBox.y = 0;  
        wrap.addChild(rightUserBox); 
        // 插入边框
        let bgBorder2:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-item_png'));
        rightUserBox.addChild(bgBorder2);
        // 插入遮罩层
        let bgMask2:egret.Bitmap = new egret.Bitmap(RES.getRes('bg-user_png'));
        bgMask2.x = 3;
        bgMask2.y = 3;
        rightUserBox.addChild(bgMask2);
        //队伍icon
        this[ baseName+'_r' ]= new eui.Image();
        // this[ baseName+'_r' ].source = urlRight;
        this[ baseName+'_r' ].width = 68;
        this[ baseName+'_r' ].height = 68;
        rightUserBox.addChild(this[ baseName+'_r' ]);
        this[ baseName+'_r' ].mask = bgMask2;
         //右边队伍名称
        this[baseName+'_name_r']= new egret.TextField();
        this[baseName+'_name_r'].width = 180;
        this[baseName+'_name_r'].anchorOffsetX = 180;
        this[baseName+'_name_r'].height = 68;
        this[baseName+'_name_r'].size = 22;
        this[baseName+'_name_r'].textColor = 0xffffff;
        this[baseName+'_name_r'].alpha = 0.6;
        this[baseName+'_name_r'].textAlign = egret.HorizontalAlign.RIGHT;
        this[baseName+'_name_r'].verticalAlign = egret.VerticalAlign.MIDDLE;
        this[baseName+'_name_r'].x = -14;
        rightUserBox.addChild(this[baseName+'_name_r'])
        wrap.addChild(rightUserBox); 

        let teamVs:egret.TextField = new egret.TextField();
        teamVs.text = 'vs';
        teamVs.size = 22;
        teamVs.textColor = 0xaaa8b6;
        teamVs.width = 566;
        teamVs.height = 68;
        teamVs.textAlign = egret.HorizontalAlign.CENTER;
        teamVs.verticalAlign = egret.VerticalAlign.MIDDLE;
        wrap.addChild(teamVs); 
        return wrap;
    }

    /**
     *  更新对应的数据
     */
    private upChangeMsg( matches:any , room_info:any ){
        let logoName = '' ,
            baselogoStr = 'teamImg0' ;
        if( room_info ){
            // 清除所有的 logo
            this.clearAllLogo();
            switch ( room_info.leagueid ){
                // 200 世界 202 欧洲 201 亚洲 203 非 204 美
                case '200':
                    logoName = 'logo_sj'
                ;break;
                case '201':
                     logoName = 'logo_yz'
                ;break;
                case '202':
                    logoName = 'logo_oz'
                ;break;
                case '203':
                    logoName = 'logo_fz'
                ;break;
                case '204':
                    logoName = 'logo_mz'
                ;break;
            }
            if( room_info.leaguename ){
                this.teamName.text = room_info.leaguename ;
            }
            if( !!this[logoName] ){
                this.addChild( this[logoName] );
            }
            setTimeout(()=>{
                let $store = window['store'] ;
                if( !( ( $store['env_variable'].src === 'qqsd' || $store['env_variable'].src === '500app' ) && window['platform'] === 'android' ) ){
                    egret.Tween.get( this[logoName] ).to({x:window['store']['stage_anWidth'],y:206},200);
                } else{
                    this[logoName].x =  window['store']['stage_anWidth'] ;
                    this[logoName].y =  206 ;
                }  
                
            },400 )

        }

        if( matches && matches.length === 4 ){
            for( let i=0;i<4;i++ ){
                if( matches[i].awaylogo ){
                    this[ baselogoStr +( i+1 )+'_r' ].source = matches[i].awaylogo
                }
                if( matches[i].homelogo ){
                    this[ baselogoStr +( i+1 )+'_l' ].source = matches[i].homelogo
                }
                if( matches[i].awayname ){
                    this[ baselogoStr +( i+1 )+'_name_r' ].text = matches[i].awayname
                }
                if( matches[i].homename ){
                    this[ baselogoStr +( i+1 )+'_name_l' ].text = matches[i].homename
                }
            }
        }
    }

    /**
     *  clear all logo
     */
    private clearAllLogo(){

        if( this.logo_fz.parent ){
            this.removeChild( this.logo_fz )
        }
        if( this.logo_mz.parent ){
            this.removeChild( this.logo_mz )
        }
        if( this.logo_oz.parent ){
            this.removeChild( this.logo_oz )
        }
        if( this.logo_yz.parent ){
            this.removeChild( this.logo_yz )
        }
        if( this.logo_sj.parent ){
            this.removeChild( this.logo_sj )
        }                        
    }


}