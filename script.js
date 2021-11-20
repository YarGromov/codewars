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
function repeatStr (n, s) {
  let result = '';
  
  let i = 0; 
  while (i < n) {
  result += s
  i++
  }
  
  
  
  
  return result; 
  }
  repeatStr(7, "ha ")
