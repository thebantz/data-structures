var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  // newStack.count = 0;

  newStack.push = stackMethods.push;
  newStack.pop = stackMethods.pop;
  newStack.size = stackMethods.size;
  
  extend(newStack, stackMethods);

  return newStack;
};

var extend = function (obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
}

//either or below for Stack.stackMethods = {} or just var stackMethods
  // var stackMethods = {};
  // Stack.stackMethods = {};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.size()] = value;
};

stackMethods.pop = function() {
  var popped = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return popped;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

var stack = Stack();