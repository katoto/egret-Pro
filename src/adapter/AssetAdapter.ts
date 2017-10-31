class AssetAdapter implements eui.IAssetAdapter{
    /**
     *  解析素材
     * @param source 待解析的新素材
     * @param compFunc 解析完成回调函数
     * @param thisObject callback 的this 引用
     * 
     */
    public getAsset( source:string, compFunc:Function,thisObject:any ):void{
        function onGetRes( data:any ):void{
            compFunc.call( thisObject ,data,source )
        }
        if(RES.hasRes( source )){
            let data = RES.getRes( source );
            if( data ){
                onGetRes( data );
            }else{
                RES.getResAsync( source ,onGetRes ,this );
            }
        }else{
            RES.getResByUrl( source,onGetRes,this,RES.ResourceItem.TYPE_IMAGE );
        }
    }
}