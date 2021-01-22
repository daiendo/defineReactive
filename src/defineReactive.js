import observe from './observe'
//利用闭包实现响应式,defineReactive提供闭包环境，当调用Object.defineProperty()时，会借助JavaScript的访问链，形成闭包。
export default function defineReactive(data,key,val){
    if (arguments.length ==2) {
        val = data[key];
    }
    let childObj = observe(val);
    Object.defineProperty(data,key,{
        enumerable:true,//可枚举
        configurable:true,//可配置
        get(){
            return val;
        },
        set(newValue){
            console.log(key+'属性被设置')
            if(val===newValue){
                console.log(1)
                return;
            }
            val = newValue;
            childObj = observe(newValue);
        }
    })
}