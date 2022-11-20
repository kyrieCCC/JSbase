//测试object的各种属性
const myObj = {
    name: 'wlc',
    age: '18',
    skill: 'basketball',
    height: '175'
}


const { name: myname } = myObj
console.log(myname)


//增加
myObj.weight = '120kg'
myObj['university'] = 'ujs'

//删除
// delete myObj.skill

//查询
console.log(myObj.age)

//修改
myObj.university = 'hnu'
console.log(myObj)


//深拷贝的两种方法
//1.手写
const myObj2 = {
    name: myObj.name,
    age: myObj.age,
    height: myObj.height
}


//JSON
const myObj3 = JSON.parse(JSON.stringify(myObj))
console.log(myObj3)
console.log(myObj2)