class Stack {

  constructor() {
    this.storage = {};
  }

  push(value) {
    this.storage[this.size()] = value;
  }

  pop() {
    var popped = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return popped;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}

var stack = new Stack();