/* 

First In First Out (FIFO) Principle
First element insterted in queue is first element to be removed
element entered from tail and removed from head
queue is abstract data type it is defined by its behaviour rather than being a mathematical model

Supports 2 main operations:
1. Enqueue
2. Dequeue

Uses: Printer, Callback queue in Javascript runtime, CPU task scheduling

*/

class Queue {
  constructor() {
    this.item = [];
  }
  enqueue(element) {
    this.item.push(element);
  }
  dequeue() {
    return this.item.shift();
  }
  isEmpty() {
    return this.item.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.item[0];
    }
    return null;
  }
  print() {
    console.log(this.item.toString());
  }
}

const queue = new Queue();

queue.enqueue(67);
queue.enqueue(57);
queue.enqueue(37);
queue.print()
