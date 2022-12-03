//冒泡排序
const test = [23, 6, 2, 5, 9, 4, 1, 15, 7];
const mySort = function (arr) {
    let flag = 1, temp = 0
    for (let i = 0; i < arr.length; i++){
        flag = 0
        for (let j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
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
    const midindex = Math.floor(arr.length / 2)
    const midItem = arr.splice(midindex, 1)
    const left = [], right = []
    for (let i = 0; i < arr.length; i++){
        arr[i] < midItem ? left.push(arr[i]) : right.push(arr[i])
    }
    return myQuickSort(left).concat(midItem, myQuickSort(right))
}
const res = myQuickSort(test)
console.log(res)