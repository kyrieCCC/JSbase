const task = new Promise((resolve) => {
    setTimeout(() => {
        resolve('hello world1')
    }, 2000)
})

task.then((msg) => {
    console.log(msg)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello world2')
        }, 2000)
    })
}).then((msg) => {
    console.log(msg)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello world3')
        }, 2000)
    })
}).then((msg) => console.log(msg))

const task2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('hello world')
    }, 2000)
})

task2.then((msg) => {
    console.log(msg)
    return task2
}).then((msg) => {
    console.log(msg)
    return task2
}).then((msg) => {
    console.log(msg)
}) 