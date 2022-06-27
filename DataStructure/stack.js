/* 
Browser History Tracking
Undo operation when typing
Expression Conversion
Call stack in JavaScript Runtime
Operation : 
* Push():
* Pop(): 
* peek():
* isEmpty():
* size():
* print():
*/

class Stack {
  constructor() {
    this.item = [];
  }

  push(element) {
    return this.item.push(element);
  }

  pop() {
    return this.item.pop();
  }

  peek() {
    return this.item[this.item.length - 1];
  }

  isEmpty() {
    return this.item.length === 0;
  }

  size() {
    return this.item.length;
  }

  print() {
    console.log(this.item.toString());
  }
}

const stack = new Stack();

stack.print();
stack.push(50);
stack.push(150);
stack.push(110);
stack.print();
console.log(stack.size());
console.log(stack.pop());
console.log(stack.peek());
