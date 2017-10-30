/**
 *  洗牌算法，取8个随机数组
 *  @param len 随机数组长度
 */
function randomArray( len ){
    var i,index,temp,arr = [len];
    len = typeof( len ) === 'string' ? 8 :len;
    for(i=1;i<=len;i++ ){
        arr[i-1] = i;
    }
    for( i = 1; i<=len ; i++ ){
        index = parseInt( Math.random() * ( len - i ))+i;
        if( index != i ){
            temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
    return arr;
}