var Queue = function() {
  var newQ = {};
  newQ.storage = {};
  newQ.smallestIndex = 0;
  newQ.largestIndex = 0;
  extend(newQ, Queue.queueMethods);

  return newQ;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

Queue.queueMethods = {};

Queue.queueMethods.enqueue = function(value) {
  this.storage[this.largestIndex] = value;
  this.largestIndex++;
};

Queue.queueMethods.dequeue = function() {
  var dq = this.storage[this.smallestIndex];
  delete this.storage[this.smallestIndex];
  this.smallestIndex++
  return dq;
};

Queue.queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

var queue = Queue();
