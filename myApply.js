//手撕apply
function ppp(arr) {
    console.log('arr is ', arr)
    console.log('this', this)   
}
Function.prototype.myApply = function (arg, arr) {
    var arg = arg || window,
        args = [],
        result = ''
    arg.fn = this
    if (Array.isArray(arr)) {
        args = arr
        result = arg.fn(args)
        delete arg.fn
        console.log('执行成功')
        return result
    }
    else if (arr === undefined) {
        delete arg.fn
        console.log('数组未定义')
        return this()
    }
    else {
        console.log('失败')
        return false
    }
}
// const testArr = [1, 2, 3]
// ppp()
ppp.myApply({ x: 10 }, [1, 2, 3])
