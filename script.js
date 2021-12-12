// function simpleMultiplication(number) {
//   let result = 0;
//   if (number % 2 === 0) {
//   result += number * 8
//   } else {
//   result += number * 9
//   }
  
  
  
//   return result
//   }
// //   simpleMultiplication(2)
// let result = 0;

// result = laLigaGoals + copaDelReyGoals + championsLeagueGoals

// if (laLigaGoals + copaDelReyGoals + championsLeagueGoals === undefined) {
// result = 0;
// }

// return result
// function isDivisible(n, x, y) {
//   let result = true;
  
//   if (Number.isInteger(n / x) && Number.isInteger(n / y)) {
//   result = true;
//   } else {
//   result = false
//   }
  
  
  
  
//   return result
//   }
//   isDivisible(3, 3, 4)
// function doubleInteger(i) {
//   i = i * 2
  
  
//     return i;
//   }
//   doubleInteger(3)
// // function doubleInteger(a, b) {
// //   let result = 0;
  
// //   result += a * b
  
  
  
  
// //   return result
// //   }
// //   doubleInteger(3, 4)
// function makeNegative(num) {
//   let result = 0;
  
//   if (num > 0) {
//   result = -num
//   } else {
//   result = num
//   }
  
  
  
//   return result
//   }
// //   makeNegative(-5)
// function addFive(num) {
//   var total = num + 5
//   return total
// }
// function move (position, roll) {
//   let result = 0;
  
//   result = position + (roll * 2)
  
  
  
//   return result;
//   }
//   move (2, 5)
// function even_or_odd(number) {
//   let result = '';
  
//   if (number % 2 == 0) {
//   result = 'Even';
//   } else {
//   result = 'Odd'
//   }
  
  
  
//   return result;
//   }
//   even_or_odd(21)
// function opposite(number) {
//   let result = -number;
  
  
//   return result;
//   }
// //   opposite(-3)
// function lovefunc(flower1, flower2){
//   let result;
  
//   if (flower1 % 2 === 0 && flower2 % 2 !== 0 ) {
//   result = true;
//   } else if (flower2 % 2 === 0 && flower1 % 2 !== 0 ) {
//   result = true;
//   } else {
//   result = false;
//   }
  
  
  
//   return result;
//   }
//   lovefunc(3, 3)
// function litres(time) {
//   let result; 
  
//   let count = time * 0.5;
  
//   result = Math.floor(count)
  
  
//   return result;
//   }
//   litres(11.8)
// function rentalCarCost(d) {
//   let result = 0;
//   let price = 40;
  
//   if (d < 3) {
//   result = d * price;
//   } else if ( d >= 3 && d < 7) {
//   result = (d * price) - 20;
//   } else if ( d >= 7) {
//   result = (d * price) - 50;
//   }
  
  
  
  
//   return result;
//   }
// //   rentalCarCost(7)
// function square(n) {
//   let result = n ** 2
  
  
//   return result;
//   }
//   square(3)
// function numberToString(num) {
//   let result = num.toString()
  
  
//   return result
//   }
//   numberToString(3)
// function between(a, b) {
//   let result = [];
  
//   let i = a;
//   while (i <= b) {
//   result.push(i);
//   i++
//   }
  
  
  
//   return result;
//   }
//   between(-1, 5)
// function peopleWithAgeDrink(old) {
//   let result = '';
//   if(old < 14) {
//   result = 'drink toddy'
//   } else if(old < 18) {
//   result = 'drink coke'
//   } else if(old < 21) {
//   result = 'drink beer'
//   } else if(old >= 21) {
//   result = 'drink whisky'
//   } 
  
  
  
//   return result;
//   };
// //   peopleWithAgeDrink(13)
// function isDivideBy(number, a, b) {
//   let result = true;
  
//   if (number % a === 0 && number % b === 0) {
//   result = true;
//   } else {
//   result = false;
//   }
  
  
  
  
  
//   return result;
//   }
// //   isDivideBy(45, 5, 9)
// function hoopCount (n) {
//   let result = '';
  
//   if (n >= 10) {
//   result = 'Great, now move on to tricks';
//   } else {
//   result = 'Keep at it until you get it';
//   }
  
  
  
// //   return result; 
// //   }
// //   hoopCount(10)
// function findDifference(a, b) {
//   let result = 0;
//   let first = 1;
//   let second = 1;
  
//   for (let i = 0; i < a.length; i++) {
//   first *= a[i]
//   }
  
//   for (let i = 0; i < b.length; i++) {
//   second *= b[i]
//   }
  
//   result = Math.max(first,second) - Math.min(first,second)
  
  
  
  
  
