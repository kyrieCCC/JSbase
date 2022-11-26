//手撕call代码
function ppp(a, b) {
    console.log('a', a)
    console.log('b', b)
    console.log('this', this)   
}
// function func() {
//     console.log(arguments)
// }
Object.prototype.myCall = function (...arg) {
    const obj = arg.slice(0, 1)
    const arr = arg.slice(1)
    const self = this
    obj.fn = self
    const res = obj.fn(...arr)
    delete obj.fn
    return res
}
// ppp()
const result = ppp.myCall({ x: 10}, 20, 30)
console.log(result)