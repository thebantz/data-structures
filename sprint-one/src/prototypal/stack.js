var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);

  newStack.storage = {};

  return newStack;
};


var stackMethods = {};


stackMethods.push = function(value) {
  // create a new key on my storage object using size
  // assign value as the value of this key
  // before: storage[someInstance.size()] = value;
  this.storage[this.size()] = value;
};


stackMethods.pop = function() {
  // if (stackMethods.size() >= 0) {
  //   var popped = storage[stackMethods.size() - 1];
  //   delete storage[stackMethods.size() - 1]; // <--- something's wrong here
  //   return popped;
  // } else { // <-- added for "reports a size of 0 after removing more items than were added"
  //   return stackMethods.size() === 0; 
  // }

  var popped = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return popped;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
  /*
  return Object.keys( undefined ).length)
  return [0].length
  return 1

  */
};

var stack = Stack();

// stack.size();
// stack.push('a');
// stack.push('b');
// stack.pop();
// stack.size();