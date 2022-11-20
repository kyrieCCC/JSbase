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