//手撕flat方法
function myFlat(arr) {
    while (arr.some(item=> Array.isArray(item))) {
      arr = [].concat(...arr)
    }
    return arr
}
function myFlat2(arr) {
  const stack = arr;
  const res = [];
  while (stack.length) {
    // 使用 pop 从 stack 中取出并移除值
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next); //将不是一维数组的元素放到stack里面再次执行
    } else {
      res.push(next);
    }
  }
  // 反转恢复原数组的顺序
  return res.reverse();
}
const arr = [1, [2], [[3]], [[[4]]], 5]
console.log(myFlat3(arr));

function myFlat3(arr) {
  const stack = arr
  const res = []
  while (stack.length) {
    const item = stack.pop()
    if (Array.isArray(item)) {
      stack.push(...item)
    }
    else {
      res.push(item)
    }
  }
  return res.reverse()
}