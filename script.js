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
//   peopleWithAgeDrink(13)
function isDivideBy(number, a, b) {
  let result = true;
  
  if (number % a === 0 && number % b === 0) {
  result = true;
  } else {
  result = false;
  }
  
  
  
  
  
  return result;
  }
  isDivideBy(45, 5, 9)
