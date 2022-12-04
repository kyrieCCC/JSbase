async function sync(msg) {
    setTimeout(() => {
        console.log('msg是', msg)
    }, 1000)
    console.log('我是同步函数')
}
const a = await sync()
console.log('我也是同步函数')
