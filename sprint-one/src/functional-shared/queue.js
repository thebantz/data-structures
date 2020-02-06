var Queue = function() {
  var newQ = {};
  newQ.storage = {};
  newQ.smallestIndex = 0;
  newQ.largestIndex = 0;

  newQ.enqueue = queueMethods.enqueue;
  newQ.dequeue = queueMethods.dequeue;
  newQ.size = queueMethods.size;


  extend(newQ, queueMethods);

  return newQ;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.largestIndex] = value;
  this.largestIndex++;
};

queueMethods.dequeue = function() {
  var dq = this.storage[this.smallestIndex];
  delete this.storage[this.smallestIndex];
  this.smallestIndex++
  return dq;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

var queue = Queue();
