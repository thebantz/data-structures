var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values -- BUT object that has numeric keys is an array though!
  var storage = {}; //--> treat as memory
    //  var storage = [];
    //how do we automatically assign the keys to be numeric in ascending order?


  // Implement the methods below
  someInstance.push = function(value) {
    // storage.value = value;
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
//     var popped = storage[someInstance.size() - 1];
    var popped = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return popped;
//     return popped;
//     delete popped; // how do you delete a property by using the obj's value?
  };

  someInstance.size = function() {
    // var keysArr = Object.keys(storage);
    // keysArr.length;
    // return storage.length;
//     return storage.length; // --> works with if var storage was an array;
    return Object.keys(storage).length;
  };

  return someInstance;
};

var stack = Stack();
// console.log(stack.size());
// console.log(stack.push('a'));

// stack.push('a');
// stack.size();
// stack.pop();
// stack.size();

// stack.push('b');
// stack.size();