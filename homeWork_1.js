/*
// 					Займёмся арифметикой

(80/2 - 4) - ((80/2 - 4) / 3)
(9 + 1) + ((1 - (2017 % 2)) * 6)
(1 + 1*2 + 2*2 + 4*2) * 5

////////////////////////////////////////////////////////////
// 					Строки

'Hello ' + 'javascript';

'quick brown fox jumped over lazy dog'.indexOf('j');

'Goodbye javascript'.replace('Goodbye','Hello');

'mississippi'.replace(/i/g, '!');

////////////////////////////////////////////////////////////
// 					Переменные

var redChips = 10, blueChips = 20, yellowChips = 40,
	purpleChips = blueChips + redChips,
	greenChips = yellowChips + blueChips,
	orangeChips = yellowChips + redChips,
	blackChips = greenChips + orangeChips + purpleChips;


var hello = 'Привет',
    goodbye = 'Пока',
    name = 'Пётр',
    resultStr = hello + ', ' + name + '. ' + goodbye + ', ' + name + '.';

////////////////////////////////////////////////////////////
// 					Функции

function seconds(total){
  return total % 60;
}

function perimeter(side, count){
  return side * count;
}

function pedestrianFlowRate(cycleLength, trafficLength, turningLength){
  return (cycleLength - trafficLength - turningLength) * 100 / cycleLength ;
}

////////////////////////////////////////////////////////////
// 					Ветвление

function fizzbuzz(number){
  if (number % 15 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'Fizz';
  if (number % 5 == 0) return 'Buzz';
  return number;
}

function iGoToNorth(number){
  return (number > 10 && number < 30 && number % 7 ===0) ? true : false;
}

////////////////////////////////////////////////////////////
// 					Циклы

function isPlain(number){
  if (typeof(number) == 'number' && number > 0){
    for(var i = 2; i < number; i++){
      if (number % i === 0) return false;
    }
    return true;
  }
  else{
    console.log("incorrect data");
  }
}

function fib(number){
  if (number < 3) return 1;

  var fib1 = 1, fib2 = 1, result;
  for(var i = 3; i <= number; i++){
      result = fib1 + fib2;
      fib1 = fib2;
      fib2 = result;
  }

  return result;
}

function digitSumm(number){
  var sum = 0;
  while (number != 0)
    {
        sum += number % 10;
        number /= 10;
    }
  return Math.round(sum - (sum * 0.1));
}

////////////////////////////////////////////////////////////
// 					Объекты

var book = {
  name: 'Программирование на Javascript',
  type: 'Book',
}

function isCat(cat){
  return (cat.name === 'Garphield' || cat.likes === 'milk') ? true : false;
}

////////////////////////////////////////////////////////////
// 					Массивы

var array = [];
for (var i = 7; i <= 13; i++){
  array.push(i);
}

function summ(arr){
  var summ = 0;
  for (var i = 0; i < arr.length; i++){
    summ += arr[i];
  }
  return summ;
}

function evens(arr){
  var evArr = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) evArr.push(arr[i]);
  }
  return evArr;
}

function combinations(arr1, arr2){
  resArr = [];
  tempArr = [];
  for(var i = 0; i < arr1.length; i++){
    for(var j = 0; j < arr2.length; j++){
      tempArr.push(arr1[i], arr2[j]);
      resArr.push(tempArr.slice());
      tempArr = [];
    }
  }
  return resArr;
}

////////////////////////////////////////////////////////////
// 					Строки, продолжение

'Hello'.concat(' ', 'coding', ' ', 'in', ' ', 'javascript');

'Coding in javascript'.substr(5, 8);

'Coding in javascript'.substring(5, 13);

*/
