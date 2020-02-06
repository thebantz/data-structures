var Queue = function() {
  var someInstance = {};

  var smallest = 0; // --> start of q
  var largest = 0; // --> end of q

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[largest] = value;
    largest++;

    // maybe create a counter here?? and increments/decrements and 
    // assigns a fixed key for every NQ'd element? 

      // and then for the DQ, retrieve Math.min() of the objects.key array
  };

  someInstance.dequeue = function() {
    // identify min of size to dequeue the first property in the storage obj
    
    // dequeue()
    // dequeue()

    // how about create a new every time something gets DQ'd ? ? ? 
    // rly get the min in choosing the object.keys index
    // var smallestIndex = 0;
    // // if 0 as key is no longer available/been DQ'd, we have to pick the smallest index
    // var keysArr = Object.keys(storage);

    // for ()

    //og
    if (largest > smallest) {
      var dq = storage[smallest];
      delete storage[smallest]; //<-- change 0 index into smallestIndex
      smallest++;
      return dq;
    }


    // how about create a new every time something gets DQ'd ? ? ? 
    // rly get the min in choosing the object.keys index
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

var queue = Queue();

// queue.size();
// queue.enqueue('a');

// Last current error --> is that queue.enqueue('c') seems to float on top of the memory instead of the bottom