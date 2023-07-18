let arrayFromExercise = ["a", 10, "b", "hello", 122, 15];

function findNumbersLettersMax(arr) {
  let letters = [];
  let numbers = [];

  for (let i = 0; i < arr.length; i++) {
    let e = arr[i];
    if (typeof e === "string") {
      letters.push(e);
    } else if (typeof e === "number") {
      numbers.push(e);
    }
  }

  let largestInNumbers = Math.max(...numbers);

  return { letters, numbers, largestNumber: largestInNumbers };
}

let { letters, numbers, largestNumber } = findNumbersLettersMax(arrayFromExercise);

console.log("letters:", letters);
console.log("numbers:", numbers);
console.log("Largest number:", largestNumber);
