const a = 'ph'
function test() {
    const b = 'zy'
    function print() {
        console.log(a, b)
    }
    print()
}
test()
function inner() {
    {
        var c = 'zcr'
        let d = 'ozz'
        const e = 'lh'
    }
    console.log(c)
    // console.log(d)
    // console.log(e)
}
inner()
// console.log(c)
// console.log(d)
// console.log(e)

//作用域链
function areaLine() {
    const token = 'asdfghjkl'
    function areaLine2() {
        const cookie = 'qwertyuiop'
        function areaLine3() {
            const session = 'zxcvbnm,./'
            console.log(token)
        }
        areaLine3()
    }
    areaLine2()
}
areaLine()
