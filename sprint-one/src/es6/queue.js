class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.smallestIndex = 0;
    this.largestIndex = 0;
  }

  enqueue(value) {
    this.storage[this.largestIndex] = value;
    this.largestIndex++;
  }

  dequeue() {
    var dq = this.storage[this.smallestIndex];
    delete this.storage[this.smallestIndex];
    this.smallestIndex++;
    return dq;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}

var stack = new stack();
