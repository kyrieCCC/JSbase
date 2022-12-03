//回调函数test
const callback = (msg) => { console.log(msg) }
const param = {
    callback
}
const msgg = 'wlc'
function handle(param, msgg) {
    param.callback(msgg)
}
handle(param, msgg)


const arr = [1, 2, 3, 4, 5, 6]
arr.forEach((item) => {
    console.log(item)
})

const obj = {
    url: 'www.baidu.com',
    data: '',
    header: {},
    timeout: 1000,
    success() {
        console.log('success')
    },
    fail() {
        console.log('faliure')
    }
}
// wx.request(obj)