//   return result;
//   }
//   findDifference([3, 2, 5], [1, 4, 4])
// function howMuchILoveYou(nbPetals) {
//   let result = '';
  
//   if (nbPetals === 1 || nbPetals === 7) {
//   result = 'I love you'
//   } else if (nbPetals === 2) {
//   result = 'a little';
//   } else if (nbPetals === 3) {
//   result = 'a lot';
//   } else if (nbPetals === 4) {
//   result = 'passionately';
//   } else if (nbPetals === 5) {
//   result = 'madly';
//   } else if (nbPetals === 6) {
//   result = 'not at all';
//   } else if (nbPetals >= 8) {
//   result = '';
//   }
  
  
  
//   return result;
//   }
//   howMuchILoveYou(460)
// function find_average(array) {
//   let sum = 0;
// let count = 0;
// let result;


// for (let i = 0; i < array.length; i++) {
//       sum += array[i]
//       count++
// }


// if (array.length == 0) {
// result = 0;
// } else if (array.length !== 0) {
// result = sum / count;
// }


// return result;
// }
// find_average([1, 2, 3, 4])
// function repeatStr (n, s) {
//   let result = '';
  
//   let i = 0; 
//   while (i < n) {
//   result += s
//   i++
//   }
  
  
  
  
// //   return result; 
// //   }
// //   repeatStr(7, "ha ")
// function solution(str){
//   let result = "";
  
//   for (let i = str.length -1; i >= 0 ; i--) {
//   result += str[i]
//   }
  
  
  
//   return result
// //   }
// //   solution('Incubator')
// function sumStr(a,b) {
//   let result = 0;
  
//   result = Number(a) + Number(b)
  
  
  
  
  
//   return result.toString()
//   }
//   sumStr('2', '3')
// function removeChar(str){
//   let result = str.slice(1, -1)
 
 
//  return result;
// //  }
// //  removeChar('Petushka')
// function findSmallestInt(args) {
//   let count = [];
  
  
  
//   for (let i = 0; i < args.length; i++) {
//   count = args.sort(function(a, b) { return a - b; });
//   }
  
  
  
  
//   return count[0]; 
//   }
// //   findSmallestInt([78,56,232,12,8])
// function greet(name){
//   let result = '';
  
//   result = `Hello, ${name} how are you doing today?`;
  
  
  
//   return result
//   }
//   greet('Yaroslav')
// function boolToWord( bool ){
//   let result;
  
//   if (bool == true) {
//   result = 'Yes'
//   } else if (bool == false) {
//   result = 'No'
//   }
  
  
//   return result;
//   }
//    boolToWord(false)
// function abbrevName(name){
//   let result = '';
//   let a = '';
//   let b = '';
//   for (let i = 0; i < name.length; i++) {
  
//   if (i == 0) {
//   a = name[i].toUpperCase()
//   }
  
//   if ( name[i - 1] == ' '){
//   b = name[i].toUpperCase()
//   }
  
//   }
//   result = `${a}.${b}`
      
//   return result
// //   }
// //   abbrevName("sam harris")
// function bmi(weight, height) {
//   let result = '';
//   let bm = weight / (height ** 2);
  
//   if (bm <= 18.5 ) {
//   result = "Underweight";
//   } else if ( bm <= 25.0 ) {
//   result = "Normal";
//   } else if (bm <= 30.0 ) {
//   result = "Overweight";
//   } else if ( bm  > 30) {
//   result = "Obese";
//   }
  
  
  
//   return result
// //   }
// //   bmi(80, 1.80)
// function updateLight(current) {
//   let result = '';
  
//   if (current == 'green') {
//   result = 'yellow';
//   } else if (current == 'yellow') {
//   result = 'red'; 
//   } else if (current = 'red') {
//   result = 'green'
//   }
//   return result;
// //   }
// //   updateLight("green")
// const reverseSeq = n => {
//   let result = [];
  
//   for (let i = n; i > 0; i--) {
//   result.push(i)
//   }
  
  
  
  
//   return result;
//   };
//   reverseSeq(5);
// function reverseWords(str){


//   let result = str.split(' ').reverse().join(' ');
//   return result;
//   }
//   reverseWords("yoda doesn't speak like this" );
// var laLigaGoals = 43;
// var championsLeagueGoals = 10;
// var copaDelReyGoals = 5;

// var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;
// function reverseList(list) {
//   let result = list.reverse();
//   return result
//   }
//   reverseList([1,2,3,4]);
// var min = function(list){

