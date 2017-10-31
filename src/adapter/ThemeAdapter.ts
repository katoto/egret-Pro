class ThemeAdapter implements eui.IThemeAdapter{
    /**
     *  解析主题
     *  @param url 待解析的主题url
     *  @param compFunc 解析完成回调函数， eg compFunc( e:egret.Event ):void;
     *  @param errorFunc 解析失败回调函数 ， eg errorFunc()：void;
     *  @param thisObject 回调的this 引用
     */
    public getTheme( url:string, compFunc:Function,errorFunc:Function ,thisObject:any):void{
        function onGetRes(e:string):void{
            compFunc.call(thisObject,e);
        }
        function onError(e:RES.ResourceEvent):void{
            if(e.resItem.url == url){
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,onError,null);
                errorFunc.call(thisObject);
            }
        }
        RES.addEventListener( RES.ResourceEvent.ITEM_LOAD_ERROR,onError,null );
        RES.getResByUrl( url ,onGetRes ,this,RES.ResourceItem.TYPE_TEXT );
    }
}