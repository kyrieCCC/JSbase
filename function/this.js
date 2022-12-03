const obj = {
    name: 'wlc',
    age: '18',
    getName() {
        console.log(this.name)
    },
    getAge() {
        setTimeout(() => {
            console.log(this.age)
        },1000)
    }
}
// obj.getAge()

function test(a, b) {
    console.log('a', a)
    console.log('b', b)
    console.log('this', this)
}
const obj2 = {
    name: 'ph'
}

Function.prototype.myCall = function (...arg) {
    const obj = arg.slice(0, 1)
    const arr = arg.slice(1)
    const self = this
    obj.fn = self
    const res = obj.fn(...arr)
    delete obj.fn
    return res
}

Function.prototype.myApply = function(obj, arg){
    var arr = []
    let res = ''
    obj.fn = this
    if(Array.isArray(arg)){
      arr = arg
      res = obj.fn(...arr)
      delete obj.fn
      return res
    }
    else if(arg === undefined){
      delete obj.fn
      return this()
    }
    else{
      console.log('ERROR!')
      return false
    }
}
  


// test(520, 43)
const resFun = test.bind(obj2, 10, 20)
resFun()


