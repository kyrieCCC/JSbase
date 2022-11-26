//冒泡排序
const test = [23, 6, 2, 5, 9, 4, 1, 15, 7];
const mySort = function (arr) {
    let flag = 1, temp = null
    for (let i = 0; i < arr.length; i++){
        flag = 0
        for (let j = 0; j < arr.length - i; j++){
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
                flag = 1
            }
        }
    }
    return arr       
}

//快速排序
const myQuickSort = function (arr) {
    if (arr.length <= 1) {
        return arr
    }
    const min = Math.floor(arr.length / 2)
    const minItem = arr.splice(min, 1)
    const left = [], rigth = []
    for (let i = 0; i < arr.length; i++){
        const current = arr[i]
        current < minItem ? left.push(current) : rigth.push(current)
    }
    return myQuickSort(left).concat(minItem, myQuickSort(rigth))
}
const res = myQuickSort(test)
console.log(res)