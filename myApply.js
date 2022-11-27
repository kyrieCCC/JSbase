//手撕apply
function ppp(arr, p, k, l) {
  console.log("arr is ", arr, p, k, l);
  console.log("this", this);
}
Function.prototype.myApply = function (arg, arr) {
  var arg = arg || window,
    args = [],
    result = "";
  arg.fn = this;
  if (Array.isArray(arr)) {
    args = arr;
    result = arg.fn(args);
    delete arg.fn;
    console.log("执行成功");
    return result;
  } else if (arr === undefined) {
    delete arg.fn;
    console.log("数组未定义");
    return this();
  } else {
    console.log("失败");
    return false;
  }
};
// const testArr = [1, 2, 3]
// ppp()
ppp.myApply({ x: 10 }, [1, 2, 3]);

Function.prototype.apply2222 = function(obj, arg) {
  var arr = [];
  obj.fn = this;
  if (Array.isArray(arg)) {
    arr = arg;
    const res = obj.fn(...arr);
    delete obj.fn;
    return res;
  }
}
ppp.apply2222({ x: 520 }, [1, 2, 3, 4]);

