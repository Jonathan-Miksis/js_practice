
// # 1. Write a while loop to print the numbers 1 through 10.

var number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}

// # 2. Write a while loop that prints the word "hello" 5 times.

var helloCount = 1;
while (helloCount <= 5) {
  console.log("hello");
  helloCount++;
}

// # 3. Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

// while (true) {
//   var input = window.prompt("Enter a word: ");
//   if (input === "stop") {
//     break;
//   }
// }
// # 4. Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

var numbersByFive = 0
while (numbersByFive <= 100) {
  console.log(numbersByFive);
  numbersByFive = numbersByFive + 5;
}


// # 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

var words = ["hello", "hi", "howdy"];
words.push("yay");
words.push("woo");
console.log(words);

