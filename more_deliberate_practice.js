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

