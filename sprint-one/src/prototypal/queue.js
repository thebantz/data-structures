var Queue = function() {
  var newQ = Object.create(queueMethods);

  newQ.storage = {};

  // local variable counters for keys

  // var smallestIndex = 0; // <-- considering making dis as a .prop for newQInstance
  // var largestIndex = 0; // <-- ""
  // newQ.smallestIndex = parseInt('0');
  // newQ.largestIndex = parseInt('0');
  newQ.smallestIndex = 0;
  newQ.largestIndex = 0;
  
  return newQ;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[(this.largestIndex)] = value;
  this.largestIndex++;
};

queueMethods.dequeue = function() {
  // var dq = this.storage[this.smallestIndex];
  var dq = this.storage[this.smallestIndex];
  delete this.storage[this.smallestIndex];
  this.smallestIndex++;
  return dq;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

var queue = Queue();