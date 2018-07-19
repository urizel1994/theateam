// Numbers
// 1.1 
(80 / 2 - 4) / 3 * 2;

// 1.2
(9 + 1) + ((1 - (2017 % 2)) * 6);

// 1.3
(1 + 2*(1 + 1*2 + 1*2*2)) * 5;


// Strings
// 2.1
const js = 'Hello ' + 'javascript';
console.log(js);

// 2.2
'quick brown fox jumped over lazy dog'.indexOf('j');

// 2.3
'Goodbye javascript'.replace('Goodbye', 'Hello');

// 2.4
'mississippi'.replace(/i/g, '!');


// Variables
// 3.1
var red = 10;
var blue = 20;
var yellow = 40;
var purple = red + blue;
var green = blue + yellow;
var orange = red + yellow;
var black = purple + green + orange;
console.log(black);

// 3.2
var hello = 'Привет, ';
var goodbye = 'Пока, ';
var name = 'Пётр';
var helloGoodbye = hello + name + '. ' + goodbye + name + '. ';
console.log(helloGoodbye);


// Functions
// 4.1
function seconds (total) {
    return total % 60;
}

// 4.2
function perimeter (side, count) {
    return side * count;
}

// 4.3
function pedestrianFlowRate (cycleLength, trafficLength, turningLength) {


    pedestrianLength = cycleLength - (trafficLength + turningLength);

    var result = (pedestrianLength/cycleLength) * 100;
    return `Пешеходам отведено ${result}% времени.`
}



// Branching
// 5.1
function fizzbuzz (number) {
    if ((number % 3 === 0) && (number != 15) ) {
        return 'Fizz';
    } else if ((number % 5 === 0) && (number != 15)) {
        return 'Buzz';
    } else if (number % (3 && 5) === 0) {
        return 'FizzBuzz';
    } else {
        return number ;
    }
}

// 5.2
function iGoToNorth (number) {
    if ((number > 10) && (number < 30) && (number % 7 === 0)) {
        return "Вы нам подходите!";
    }
}


// Loops
// 6.1
function isPlain (number) {
    for (var i = 2; i <= number / 2; i = i + 1) {
        if (number % i !== 0) {
            return true;
        } else {
            return false;
        }
    }
}
// note: returns 'undefined' when number is <=2 

// 6.2
function fib(number) {

    var prev = 1;
    var prevPrev = 1;
    var fibResult;

    for (var i = 1; i <= 2; i++) {
        fibResult = prev;
    }

    for (i = 3; i <= number; i++ ) {
        fibResult = prev + prevPrev;
        prevPrev = prev;
        prev = fibResult;
    }

    return fibResult;
}

// 6.3
function digitSumm (number) {

    var digitA = (Math.floor(number / 10));
    var digitB = number % 10;
    var digitSumm = digitA + digitB;

    return digitSumm;

}
// note: 1st parameter calculated not by a % operator


// Objects
// 7.1
var book = {
    name: 'Программирование на Javascript',
    type: 'Book'
}

// 7.2
function isACat(testCat) {
    var trueCat = {
        name: 'Garphield',
        likes: 'milk'
    }

    if ((testCat.name === trueCat.name) && (testCat.likes === trueCat.likes)) {
        return "Поздравляем! Ваш кот - самый настоящий кот."
    } else if (testCat.likes === trueCat.likes) {
        return "Не знаем, настоящий ваш кот или нет, но молочко он любит." 
    } else {
        return "Извините, но вам подсунули ненастоящего кота."
    }
}


// Arrays
// 8.1
var array = [7, 8, 9, 10, 11, 12, 13];

// 8.2
function summ(array) {
    
    var array = array;
    var summ = 0;

    for (var i = 0; i < array.length; i++) {
        summ = summ + (array[i]);
    }

    return summ;

}

// 8.3
function evens (array) {

    var array = array;
    var array2 = []; 
    
    for (var i = 0; i <= array.length; i++) {
        if (array[i] % 2 === 0) {
         array2.push([array[i]]);
        }
    }

    return array2;

}

// 8.4 
function combine (array1, array2) {

    var arrayCombined = [];

    for (var i = 0; i < array1.length; i++) {
        for (var k = 0; k < array2.length; k++) {
            arrayCombined.push([
                array1[i],
                array2[k]
            ]);
        }   
    }  

    return arrayCombined;
}


// Strings 2
// 9.1
var hello = 'Hello'.concat(' ').concat('coding').concat(' ').concat('in').concat(' ').concat('javascript');

// 9.2
var coding = 'Coding in javascript'.substr(5, 8);

// 9.3 
var coding2 = 'Coding in javascript'.substring(5, 13);