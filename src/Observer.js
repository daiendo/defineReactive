import {def} from './utils'
import defineReactive from './defineReactive'
//将Object转换为每个层级的属性都是响应式的
export default class Observer{
    constructor(value){
        //将value的__ob__属性定义为实例（this）
        def(value,'__ob__',this,false);
        this.walk(value);
    }
    //遍历value属性，变为响应式
    walk(value){
        for(let k in value){
            defineReactive(value,k);
        }
    }
}