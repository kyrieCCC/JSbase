const fn = []
var i
for (i = 0; i < 5; i++){
    const j = function () {
        console.log(i)
    }
    fn.push(j)
}
fn[0]()

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
fn1[1]()