//原型 构造函数 实例对象
function protoFun() {
    const name = 'wlc'
}
const constructorFun = new protoFun() //创建一个  实例对象
console.log(constructorFun.__proto__ === protoFun.prototype)
//true  实例对象的__proto__属性与构造函数的prototype属性一致

console.log(protoFun.prototype.constructor === protoFun)
//true 构造函数的原型的构造函数指向自己

console.log(protoFun.prototype)