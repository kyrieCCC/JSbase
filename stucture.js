// 栈
const Stack = {
  arr: [],
  size() {
    return this.arr.length;
  },
  push(item) {
    this.arr.push(item);
  },
  pop() {
    return this.arr.pop();
  },
};

Stack.push(1);
Stack.push(2);
Stack.push(3);
Stack.push(4);
Stack.push(5);
console.log(Stack.arr, Stack.size());
Stack.pop();
console.log("去掉了最后一个元素", Stack.arr);
console.log("---------------------这是栈--------------------");

//队列
const Queue = {
  //这是从左到右边
  arr: [],
  size() {
    return this.arr.length;
  },
  add(item) {
    this.arr.unshift(item);
  },
  remove() {
    return this.arr.pop();
  },
};

Queue.add(5);
Queue.add(4);
Queue.add(3);
Queue.add(2);
Queue.add(1);
console.log(Queue.arr);
Queue.remove();
console.log("去掉了一个元素", Queue.arr);
console.log("---------------------这是队列--------------------");

const Queue1 = {
  //这是从右边到左边
  arr: [],
  size() {
    return Queue1.arr.length;
  },
  add(item) {
    Queue1.arr.push(item);
  },
  remove() {
    return Queue1.arr.shift();
  },
  getvalue() {
    return this.arr;
  },
};

Queue1.add(5);
Queue1.add(4);
Queue1.add(3);
Queue1.add(2);
Queue1.add(1);
console.log(Queue1.getvalue());
Queue1.remove();
console.log("去掉了左边一个元素", Queue1.arr);
console.log("---------------------这是队列1--------------------");

const Queue2 = function () {
  const arr = [];
  this.size = function () {
    return arr.length;
  };
  this.add = function (item) {
    arr.push(item);
  };
  this.remove = function () {
    return arr.shift();
  };
  this.getValue = function () {
    return arr;
  };
};
const queue8 = new Queue2();

queue8.add(1);
queue8.add(2);
queue8.add(3);
console.log(queue8.arr);
console.log(queue8.getValue());
queue8.remove();
console.log("去掉了左边第一个元素", queue8.getValue());
console.log("---------------------这是队列2--------------------");
