var Queue = function() {
  this.storage = {};
  this.smallestIndex = 0;
  this.largestIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.largestIndex] = value;
  this.largestIndex++;
};

Queue.prototype.dequeue = function(value) {
  var dq = this.storage[this.smallestIndex];
  delete this.storage[this.smallestIndex];
  this.smallestIndex++;
  return dq;
};

Queue.prototype.size = function(value) {
  return Object.keys(this.storage).length;
};



var queue = new Queue();


