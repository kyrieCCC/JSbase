//手撕bind函数

const ppp = function(a, b) {
    console.log('this', this)
    console.log(a, b)
}

Function.prototype.myBind = function (...arg) {
    const obj = arg.slice(0, 1)
    const arr = arg.slice(1)
    const self = this
    obj.fn = self
    return function () {
        obj.fn(...arr)
        delete obj.fn
    }
}

const res = ppp.myBind({ x: 10 }, 520, 43)
res()
