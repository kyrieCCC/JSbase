// function huiwen(str) {
//     const arr = []
//     const reg1 = /[A-Z]/, reg2 = /[a-z]/
//     for (let i = 0; i < str.length; i++){
//         if (str[i] >= 0 && str[i] <= 9) {
//             arr.push(str[i])
//         }
//         if (reg1.test(str[i])) {
//             arr.push(str[i])
//         }
//         if (reg2.test(str[i])) {
//             arr.push(str[i])
//         }
//     }
//     let i = 0, j = arr.length - 1
//     while (i < j) {
//         if (arr[i] !== arr[j]) return false
//         i++
//         j--
//     }
//     return true
// }
// const str1 = 'Awl.c$43.'
// const str2 = 'Aw$12.21w&A'
// console.log(huiwen(str1))

function minTwoPart(nums) {
    const arr = []
    nums = nums.toString()
    for (let i = 0; i < nums.length; i++){
        arr.push(nums[i])
    }
    let res = 0, res2 = 0, min = 100, res3 = 0
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            res = 0, res2 = 0
            res = res + parseInt(arr[i]) + parseInt(arr[j])
            for (let k = 0; k < arr.length; k++){
                if (k !== i && k !== j) {
                    res2 += parseInt(arr[k])
                }
            }
            res < res2 ? res3 = res2 - res : res3 = res - res2
            if (res === res3) return 0
            min = Math.min(res3, min)
        }
    }
    return min
}
const nums = 12345
console.log(minTwoPart(nums))