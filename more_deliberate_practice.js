// Write a function that accepts an array of numbers and returns an array with each number increased by 7.

function addArray(ary) {
  var increasedAry = [];
  ary.forEach(function (num) {
    increasedAry.push(num + 7);
  });
  return increasedAry;
}

console.log(addArray([4, 5, 9, 2, 0]));


// Write a function that accepts an array of strings and returns an array with each string's length.

function strLength(arry) {
  var lengths = [];
  arry.forEach(function (str) {
    lengths.push(str.length);
  });
  return lengths;
}

console.log(strLength(["hello", "yay", "coding", "fun"]));

// Write a function that accepts an array of numbers and returns a new array with only the even numbers.

function evenNumbers(nums) {
  var evens = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evens.push(nums[i]);
    }
  }
  return evens;
}

console.log(evenNumbers([1, 5, 2, 8, 10, 3]));


// Write a function that accepts an array of numbers and returns the smallest number.

function smallestNum(values) {
  var smallest = values[0];
  values.forEach(function (value) {
    if (value < smallest) {
      smallest = value;
    }
  });
  return smallest;
}

console.log(smallestNum([7, 3, 0, -9, 15, 8]));

// nested loops practice

// Write a function that accepts an array of numbers, and returns an array of the products of every pair of numbers from the array.

function productArry(arrynums) {
  var products = [];
  for (var i = 0; i < arrynums.length - 1; i++) {
    products.push(arrynums[i] * arrynums[i + 1]);
  }
  return products;
}

console.log(productArry([3, 4, 5, 6]));

// Write a function that accepts an array of strings and returns the total length of all the strings.

function strLength(strings) {
  var total = 0;
  strings.forEach(function (str) {
    total += str.length;
  });
  return total;
}

console.log(strLength(["hi", "howdy", "hello"]));