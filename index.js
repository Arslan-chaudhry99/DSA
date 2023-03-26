
var twoSum = function (array, target) {
           for (let i = 0; i < array.length; i++) {
                      for (let j = 1; j < array.length; j++) {
                                 if (array[i] + array[j] === target) {
                                            return [i, j]
                                 }
                      }
           }
};

console.log(twoSum([2, 7, 11, 15], 17));