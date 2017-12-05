class Field_ball_contain extends egret.DisplayObjectContainer{
    //三个容器 用来包裹决赛、1/2和1/4
    private courtWrap1;
    private courtWrap2;
    private courtWrap4;
    // 比赛对阵
    private field1;
    private field21;
    private field22;
    private field41;
    private field42;
    private field43;
    private field44;

    public constructor(){
        super();
        this.drawField();
    }
    //声音
    private musicgold:egret.Sound;
    private drawField(){
         this.musicgold = RES.getRes("bet_mp3");

        // 放出舞台是否去除事件绑定提高性能？

        this.courtWrap1 = this.courtWrap();
        this.courtWrap2 = this.courtWrap();
        this.courtWrap4 = this.courtWrap();
        // this.courtWrap1.touchEnabled = true;
        // this.courtWrap1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
        // this.courtWrap2.touchEnabled = true;
        // this.courtWrap2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
        // this.courtWrap4.touchEnabled = true;
        // this.courtWrap4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
        // 三选一插入

        this.field1 = new Field_ball('bg-court1_png');
        this.field1.anchorOffsetY = 187.5;
        this.field1.y = 511;   //   963/2+30
        this.field1.touchEnabled = true;
        this.field1.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_1Evt ,this)
        this.courtWrap1.addChild(this.field1);

        this.field21 = new Field_ball('bg-court2_png');
        this.field21.y = 234;   // 184   +50
        this.field21.touchEnabled = true;
        this.field21.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_21Evt ,this)
        this.courtWrap2.addChild(this.field21);

        this.field22 = new Field_ball('bg-court2_png');
        this.field22.y = 508;   //  558  -50
        this.field22.touchEnabled = true;
        this.field22.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_22Evt ,this)
        this.courtWrap2.addChild(this.field22);

        this.field41 = new Field_ball('bg-court4_png');
        this.field41.y = 120;
        this.field41.touchEnabled = true;
        this.field41.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_41Evt ,this)
        this.courtWrap4.addChild(this.field41);

        this.field42 = new Field_ball('bg-court4_png');
        this.field42.y = 320;   //  
        this.field42.touchEnabled = true;
        this.field42.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_42Evt ,this)
        this.courtWrap4.addChild(this.field42);

        this.field43 = new Field_ball('bg-court4_png');
        this.field43.y = 520;   //
        this.field43.touchEnabled = true;
        this.field43.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_43Evt ,this)
        this.courtWrap4.addChild(this.field43);

        this.field44 = new Field_ball('bg-court4_png');
        this.field44.y = 720;   //  
        this.field44.touchEnabled = true;
        this.field44.addEventListener( egret.TouchEvent.TOUCH_TAP ,this.field_44Evt ,this)
        this.courtWrap4.addChild(this.field44);


    }
        // 放入4个场地
    private addcourtWrap4(){
        if( this.courtWrap2.parent ){
            this.removeChild(this.courtWrap2);
        }
        if( this.courtWrap1.parent ){
            this.removeChild(this.courtWrap1);
        }
        this.addChild(this.courtWrap4);
    }
    // 放入2个场地
    private addcourtWrap2(){
        if( this.courtWrap1.parent ){
            this.removeChild(this.courtWrap1);
        }
        if( this.courtWrap4.parent ){
            this.removeChild(this.courtWrap4);
        }

        this.addChild(this.courtWrap2);
    }
    // 放入1个场地
    private addcourtWrap1(){
        if( this.courtWrap2.parent ){
            this.removeChild(this.courtWrap2);
        }
        if( this.courtWrap4.parent ){
            this.removeChild(this.courtWrap4);
        }
        this.addChild(this.courtWrap1);
    }

    //  初始化 场地 （记录位置）
    private initFieldMsg(){
        let fieldStr = 'field';
        let $store = window['store']
        let matchLen = $store['matches'].length
        $store['matFindField'] = {};  // 切换场地 清空数据
        if( $store['matches'] && matchLen ){
            switch( matchLen ){
                case 1 :
                    if( $store['matches'][0] ){
                        this.field1.upFieldAllData( $store['matches'][0].homelogo , $store['matches'][0].homename ,  $store['matches'][0].homeodds ,
                        $store['matches'][0].awaylogo , $store['matches'][0].awayname , $store['matches'][0].awayodds ,
                        $store['matches'][0].homeid , $store['matches'][0].awayid , $store['matches'][0].matchid ,
                        $store['matches'][0].home_golds , $store['matches'][0].away_golds
                         )  
                        this.addcourtWrap1()
                        // 记录位置  切换
                        $store['matFindField'][$store['matches'][0].matchid] = 'field1';
                    }else{
                        console.error( '场地1数据不对' )
                    }
                break;
                case 2 :
                    for( let i=0 ; i<2 ; i++ ){
                        if( $store['matches'][i] ){
                            this['field2'+( i + 1 )].upFieldAllData( $store['matches'][i].homelogo , $store['matches'][i].homename ,  $store['matches'][i].homeodds ,
                                $store['matches'][i].awaylogo , $store['matches'][i].awayname , $store['matches'][i].awayodds ,
                                $store['matches'][i].homeid , $store['matches'][i].awayid , $store['matches'][i].matchid,
                                $store['matches'][i].home_golds , $store['matches'][i].away_golds
                                 )
                                // 记录位置
                                $store['matFindField'][$store['matches'][i].matchid] = 'field2' +( i+1 );
                        } else {
                            console.error( '场地1/2数据不对' )
                        }
                    }
                    this.addcourtWrap2()

                break;
                case 4 :
                    for( let i=0 ; i<4 ; i++ ){
                        if( $store['matches'][i] ){
                            this['field4'+( i + 1 )].upFieldAllData( $store['matches'][i].homelogo , $store['matches'][i].homename ,  $store['matches'][i].homeodds ,
                                $store['matches'][i].awaylogo , $store['matches'][i].awayname , $store['matches'][i].awayodds ,
                                $store['matches'][i].homeid , $store['matches'][i].awayid , $store['matches'][i].matchid,
                                $store['matches'][i].home_golds , $store['matches'][i].away_golds
                                 )
                                // 记录位置
                                $store['matFindField'][$store['matches'][i].matchid] = 'field4' +( i+1 );
                        } else {
                            console.error( '场地1/4数据不对' )
                        }
                    }
                    this.addcourtWrap4()

                break;
                default:
                    console.error('场地error')
                ;
            }

        }
    }

    /**
     *  抽出左右事件
     */
    async leftSend_evt( fieldName:string  , x:any , y:any ){
        let $store = window['store'];
        let $store_coinNum = $store['coin_Num'];
        let currBtnNumber = $store['curr_btn_coin'];
        let currQueryStr = '';

        let currMatchData = this[fieldName].getCurrMatchData()

        currQueryStr = window['convertToQueryString']({
            ck : $store['orderObj'].ck,
            golds : $store['curr_btn_coin'] ,
            matchid : currMatchData.matchid ,
            expect : $store['orderObj'].expect ,
            odds : currMatchData.leftOdds ,
            homeid : currMatchData.homeid ,
            awayid : currMatchData.awayid ,
            stageid : $store['orderObj'].stageid ,
            selection : '1' ,
            roomid : $store['orderObj'].roomid ,
            node : $store['orderObj'].node ,
        })

        await window['getJson']( { type:'get' ,url : $store['orderDomain']+'/vguess/place/order?'+currQueryStr ,dataType:'json'} ).then(( res )=>{
            // 更新 自己头像 金币   下单之后
            if( res && res.status === '100' ){
                if( $store['userMySelf'].getCurGold() != res.data.total ){
                    // 记录自己的金币 (派发之后，清空)
                $store_coinNum[currMatchData.matchid]['my_golds_l'] = $store_coinNum[currMatchData.matchid]['my_golds_l'] ? parseInt ( $store_coinNum[currMatchData.matchid]['my_golds_l'] ) + $store.curr_btn_coin :
                parseInt ( $store.curr_btn_coin );  
                $store_coinNum[currMatchData.matchid]['home_golds'] = $store_coinNum[currMatchData.matchid]['home_golds'] ? parseInt ( $store_coinNum[currMatchData.matchid]['home_golds'] ) + $store.curr_btn_coin :
                parseInt ( $store.curr_btn_coin );

                    this.musicgold.play(0,1);

                    if( res.data && res.data.total ){
                        $store['userMySelf'].setMyGold( res.data.total );
                    }else{
                        console.error( 'field_ball_contain userMySelf Gold error' )
                    }

                    this[fieldName].upLeftMyMoney( window['formateGold'] ( $store_coinNum[currMatchData.matchid]['my_golds_l']) )  
                    this[fieldName].addLeftAllCoin( window['formateGold']( $store_coinNum[currMatchData.matchid]['home_golds']) ); 

                    if( parseInt ( $store['curr_btn_coin'] ) >= 1000  ){
                        this.tween_Coin( x , y , $store['allCoinObj'][fieldName].coin_left , true )
                    }else{
                        this.tween_Coin( x , y , $store['allCoinObj'][fieldName].coin_left , false )
                    }

                }

            }else{
                if( $store['$cnt'] ){
                    $store['$cnt'].showTips( res.message );
                }
            }
        })
    }

    /**
     *  抽出左右事件
     */
    async rightSend_evt( fieldName:string  , x:any , y:any ){
        let $store = window['store'];
        let $store_coinNum = $store['coin_Num'];
        let currBtnNumber = $store['curr_btn_coin'];
        let currQueryStr = '';

        let currMatchData = this[fieldName].getCurrMatchData()
        currQueryStr = window['convertToQueryString']({
            ck : $store['orderObj'].ck,
            golds : $store['curr_btn_coin'] ,
            matchid : currMatchData.matchid ,
            expect : $store['orderObj'].expect ,
            odds : currMatchData.rightOdds ,
            homeid : currMatchData.homeid ,
            awayid : currMatchData.awayid ,
            stageid : $store['orderObj'].stageid ,
            selection : '2' ,
            roomid : $store['orderObj'].roomid ,
            node : $store['orderObj'].node ,
        })

        await window['getJson']( { type:'get' ,url : $store['orderDomain']+'/vguess/place/order?'+currQueryStr ,dataType:'json'} ).then(( res )=>{
            if( res && res.status === '100' ){

                // 可以利用 自身金币的变化走
                // 临时处理 验证ok
                if( $store['userMySelf'].getCurGold() != res.data.total ){
                    this.musicgold.play(0,1);

                $store_coinNum[currMatchData.matchid]['my_golds_r'] = $store_coinNum[currMatchData.matchid]['my_golds_r'] ? parseInt ( $store_coinNum[currMatchData.matchid]['my_golds_r'] ) + $store.curr_btn_coin :
                parseInt ( $store.curr_btn_coin );  
                $store_coinNum[currMatchData.matchid]['away_golds'] = $store_coinNum[currMatchData.matchid]['away_golds'] ? parseInt ( $store_coinNum[currMatchData.matchid]['away_golds'] ) + $store.curr_btn_coin : 
                parseInt ( $store.curr_btn_coin );

                    this[fieldName].upRightMyMoney( window['formateGold']( $store_coinNum[currMatchData.matchid]['my_golds_r'] ))  // 个人金额
                    this[fieldName].addRightAllCoin( window['formateGold']( $store_coinNum[currMatchData.matchid]['away_golds']) ); //  总的金额 

                    if( parseInt ( $store['curr_btn_coin'] ) >= 1000  ){
                        this.tween_Coin(x,y, $store['allCoinObj'][fieldName].coin_right , true ) ;
                    }else{
                        this.tween_Coin(x,y, $store['allCoinObj'][fieldName].coin_right , false ) ;
                    }


                    

                    if( res.data && res.data.total ){
                        $store['userMySelf'].setMyGold( res.data.total );
                    }else{
                        console.error( 'field_ball_contain userMySelf Gold error' )
                    }

                }

            }else{
                if( $store['$cnt'] ){
                    $store['$cnt'].showTips( res.message );
                }
            }
        })

    }

    // 场地点击处理 new 
    async field_41Evt( e:egret.TouchEvent ){
        //  执行动画  213 154 left   496 156 right
        //  field41  为了方便处理
        // field41:{
        //     coin_left:[],
        //     coin_right:[],
        //     coin_left_local:{ x:null ,y:null },
        //     coin_right_local:{ x:null ,y:null }
        // }
        let x = e.localX + 133;
        let y = e.localY + 120;
        let $store = window['store'];
        let $store_coinNum = $store['coin_Num'];
        let currBtnNumber = $store['curr_btn_coin'];
        let currQueryStr = '';

        let currMatchData = this.field41.getCurrMatchData()

        if( y>150 && y <260 ){

            if($store['unableClick']){
                $store['$cnt'].showTips('unableClick ture');
                // 不可点击
                if( $store['$cnt'] ){
                    $store['$cnt'].showTips('现在不能投注,bug 被我设置了');
                }
                return false ;
            }

            if( !$store['allCoinObj']['field41'] ){
                $store['allCoinObj']['field41'] = {
                    coin_left:[],
                    coin_right:[],
                    coin_left_local: $store['coin_local']['field41_l'] ,
                    coin_right_local: $store['coin_local']['field41_r']
                }

            }
            if( !$store_coinNum[currMatchData.matchid] ){
                $store_coinNum[currMatchData.matchid] = {
                    home_golds : null,
                    my_golds_l : null,
                    my_golds_r : null ,
                    away_golds: null ,
                }
            }
            if(150<x && x<350){
                this.leftSend_evt( 'field41' , x , y  ) ;

            }else if(410<x && x<600){
                this.rightSend_evt( 'field41' ,x , y ) ;

            }
        }
    }

    async field_42Evt( e:egret.TouchEvent ){
        //  执行动画  213 154 left   496 156 right  
        let x = e.localX + 133;
        let y = e.localY + 320;
        let $store = window['store'];
        let $store_coinNum = $store['coin_Num'];
        let currBtnNumber = $store['curr_btn_coin'];

        let currQueryStr = '';
        let currMatchData = this.field42.getCurrMatchData()

        if( y>350 && y <460 ){
            if($store['unableClick']){
                $store['$cnt'].showTips('unableClick ture');
                return false ;
            }

            if( !$store['allCoinObj']['field42'] ){

                $store['allCoinObj']['field42'] = {
                    coin_left:[],
                    coin_right:[],
                    coin_left_local: $store['coin_local']['field42_l'] ,
                    coin_right_local: $store['coin_local']['field42_r']
                }

            }

            if( !$store_coinNum[currMatchData.matchid] ){
                $store_coinNum[currMatchData.matchid] = {
                    home_golds : null,
                    my_golds_l : null,
                    my_golds_r : null ,
                    away_golds: null ,
                }
            }

            if(150<x && x<350){
                this.leftSend_evt( 'field42' , x , y  ) ;
            }else if(410<x && x<600){
                this.rightSend_evt( 'field42' ,x,y ) ;
            }
        }
    }

    async field_43Evt( e:egret.TouchEvent ){
        //  执行动画  213 154 left   496 156 right  
        let x = e.localX + 133;
        let y = e.localY + 520;
        let $store = window['store'];
        let $store_coinNum = $store['coin_Num'];
        let currBtnNumber = $store['curr_btn_coin'] ;

        let currQueryStr = '';
        let currMatchData = this.field43.getCurrMatchData();

        if( y>550 && y <660 ){
            if($store['unableClick']){
                $store['$cnt'].showTips('unableClick ture');
                return false ;
            }

            if( !$store['allCoinObj']['field43'] ){

                $store['allCoinObj']['field43'] = {
                    coin_left:[],
                    coin_right:[],
                    coin_left_local: $store['coin_local']['field43_l'] ,
                    coin_right_local: $store['coin_local']['field43_r']
                }

            }

            if( !$store_coinNum[currMatchData.matchid] ){
                $store_coinNum[currMatchData.matchid] = {
                    home_golds : null,
                    my_golds_l : null,
                    my_golds_r : null ,
                    away_golds: null ,
                }
            }

            if(150<x && x<350){
                this.leftSend_evt( 'field43' , x , y  ) ;

            }else if(410<x && x<600){
                this.rightSend_evt( 'field43' ,x,y ) ;
            }
        }
    }

    async field_44Evt( e:egret.TouchEvent ){
        //  执行动画  213 154 left   496 156 right  
        let x = e.localX + 133;
        let y = e.localY + 720;
        let $store = window['store'];
        let $store_coinNum = $store['coin_Num'];
        let currBtnNumber = $store['curr_btn_coin'];

        let currQueryStr = '';
        let currMatchData = this.field44.getCurrMatchData();
        if( y>750 && y <860 ){
            if($store['unableClick']){
                $store['$cnt'].showTips('unableClick ture');
                // 不可点击
                return false ;
            }
            if( !$store['allCoinObj']['field44'] ){

                $store['allCoinObj']['field44'] = {
                    coin_left:[],
                    coin_right:[],
                    coin_left_local: $store['coin_local']['field44_l'] ,
                    coin_right_local: $store['coin_local']['field44_r']
                }

            }

            if( !$store_coinNum[currMatchData.matchid] ){
                $store_coinNum[currMatchData.matchid] = {
                    home_golds : null,
                    my_golds_l : null,
                    my_golds_r : null ,
                    away_golds: null ,
                }
            }

            if(150<x && x<350){
                this.leftSend_evt( 'field44' , x , y  ) ;

            }else if(410<x && x<600){
                this.rightSend_evt( 'field44' ,x,y ) ;
            }
        }
    }


    async field_21Evt( e:egret.TouchEvent ){
        let x = e.localX + 133;
        let y = e.localY + 234;
        let $store = window['store'];
        let $store_coinNum = $store['coin_Num'];
        let currBtnNumber = $store['curr_btn_coin'];

        let currQueryStr = '';
        let currMatchData = this.field21.getCurrMatchData();

        if( y>270 && y <445 ){
            if($store['unableClick']){
                $store['$cnt'].showTips('unableClick ture');
                // 不可点击
                return false ;
            }
            if( !$store['allCoinObj']['field21'] ){

                $store['allCoinObj']['field21'] = {
                    coin_left:[],
                    coin_right:[],
                    coin_left_local: $store['coin_local']['field21_l'],
                    coin_right_local: $store['coin_local']['field21_r']
                }


            }

            if( !$store_coinNum[currMatchData.matchid] ){
                $store_coinNum[currMatchData.matchid] = {
                    home_golds : null,
                    my_golds_l : null,
                    my_golds_r : null ,
                    away_golds: null ,
                }
            }

            if(150<x && x<350){
                this.leftSend_evt( 'field21' , x , y  ) ;
            }else if(410<x && x<600){
                this.rightSend_evt( 'field21' ,x,y ) ;
            }
        }
    }
    async field_22Evt( e:egret.TouchEvent ){
        let x = e.localX + 133;
        let y = e.localY + 508;
        let $store = window['store'];
        let $store_coinNum = $store['coin_Num'];
        let currBtnNumber = $store['curr_btn_coin'];

        let currQueryStr = '';
        let currMatchData = this.field22.getCurrMatchData();

        if( y>544 && y <720 ){
            if($store['unableClick']){
                $store['$cnt'].showTips('unableClick ture');
                // 不可点击
                return false ;
            }
            if( !$store['allCoinObj']['field22'] ){

                $store['allCoinObj']['field22'] = {
                    coin_left:[],
                    coin_right:[],
                    coin_left_local: $store['coin_local']['field22_l'] ,
                    coin_right_local: $store['coin_local']['field22_r']
                }

            }

            if( !$store_coinNum[currMatchData.matchid] ){
                $store_coinNum[currMatchData.matchid] = {
                    home_golds : null,
                    my_golds_l : null,
                    my_golds_r : null ,
                    away_golds: null ,
                }
            }
            if(150<x && x<350){
                this.leftSend_evt( 'field22' , x , y  ) ;

            }else if(410<x && x<600){
                this.rightSend_evt( 'field22' ,x,y ) ;
            }
        }
    }
    async field_1Evt( e:egret.TouchEvent ){
        let x = e.localX + 133;
        let y = e.localY + 322;
        let $store = window['store'];
        let $store_coinNum = $store['coin_Num'];        
        let currBtnNumber = $store['curr_btn_coin'];

        let currQueryStr = '';
        let currMatchData = this.field1.getCurrMatchData();

        if( y>352 && y <650 ){
            if($store['unableClick']){
                $store['$cnt'].showTips('unableClick ture');
                // 不可点击
                return false ;
            }
            if( !$store['allCoinObj']['field1'] ){

                $store['allCoinObj']['field1'] = {
                    coin_left:[],
                    coin_right:[],
                    coin_left_local: $store['coin_local']['field1_l'],
                    coin_right_local: $store['coin_local']['field1_r']
                }

            }
            if( !$store_coinNum[currMatchData.matchid] ){
                $store_coinNum[currMatchData.matchid] = {
                    home_golds : null,
                    my_golds_l : null,
                    my_golds_r : null ,
                    away_golds: null ,
                }
            }
            if(150<x && x<350){
                this.leftSend_evt( 'field1' , x , y  ) ;
            }else if(410<x && x<600){
                this.rightSend_evt( 'field1' ,x,y ) ;

            }
        }
    }

    /**
     *  收起对应的 金币 ！
     */
    private collectCoin(){
        let $store = window['store'];
        let allCoinKeys = window['Object'].keys( $store['allCoinObj'] );
        let objLen = allCoinKeys.length;
        let $egret_Tween = egret.Tween ;
        if( objLen > 0){
            for( let i=0;i<objLen;i++ ){
                if( $store['allCoinObj'][allCoinKeys[i]] && $store['allCoinObj'][allCoinKeys[i]].coin_left ){
                    for( let j=0,len = $store['allCoinObj'][allCoinKeys[i]].coin_left.length ;j<len;j++ ){
                        $egret_Tween.get( $store['allCoinObj'][allCoinKeys[i]].coin_left[j] ).to( { 
                            x:$store['allCoinObj'][allCoinKeys[i]].coin_left_local.x,
                            y:$store['allCoinObj'][allCoinKeys[i]].coin_left_local.y 
                            // x:window['store']['stage_anWidth'] ,
                            // y: 1000 
                            // x: 41 ,   //+46    +584
                            // y: 152   //+72
                            //  x:584,
                            //  y:152
                        }, 200)
                    }
                }
                // call() 动画结束的回调
                if( $store['allCoinObj'][allCoinKeys[i]] && $store['allCoinObj'][allCoinKeys[i]].coin_right ){
                    for( let j=0,len = $store['allCoinObj'][allCoinKeys[i]].coin_right.length ;j<len;j++ ){
                        $egret_Tween.get( $store['allCoinObj'][allCoinKeys[i]].coin_right[j] ).to( { 
                            x:$store['allCoinObj'][allCoinKeys[i]].coin_right_local.x,
                            y:$store['allCoinObj'][allCoinKeys[i]].coin_right_local.y 
                        }, 200 )
                    }
                }
            }
            setTimeout(()=>{
                //  看 金币 定位，先把这段注释掉
                // 显示出总的金额  ,并清除所有金币 改变总的背景
                for( let i=0;i<objLen;i++ ){
                    // 清除左边金币
                    if( $store['allCoinObj'][allCoinKeys[i]] && $store['allCoinObj'][allCoinKeys[i]].coin_left ){
                        for( let j=0,len = $store['allCoinObj'][allCoinKeys[i]].coin_left.length ;j<len;j++ ){
                            if( $store['allCoinObj'][allCoinKeys[i]].coin_left[j].parent ){
                                this.removeChild( $store['allCoinObj'][allCoinKeys[i]].coin_left[j] )
                            }
                        }
                        // 全局修改left收起背景
                        this[allCoinKeys[i]].upLeftCoinBg()
                        $store['allCoinObj'][allCoinKeys[i]].coin_left = [] ; // 回收
                    }
                    // 清除右边金币
                    if( $store['allCoinObj'][allCoinKeys[i]] && $store['allCoinObj'][allCoinKeys[i]].coin_right ){
                        for( let j=0,len = $store['allCoinObj'][allCoinKeys[i]].coin_right.length ;j<len;j++ ){
                            if( $store['allCoinObj'][allCoinKeys[i]].coin_right[j].parent ){
                                this.removeChild( $store['allCoinObj'][allCoinKeys[i]].coin_right[j] )
                            }
                        }
                        // 全局修改right收起背景
                        this[allCoinKeys[i]].upRightCoinBg()
                        $store['allCoinObj'][allCoinKeys[i]].coin_right = [] ; // 回收
                    }
                }
            },200)
        }
    }

    /**
     *  分发金币  一个 
     *  @param  start coin_local 坐标
     *  @param  end 通过uid 找出的位置 userPositionObj  坐标 
     * 
     * 标识
     */
    private sendEndCoin( start:string , uid:string ){
        let goldArr = [];
        let $store = window['store'];
        let newEndNum = null;
        let newEndLocal_x = null;
        let newEndLocal_y = null;

        if( !uid || !( $store['userPositionLocal'][uid] )){
            console.error('sendEndCoin error  no find uid');
            return false ;
        }
        if( !start ){
            console.warn( 'sendEndCoin error' )
        }

        for( let i=0;i<5; i++ ){
            let gold = new Gold();
            gold.anchorOffsetX = gold.width/2;
            gold.anchorOffsetY = gold.height/2;
            gold.x = $store['coin_local'][start].x ;
            gold.y = $store['coin_local'][start].y ;
            goldArr.push( gold );
            this.addChild(gold);
        }

        if( $store['userPositionLocal'][uid] === '1' || $store['userPositionLocal'][uid] === 1 ){
            $store['userPositionObj'][0].x = $store['stage_anWidth'] - 46 ;
            $store['userPositionObj'][0].y = 902 ;
        }

        //  取到随机的位置
        newEndNum = $store['userPosition'][$store['userPositionLocal'][uid] - 1] - 1  ;
        // x: 41 ,   //+46    +584
        // y: 152   //+72

        if(newEndNum <=4){
            newEndLocal_x = $store['userPositionObj'][newEndNum].x + 46;
        }else{
            newEndLocal_x = $store['userPositionObj'][newEndNum].x + 584;
        }
        newEndLocal_y =  $store['userPositionObj'][newEndNum].y + 72;

        setTimeout(()=>{
            egret.Tween.get( goldArr[0] ).to({
                x: newEndLocal_x ,
                y: newEndLocal_y ,
            }, 300 ).call(()=>{
                if( goldArr[0] && goldArr[0].parent ){
                    this.removeChild( goldArr[0] )
                }
            })
            setTimeout(()=>{
                egret.Tween.get( goldArr[1] ).to({
                    x: newEndLocal_x ,
                    y: newEndLocal_y ,
                }, 350 ).call(()=>{
                    if( goldArr[1] && goldArr[1].parent ){
                        this.removeChild( goldArr[1] )
                    }
                })
            },80)
            setTimeout(()=>{
                egret.Tween.get( goldArr[2] ).to({
                    x: newEndLocal_x ,
                    y: newEndLocal_y ,
                }, 400 ).call(()=>{
                    if( goldArr[2] && goldArr[2].parent ){
                        this.removeChild( goldArr[2] )
                    }
                })
            },130)            
            setTimeout(()=>{
                egret.Tween.get( goldArr[3] ).to({
                    x: newEndLocal_x ,
                    y: newEndLocal_y ,
                }, 500 ).call(()=>{
                    if( goldArr[3] && goldArr[3].parent ){
                        this.removeChild( goldArr[3] )
                    }
                })
            },200)
            setTimeout(()=>{
                egret.Tween.get( goldArr[4] ).to({
                    x: newEndLocal_x ,
                    y: newEndLocal_y ,
                }, 500 ).call(()=>{
                    if( goldArr[4] && goldArr[4].parent ){
                        this.removeChild( goldArr[4] )
                    }
                })
            },250)            
        },0)
    }

    /**
     *  创建 金币 并执行动画  ( 为收集金币做处理 )
     *  currArr 报错金币
     *  金币的场次id 比赛id 金币的额度， 金币的来源。。。。。好像很多
     */
    private tween_Coin( stage_x:any ,stage_y:any ,currArr:any , isMore ){

        if( isMore ){
            let newGold = [];
            for( let i=0;i<4;i++ ){
                let gold = new Gold();
                gold.anchorOffsetX = gold.width/2;
                gold.anchorOffsetY = gold.height/2;
                gold.x = window['store']['stage_anWidth'] + gold.width/2 ;
                gold.y = 980 - gold.height/2;
                currArr.push( gold );
                newGold.push( gold )
                this.addChild(gold);
            }

            setTimeout(()=>{
                egret.Tween.get( newGold[0] ).to( { x:stage_x,y:stage_y },200 );
                setTimeout(()=>{
                    egret.Tween.get( newGold[1] ).to( { x:stage_x + 6 ,y:stage_y + 6 },200 );
                },60);
                setTimeout(()=>{
                    egret.Tween.get( newGold[2] ).to( { x:stage_x + 6 ,y:stage_y - 6 },200 );
                },100);
                setTimeout(()=>{
                    egret.Tween.get( newGold[3] ).to( { x:stage_x - 6 ,y:stage_y - 6 },200 ).call(()=>{
                        newGold = [] ;
                    });
                },150)                                        
            },0)

        }else{
            let gold = new Gold();
            gold.anchorOffsetX = gold.width/2;
            gold.anchorOffsetY = gold.height/2;
            gold.x = window['store']['stage_anWidth'] + gold.width/2;
            gold.y = 980 - gold.height/2;
            currArr.push( gold )
            this.addChild(gold);
            egret.Tween.get( gold ).to( { x:stage_x,y:stage_y },200 )
        }

    }

    /**
     *  创建 他人 投注的金币
     *  地址 start_x  start_y  end_x end_y  arr 
     */
    private create_other_Coin( start_x:any , start_y:any , end_x:any , end_y:any ,currArr:any , moreCoin:Boolean){
        let goldArr = [] ;
        if( !moreCoin ){
            let gold = new Gold();
            gold.anchorOffsetX = gold.width/2;
            gold.anchorOffsetY = gold.height/2;
            gold.x = start_x ;
            gold.y = start_y ;
            currArr.push( gold )
            this.addChild(gold);
            egret.Tween.get( gold ).to( { x: end_x,y: end_y },800 ,egret.Ease.circInOut );
        }else{
            // more  飞金币
            for( let i=0;i<3; i++ ){
                let gold = new Gold();
                gold.anchorOffsetX = gold.width/2;
                gold.anchorOffsetY = gold.height/2;
                gold.x = start_x ;
                gold.y = start_y ;
                currArr.push( gold );
                goldArr.push( gold );
                this.addChild(gold);
            }
            setTimeout(()=>{
                egret.Tween.get( goldArr[0] ).to({
                    x: parseInt( end_x ) + 2 ,
                    y: parseInt( end_y ) + 3 ,
                }, 800,egret.Ease.circInOut )
                
                setTimeout(()=>{
                    egret.Tween.get( goldArr[1] ).to({
                        x: parseInt( end_x ) + 6 ,
                        y: parseInt( end_y ) + 8 ,
                    }, 800,egret.Ease.circInOut )

                },80)
                setTimeout(()=>{
                    egret.Tween.get( goldArr[2] ).to({
                        x: parseInt( end_x ) - 6 ,
                        y: parseInt( end_y ) - 8 ,
                    }, 800,egret.Ease.circInOut )
                },180 )
            },0)

        }
    }

    /**
     *  他人投注 金币 位置 实例收集  (更新总的金币)
     *  @param  uidLocal ? matchid selection
     *  上一步修改 他人用户金币额度 
     */
    private other_Coin( matchid:string , selection:string , uidLocal:string , bet_golds:string ){

        let $store = window['store'];
        let currFieldStr = '';
        let currFieldLocalStr = '';

        let newUser_x = null ;
        let newUser_y = null ;

        let newField_x = null ;
        let newField_y = null ;

        let $store_coinNum = $store['coin_Num'];  

        let moreCoin = false;   

        if( parseInt ( bet_golds ) > 10000 ){
            moreCoin = true ;  // 是否按等级投注更多金币
        }
        // 飞向  场地  位置
        if( $store['matFindField'][ matchid ] ){
            currFieldStr = $store['matFindField'][ matchid ] ;

        }else{
            console.error('not find matchid at field_ball_contain' );
        }

        if( !$store_coinNum[matchid] ){
            $store_coinNum[matchid] = {
                home_golds : null,
                my_golds_l : null,
                my_golds_r : null ,
                away_golds: null ,
            }
        }

        // 散入金币位置优化地方
        switch( currFieldStr ){
            case 'field1':
                // y>352 && y <650
                newField_y = Math.random() * 298 + 352 ;
                if( !$store['allCoinObj']['field1'] ){

                    $store['allCoinObj']['field1'] = {
                        coin_left:[],
                        coin_right:[],
                        coin_left_local: $store['coin_local']['field1_l'],
                        coin_right_local: $store['coin_local']['field1_r']
                    }

                }
            ;break;
            case 'field21': 
                // y>220 && y <395
                newField_y = Math.random() * 175 + 220;

                if( !$store['allCoinObj']['field21'] ){

                    $store['allCoinObj']['field21'] = {
                        coin_left:[],
                        coin_right:[],
                        coin_left_local: $store['coin_local']['field21_l'],
                        coin_right_local: $store['coin_local']['field21_r']
                    }

                }
            ;break;
            case 'field22':
                // y>594 && y <770
                newField_y = Math.random() * 176 + 594;
                if( !$store['allCoinObj']['field22'] ){

                    $store['allCoinObj']['field22'] = {
                        coin_left:[],
                        coin_right:[],
                        coin_left_local: $store['coin_local']['field22_l'],
                        coin_right_local: $store['coin_local']['field22_r']
                    }

                }
            ;break;

            case 'field41':
                //y>150 && y <260
                newField_y = Math.random() * 110 + 150;
                if( !$store['allCoinObj']['field41'] ){

                    $store['allCoinObj']['field41'] = {
                        coin_left:[],
                        coin_right:[],
                        coin_left_local: $store['coin_local']['field41_l'],
                        coin_right_local: $store['coin_local']['field41_r']
                    }

                }
            ;break;
            case 'field42':
                // y>350 && y <460
                newField_y = Math.random() * 110 + 350;
                if( !$store['allCoinObj']['field42'] ){

                    $store['allCoinObj']['field42'] = {
                        coin_left:[],
                        coin_right:[],
                        coin_left_local: $store['coin_local']['field42_l'],
                        coin_right_local: $store['coin_local']['field42_r']
                    }

                }
            
            ;break;
            case 'field43':
                // y>550 && y <660
                newField_y = Math.random() * 110 + 550;
                if( !$store['allCoinObj']['field43'] ){

                    $store['allCoinObj']['field43'] = {
                        coin_left:[],
                        coin_right:[],
                        coin_left_local: $store['coin_local']['field43_l'],
                        coin_right_local: $store['coin_local']['field43_r']
                    }


                }
               
            ;break;
            case 'field44':
                // y>750 && y <860
                // newField_y = Math.random() * 110 + 750;
                newField_y = Math.random() * 60 + 775;
                if( !$store['allCoinObj']['field44'] ){

                    $store['allCoinObj']['field44'] = {
                        coin_left:[],
                        coin_right:[],
                        coin_left_local: $store['coin_local']['field44_l'],
                        coin_right_local: $store['coin_local']['field44_r']
                    }

                }
            
            ;break;
        }

        // 坐标修改
        if( Number( uidLocal )  <= 4) {
            newUser_x = $store['userPositionObj'][uidLocal].x + 46;
        }else{
            newUser_x = $store['userPositionObj'][uidLocal].x + 584;
        }
        newUser_y =  $store['userPositionObj'][uidLocal].y + 72;

        // 更新金额
        if( selection ){
            if( selection === '1' ){
                // 150<x && x<350
                // newField_x = Math.random() * 200 + 150;
                newField_x = Math.random() * 100 + 200;
                this.create_other_Coin( newUser_x , newUser_y , newField_x , newField_y , $store['allCoinObj'][currFieldStr].coin_left , moreCoin )
                this[currFieldStr].addLeftAllCoin( window['formateGold']( $store_coinNum[matchid]['home_golds'] ) ); //  总的金额  
            }else if( selection === '2' ){
                // 410<x && x<600
                // newField_x = Math.random() * 200 + 410;
                newField_x = Math.random() * 100 + 460;
                this[currFieldStr].addRightAllCoin( window['formateGold']( $store_coinNum[matchid]['away_golds'] ) ); //  总的金额  
                this.create_other_Coin( newUser_x , newUser_y , newField_x , newField_y , $store['allCoinObj'][currFieldStr].coin_right , moreCoin )
            }
        }

    }

    /**
     *  查找 win
     *  @param matchid 比赛id  找到对应场地  winid 找 左右 
     *  @return  _l  left  _r  right   修改 winid  放上一步
     * 
     */
    private showWinLocation( matchid:string ,findStr:string ){
        let $store = window['store'] ;

        if( matchid && $store['matFindField'] && $store['matFindField'][matchid] ){
            if( findStr ==='_l' ){
               this[ $store['matFindField'][matchid] ].addwinIcon_l() ;
            }else if( findStr === '_r' ){
                this[ $store['matFindField'][matchid] ].addwinIcon_r() ;
            }
            return ;
        }else{
            // 没找到 赢的比赛
            console.warn( '没找到 赢的Icon' )
        }
    }

    /**
     *  清楚所有win 图标 & 投注的 数据 & 比分
     */
    private removeAllWinIcon(){
        if( this.field1  ){
            this.field1.removeWinIcon() ;
            this.field1.cleanAllCoinText();
            this.field1.writeScore('');
        }
        if( this.field21  ){
            this.field21.removeWinIcon() ;
            this.field21.cleanAllCoinText();
            this.field21.writeScore('');
        }
        if( this.field22  ){
            this.field22.removeWinIcon() ;
            this.field22.cleanAllCoinText();
            this.field22.writeScore('');
        }   
        if( this.field41 ){
            this.field41.removeWinIcon() ;
            this.field41.cleanAllCoinText();
            this.field41.writeScore('');
        }
        if( this.field42  ){
            this.field42.removeWinIcon() ;
            this.field42.cleanAllCoinText();
            this.field42.writeScore('');
        }
        if( this.field43  ){
            this.field43.removeWinIcon() ;
            this.field43.cleanAllCoinText();
            this.field43.writeScore('');
        }
        if(this.field44  ){
            this.field44.removeWinIcon() ;
            this.field44.cleanAllCoinText();
            this.field44.writeScore(''); 
        }                             
    }

    private courtWrap(){
        let wrap:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        wrap.width = 596;
        wrap.height = 963;
        return wrap;
    }
}
