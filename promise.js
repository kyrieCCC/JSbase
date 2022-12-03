const p = new Promise((resolve, reject) => {
    resolve('ph')
})

p.then((msg) => {
    console.log(msg)
})
p.then((msg) => {
    console.log(msg)
})
p.then((msg) => {
    console.log(msg)
})

// p.catch((msg) => {
//     console.log(msg)
// })

p.finally(() => {
    console.log('执行完成')
})

function request(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url.includes('wlc')) {
                resolve('success')
            }
            else {
                reject('ERROR!')
            }
        }, 1000)
    })
}
//原来的请求，构成了promise的回调地狱
// request('wlcph.com').then(res => {
//     request(`phwlc.org ${res}`).then(res => {
//         request(`wlcph.cn ${res}`).then(res => {
//         console.log(res)
//       })
//     })   
//   })

async function getData() {
    const res1 = await request('wlcph.com')
    const res2 = await request(`phwlc.org ${res1}`)
    const res3 = await request(`wlcph.cn ${res2}`)
                
    console.log(res3)
}
getData()