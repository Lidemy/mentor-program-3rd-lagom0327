// ``` js
// 請你實作出`Stack`跟`Queue`兩個 Function（或是 Class），讓以下程式碼可以順利執行：
// （禁止使用內建函式`push`與`pop`）
// var stack = new Stack()
// stack.push(10)
// stack.push(5)
// console.log(stack.pop()) // 5
// console.log(stack.pop()) // 10

// var queue = new Queue()
// queue.push(1)
// queue.push(2)
// console.log(queue.pop()) // 1
// console.log(queue.pop()) // 2
// ```
class Stack {
  constructor() {
    this.arr = [];
  }

  push(str) {
    this.arr[this.arr.length] = str;
  }

  pop() {
    const temp = this.arr[this.arr.length - 1];
    this.arr = this.arr.splice(0, this.arr.length - 1);
    return temp;
  }

  getResult() {
    return this.arr;
  }
}

class Queue {
  constructor() {
    this.arr = [];
  }

  push(str) {
    this.arr[this.arr.length] = str;
  }

  pop() {
    const temp = this.arr[0];
    this.arr = this.arr.splice(1, this.arr.length);
    return temp;
  }

  getResult() {
    return this.arr;
  }
}
const stack = new Stack();

stack.push(10);
stack.push(5);
console.log(stack.pop());// 5
console.log(stack.pop());// 10

const queue = new Queue();
queue.push(1);
queue.push(2);
console.log(queue.pop()); // 1
console.log(queue.pop()); // 2
