class Field_ball_contain extends egret.DisplayObjectContainer{
    private this_fieldContain;
    // 比赛对阵
    private field1;
    private field2;
    private field3;
    private field4;

    public constructor(){
        super();
        this.drawField();
    }
    private drawField(){
        console.log(1234);
        this.this_fieldContain = this;
        // this.field2 = new Field_ball(485,window['store']['stage_anWidth'],'http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1579.png','克罗地亚',3.78,'10万','10.09万','team-02_jpg','德国',1.26,'23万','10.09万');
        // this.field2.y = 120;
        // this.addChild(this.field2);
        // this.field2.touchEnabled = true;
        // this.field2.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_twoEvt ,this)
    }

    //  初始化 场地  （ 每次切换场地，都认为是初始化 ）
    private initField(){
        console.log(' 初始化场地 ')
        var fieldStr = 'field';
        var $store = window['store']
        if( $store['matches'] ){
            for( var i=0,len = 4 ;i<len;i++ ){
                fieldStr = 'field'+(i+1)
                this[fieldStr] = new Field_ball( 485,$store['stage_anWidth'] , $store['matches'][i].homelogo ,
                    $store['matches'][i].homename ,  $store['matches'][i].homeodds ,'0' , '0' ,
                    $store['matches'][i].awaylogo , $store['matches'][i].awayname , $store['matches'][i].awayodds ,'0' ,'10','-80'
                )
                this[fieldStr].y = 120+202*i;
                this[fieldStr].touchEnabled = true;
                this.this_fieldContain.addChild( this[fieldStr] )
            }
            if( this.field1 ){
                this.field1.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_oneEvt ,this)
            }
            if( this.field2 ){
                this.field2.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_twoEvt ,this)
            }            
            if( this.field3 ){
                this.field3.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_threeEvt ,this)
            }
            if( this.field4 ){
                this.field4.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_twoEvt ,this)
            }       
        }
    }

    // 场地点击处理
    private field_oneEvt( e:egret.TouchEvent ){
        console.log(1)
        console.log( e )
        let x = e.localX;
        let y = e.localY;
        if(10<x && x<242.5){
           console.log('左边')
        }else if(252.5<x && x<475){
            console.log('右边')
        }
    }
    private field_twoEvt( e:egret.TouchEvent ){
        console.log(2)
        console.log(e.localX)
        console.log(e.localY)
    }
    private field_threeEvt( e:egret.TouchEvent ){
        console.log(e)
        console.log(3)
        console.log(e.localX)
        console.log(e.localY)
    }
    private field_fourEvt( e:egret.TouchEvent ){
        console.log(4)
        console.log(e.localX)
        console.log(e.localY)
    }

}