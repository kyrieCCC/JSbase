async function sync() {
    setTimeout(() => {
        console.log('我是一个异步函数')
    }, 1000)
    console.log('我是同步函数')
}
sync()
console.log('我也是同步函数')
