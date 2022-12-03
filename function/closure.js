const fn = []
var i
for (i = 0; i < 5; i++){
    const j = function () {
        console.log(i)
    }
    fn.push(j)
}
// fn[0]()
Object.prototype.myCall = function (...arg) {
    const obj = arg.slice(0, 1)
    const arr = arg.slice(1)
    const self = this
    obj.fn = self
    const res = obj.fn(...arr)
    delete obj.fn
    return res
}
const fn1 = []
for (i = 0; i < 5; i++){
    const j = (function (num) {
        function main() {
            console.log(num)
        }
        return main
    })(i)
    fn1.push(j)
}
// fn1[1]()


const out = 'irving'
function print() {
    console.log(out)
}
print()

function foo(print) {
    console.log('我们要引用print函数形成闭包')
    print()
}
foo(print)