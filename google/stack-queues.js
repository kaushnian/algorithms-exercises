// Design a stack using two queues.

class Queue {
  constructor() {
    this.queue = [];
  }

  engueue(el) {
    this.queue.unshift(el);
  }

  degueue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    return this.queue.pop();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  getSize() {
    return this.queue.length;
  }

  getFront() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    console.log(this.queue.slice(-1)[0]);
    
    return this.queue.slice(-1)[0];
  }
}

class Stack {
  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();

    this.top = this.queue1;
    this.rest = this.queue2;
  }

  push(el) {
    if (this.top.isEmpty()) {
      this.top.engueue(el);
    } else {
      this.top.engueue(el);
      this.rest.engueue(this.top.degueue());
    }

    console.log(this.top, this.rest);
    
  }

  pop() {
    if (this.top.isEmpty()) {
      return 'Stack is empty';
    }

    const topEl = this.top.degueue();

    if (this.rest.getSize()) {
      while (this.rest.getSize() !== 1) {
        this.top.engueue(this.rest.degueue());
      }
  
      let temp = this.top;
      this.top = this.rest;
      this.rest = temp;
    }
    return topEl;
  }

  peek() {
    if (this.top.isEmpty()) {
      return 'Stack is empty';
    }

    return this.top.getFront();
  }

  isEmpty() {
    return !this.top.getSize();
  }
}

const stack = new Stack();

stack.push(0);
stack.push(1);
stack.push(2);

stack.pop();
stack.pop();

console.log('Peek: ' + stack.peek());
console.log('Top: ' + stack.pop());
