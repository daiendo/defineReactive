import observe from './observe'
let obj = {
    a: {
        n: {
            m: 123
        }
    },
    b: 10
}
observe(obj)
obj.b = 10;
obj.a.n.m = 10
console.log(obj.b)