//   let arr = list.sort( (a, b) => a - b );
  
  
//   let result = 0;
//   return arr[0];
//   }
//   min([-52, 56, 30, 29, -54, 0, -110]);
  
  
//   var max = function(list){
  
//       let res = list.sort( (a, b) => a - b );
  
//       return res[res.length -1];
//   }
//   max([4,6,2,1,9,63,-134,566])
// function removeExclamationMarks(s) {
//   let result = '';

// for (let i = 0; i < s.length; i++) {

// if (s[i] == '!') {
// continue;
// } else if (s[i] !== '!') {
// // result += s[i]
// // // }
// // // }
// // // return result;
// // // }
// // // removeExclamationMarks("Hello World!!!!!!")
// // function basicOp(operation, value1, value2) {
// //   let result = 0;
// //   if (operation == '*') {
// //   result = value1 * value2
// //   } else if (operation == '+' ) {
// //   result = value1 + value2
// //   } else if (operation == '-' ) {
// //   result = value1 - value2
// //   } else if (operation == '/' ) {
// //   result = value1 / value2
// //   }
  
  
  
// //   return result;
  
// function areYouPlayingBanjo(name) {
//   let result = '';
//   if (name[0] === 'R' || name[0] === 'r') {
//   result = `${name} plays banjo`
//   } else {
//   result = `${name} does not play banjo`
//   }
  
  
  
  
//     return result;
//   }
// //   areYouPlayingBanjo("aul")

// var websites = []

// for (let i = 0; i < 1000; i++) {
// websites.push("codewars");
// }

// // console.log(websites)
// function multiTable(number) {
//   let count = 0;
//   let result = '';
  
//   for (let i = 1; i < 10; i++) {
//   result += `${i} * ${number} = ${i * number}\n`;
//   count++
//   }
  
//   if (count == 9) {
//   result += `${10} * ${number} = ${10 * number}`
//   }
  
  
  
  
//   return result; 
//   }
//   multiTable(2)
// function defineSuit(card) {
//   let result = '';
  
  
  
//   if ((card[card.length-1]) == '♣') {
//   result += 'clubs';
//   } else if ((card[card.length-1]) == '♦') {
//   result += 'diamonds';
//   } else if ((card[card.length-1]) == '♥') {
//   result += 'hearts';
//   } else if ((card[card.length-1]) == '♠') {
//   result += 'spades';
//   }
  
//   return result;
//   }
//   defineSuit("7♠")
// function sayHello(name) {
//   let result = '';
  
//   result = 'Hello, ' + name
  
  
  
//   return result; 
//   }
//   sayHello('Liutenant Uhura')
// function distinct(a) {
//   let result = [];
  
//     result = a.filter(function(item, pos) {
//       return a.indexOf(item) == pos;
//   })
  
  
  
  
//   return result
//   }
// //   distinct([1,1,2,2,2,3,4,3,5, 4, 4, 5, 6, 5, 7])
// function billboard(name, price = 30){
//   let result = 0;
//   let count = 0;

//   for (let i = 0; i < name.length; i++) {
//     count++
//   }
//  for (let j = 0; j < count; j++) {
//     result += price
//   }


// //   return result;
// // } 
// // billboard("Simon Eadwulfk")
// function strCount(str, letter){  
//   let result = 0; 
  
//     for (let i = 0; i < str.length; i++) {
//       if (letter == str[i]) {
//         result++
//       }
//     }
  
  
  
//     return result
//   }
//   strCount('Hello', 'o')
// function solution(a, b){
//   let result = '';
//   let countA = 0;
//   let countB = 0; 
    
  
//     for (let i = 0; i < a.length; i++) {
//       countA++
//     }
//   for (let j = 0; j < b.length; j++) {
//     countB++
//   }
//     if (countA > countB) {
//       result = `${b}${a}${b}`;
//     } else if (countA < countB) {
//       result = `${a}${b}${a}`;
//     } 
    
  
  
  
//   return result;
//   }
//   solution('Soon', 'Meeee')
// function makeUpperCase(str) {
//   return (str.toUpperCase())
// }
// makeUpperCase("hello")
// function findMultiples(integer, limit) {
//   let result = [];
  
//     for (let i = integer; i < limit; i++) {
//       if (i % integer == 0) {
//         result.push(i)
//       }
//     }
  
  
//     return result;
//   }
//   findMultiples(4, 27)
// function ensureQuestion(s) {
//   if (s[s.length -1] !== '?') {
//     return `${s}?`
//   } else if (s[s.length -1] == '?') {
//     return s
//   } else return s
// }
// ensureQuestion("")
function main (verb, noun) {
  return verb + noun
}
main('take ', 'item')
