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
// function main (verb, noun) {
//   return verb + noun
// }
// main('take ', 'item')
// function feast(beast, dish) {
//   let result;
//     if (beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length -1]) {
//       result = true;
//     } else {
//       result = false
//     }

//     return result;
//   }
//   feast("great blue hero", "garlic naan")
// function hero(bullets, dragons){
//   let result;

//   if ((bullets / dragons) >= 2) {
//     result = true;
//   } else {
//     result = false
//   }

//   return result
//   }
//   hero(1500, 749)
// function shortcut(string){
//   let result = '';

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] ==  'a' || string[i] ==  'e' || string[i] ==  'i' || string[i] ==  'o' || string[i] ==  'u' || string[i] ==  'y') {
//       continue
//     } else  {
//       result += string[i]
//     }

//   }

//   return result + ', shortcut did not work properly';
//   }
//   shortcut('Lol is a capital of Great BritainA')
//    // 'a', 'e', 'i', 'o', 'u', 'y'
// //    // 'a' ||'e'|| 'i'|| 'o'|| 'u'|| 'y'
// function sixToast(num) {
//   let result = 0;

//     for (let i = 0; i < num; i++) {
//       if (num > 6) {
//         result = num - 6
//       } else if (num < 6) {
//         result = 6 - num
//       } else {
//         result = 0
//       }
//     }

//     return result;
//   }
//   sixToast(1)
// function sixToast(num) {
//   for (let i = 0; i < num; i++) {
//       if (num > 6) {
//         return (num - 6)
//       } else if (num < 6) {
//         return (6 - num)
//       } else {
//         return  0
//       }
//     }
//   }
//   sixToast(6)
// function checkForFactor (base, factor) {
//   if (base % 2 === 0) {
//      return true
//    } else {
//      return false
//    }
//  }
//  checkForFactor(653,7)
// const quarterOf = (month) => {

//   if (month <= 3) {
//     return 1
//   } else if (month > 3 && month <= 6) {
//     return 2
//   } else if (month > 6 && month <= 9) {
//     return 3
//   } else if (month > 9 && month <= 12) {
//     return 4
//   }
// };
// quarterOf(13)
// function pyramid(balls) {
//   let count = [];

//   for (let i = 0; i <= balls; i++) {
//     if (i % 2 != 0) {
//       count.push(i);
//     }
//   }

//   let count2 = 0;

//   let count1 = count.reduce(function (acc, elem) {
//     return acc + elem;
//   });

//   return count;
// }
// pyramid(7);
// function first(arr, n) {
//   n = typeof n !== 'undefined' ?  n : 1;
//   if (arr.length > 1 ) {
//    return(arr.slice(0, n))
// } else if (arr.length == 1) {
//   return (arr.slice(0, 1))
// } else if (arr.length == 0) {
//   return arr
// }
// }
// first(['a', '2', 'c', 'd', 'e'])
// function mergeArrays(arr1, arr2) {

//   let arr = arr1.slice();
//   let arr3 = [];

//   for (let i = 0; i < arr2.length; i++) {
//     arr.push(arr2[i])
//   }
//   let sorti = (a, b) => a -b;
//   arr.sort(sorti)

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       arr3.push(arr[i])
//     }
//   }

//   return arr3

//   }
//   mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12])
// function sum (numbers) {
//   "use strict";
// let result = 0;
// numbers.forEach(item => {
// result += item
// })

// return result;
// };
// sum([1, 5.2, 4, 0, -1])
// function removeNthElement(arr, n) {
//   let newArr = [];
//   arr.forEach(function(i) {
//     newArr.push(i)
//   })
//   newArr.splice(n, 1)
//   return newArr;
// }
// removeNthElement([1, 2, 3, 4, 5], 3)
// function withoutLast(arr) {
//   let arr1 = [];
//    arr1 = arr.slice(0, -1);
//    return arr1;
//  }
//  withoutLast([1, 2, 3, 4, 5])
// function getChar(c){
//   return (String.fromCodePoint(c))
//   }
//   getChar(56)
// function getGrade (s1, s2, s3) {
//   let result = "";
//   let score = ((s1 + s2 + s3) / 3);

//     if (90 <= score && score <= 100 ) {
//       result = 	"A";
//     } else if (80 <= score && score  < 90) {
//       result = "B";
//     } else if (70 <= score && score < 80) {
//       result = "C";
//     } else if (60 <= score && score < 70) {
//       result = "D";
//     } else if (0 <= score && score < 60) {
//       result = "F";
//     }

//     return result;
//   }
//   getGrade(80,90,100)
// function apple(x){
//   if((x * x) > 1000) {
//     return  "It's hotter than the sun!!"
//   } else  return  'Help yourself to a honeycomb Yorkie for the glovebox.'

//   }
//   apple('5')
// function generateRange(min, max, step){
//   let result = [];

//  for (let i = min; i <= max; i = i + step) {
//    result.push(i)
//  }

//   return result
// }
// generateRange(2, 10, 2)
// function nameShuffler(str){
//   return str.split(' ').reverse().join(' ')
//  }
//  nameShuffler('john McClane')
// function mouthSize(animal) {

//   if (animal == 'alligator' || animal == "ALLIGATOR") {
//     return 'small'
//   }
//     return 'wide'
//   }
//   mouthSize("ALLIGATOR")

// var replaceDots = function(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== '.') {
//       result += str[i]
//     } else {
//       result += '-'
//     }
//   }
//     return result;
//   }
//   replaceDots("one.two.three")
// const flip = (d, a) => {
//   function sortiR(a, b) {
//     return a - b;
//   }
//   function sortiL(a, b) {
//     return b - a;
//   }

//   if (d == "L") {
//     return a.sort(sortiL);
//   } else if (d == "R") {
//     return a.sort(sortiR);
//   }
// };
// flip("R", [1, 4, 5, 3, 5]);
// var humanYearsCatYearsDogYears = function(humanYears) {
//   let result = [];
//   result.push(humanYears);
//   let cat = 0;

//   let dog = 0;

//   if (humanYears == 1) {
//     cat = 15
//   } else if (humanYears == 2) {
//     cat = 24
//   } else if (humanYears > 2) {
//     cat = 24 + ((humanYears - 2) * 4)
//   }

//   if (humanYears == 1) {
//     dog = 15
//   } else if (humanYears == 2) {
//     dog = 24
//   } else if (humanYears > 2) {
//     dog = 24 + ((humanYears - 2) * 5)
//   }

//   result.push(cat);
//     result.push(dog);
//     return result;
//   }
//   humanYearsCatYearsDogYears(10)

// function checkAlive(health) {
//   if (health > 0) {
//     return true
//   } else {
//     return false
//   }
// };
// checkAlive(5)
// function howManyLightsabersDoYouOwn(name) {
//   let result = 0;
//   if (name == "Zach") {
//     result = 18;
//   } else if (name != "Zach"){
//     result = 0;
//   }
//   return result
// }
// console.log(howManyLightsabersDoYouOwn("Zach"))
// function preFizz(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//       result.push(i)
//     }
//   return result
//   }
// //   console.log(preFizz(5))
// function converter (mpg) {
  
//   let oneImpGallon_litr =  4.54609188;
//   let oneMile_km = 1.609344;
  
//   let km = mpg * oneMile_km;
//   let litersKm = km / oneImpGallon_litr;
  
//   let result = litersKm.toFixed(2)
    
  
  
//   return +result;
//   }
//   console.log(converter(20))
// var TempleStrings = function(obj, feature) {
//   return `${obj} are ${feature}`;
//   }
//   console.log(TempleStrings("Animals","Good"))
// function correctTail(body, tail) {
//   if (body[body.length -1] == tail) {
//     return true
//   } else {
//     return false
//   }
// };
// console.log(correctTail("Meerkat", "t"))
// function stringy(size) {
//   let result = [];
    
//   for (let i = 0; i < size; i++) {
//     if (i % 2 == 0) {
//       result.push('1');
//     } else if (i % 2 != 0) {
//       result.push('0')
//     }
//   }
//   return result.join('');
//   }
//   console.log(stringy(8))

// function odds(values){
//   // arrow it
//   return values.filter((item) => item % 2 !== 0);
// }

// function findNeedle(haystack) {
//   let result;
//     for (let i = 0; i < haystack.length; i++) {
//       if(haystack[i] == 'needle') {
//         result = `found the needle at position ${i}`;
//       }
//     }
//     return result;
//   }
//   console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));
function howManyDalmatians(number) {
  let respond = '';
    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];

  if (number <= 10) {
    respond = dogs[0];
  } else if (number <= 50) {
     respond = dogs[1];
  } else if (number == 101) {
    respond = dogs[3];
  } else {
    respond = dogs[2];
  } 
return respond
}
console.log(howManyDalmatians(101))
