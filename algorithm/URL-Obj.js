const url = 'https://www.baidu.com/s?wd=vue&rsv_spt=1&rsv_iqid=0xa5d93f9e0009e6e3&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=4&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_btype=i&prefixsug=vue&rsp=8&inputT=706&rsv_sug4=7723'
function fn() {
    const res = {}
    const arr = url.split('?')[1].split('&')
    for (item of arr) {
        res[item.split('=')[0]] = item.split('=')[1]
    }
    return res
}
const result = fn()
console.log(result)
