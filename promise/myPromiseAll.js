//手撕promiseAll代码
function myPromiseAll(promiseTask) {
    const result = []
    return new Promise((resolve, reject) => {
        promiseTask.forEach((promise) => {
            promise.then((res) => {
                result.push(res)
                if (result.length === promiseTask.length) {
                    resolve(result)
                }
            }).catch(reject)
        })
    })
}