import observe from './observe'
let obj = {
    a: {
        n: {
            m: 123
        }
    },
    b: [10,10,11,2,3]
}
observe(obj)
// obj.b = 10;
// obj.a.n.m = 10
// console.log(obj.b)
//console.log(obj)
//obj.b.push(1,23)
//console.log(obj.b)
obj.b.splice(2,1,[99,88])
console.log(obj.b)



