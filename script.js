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
function isDivisible(n, x, y) {
  let result = true;
  
  if (Number.isInteger(n / x) && Number.isInteger(n / y)) {
  result = true;
  } else {
  result = false
  }
  
  
  
  
  return result
  }
  isDivisible(3, 3, 4)
