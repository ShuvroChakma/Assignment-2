 //problem 1
 function calculateSum(x, y){

    return x+y;
 }
 console.log(calculateSum(2, 3));

 function isEven(number) {
   return number % 2 === 0;
}
 console.log(isEven(5));

 function findMax(numbers) {
   return Math.max(...numbers);
}
 console.log(findMax([1,2,3,4,5,34]));

 function reverseString(str) {
   return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

 function filterOddNumbers(numbers) {
   return numbers.filter(num => num % 2 !== 0);
}
console.log(filterOddNumbers([1, 2, 3, 4, 5]));

function sumArray(numbers) {
   return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));

function sortArray(numbers) {
   return [...numbers].sort((a, b) => a - b);
}
console.log(sortArray([5, 3, 2, 1, 4]));

function capitalizeFirstLetter(str) {
   if (str.length === 0) return str;
   return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("hello"));