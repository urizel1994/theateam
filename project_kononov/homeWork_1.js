//__Арифметика__

//Задача 1
var a = ((80 / 2) - 4) / 3 * 2;
document.write(a);

//Задача 2
var year = 2017,
	day = 9,
	month = 1;
if (year % 2 == 0) {
	var sum = day + month + 6;
} else {
	sum = day + month;
	document.write("Так как год нечётный, прибавление числа 6 не состоится.<br/>")
}
document.write(sum);

//Задача 3
var meshok = 5 + (5 * (2 + 4 + 8));
document.write(meshok);



//__Строки__

//Задача 1
document.write("hello " + "javascript");

//задача 2
document.write('quick brown fox jumped over lazy dog'.indexOf('j'));

//Задача 3
document.write('Goodbye javascript'.replace('Goodbye', 'Hello'));

//Задача 4
document.write('mississippi'.replace(/i/g, '!'));



//__Переменные__

//Задача 1
var red = 10,
	blue = 20,
	yellow = 40,
	purple, green, orange, black;
purple = red + blue;
green = blue + yellow;
orange = yellow + red;
black = purple + green + orange;
document.write('Число фиолетовых, зелёных, оранжевых и чёрных фишек составляет: ' + purple + "\n, " + green + "\n, " + orange + "\n, " + black + "\nфишек соответственно.");

//Задача 2
var hello = 'Привет',
	goodbye = 'Пока',
	name = 'Игорь';
document.write(hello + ',\n' + name + '.\n' + goodbye + ',\n' + name + '.');



//__Функции__

//Задача 1
function seconds(total) {
	return total % 60;
}
document.write(seconds(total));

//Задача 2
function perimeter(side, count) {
	return side * count;
}
document.write(perimeter(side, count));

//Задача 3
function pedestrianFlowRate(cycleLength, trafficLength, turningLength) {
	if (cycleLength <= trafficLength + turningLength) {
		return "Введены некорректные данные"
	};
	return 100 - ((trafficLength + turningLength) / (cycleLength / 100)) + "\n% от полного цикла светофора составляет время, отведённое для прохода пешеходов.";
};
document.write(pedestrianFlowRate(180, 90, 80));



//__Ветвление__

//Задача 1
function fizzbuzz(number) {
	if (number % 15 == 0) {
		return "FizzBuzz"
	};
	if (number % 3 == 0) {
		return "Fizz"
	};
	if (number % 5 == 0) {
		return "Buzz"
	};
};
document.write(fizzbuzz(303));

//Задача 2
function iGoToNorth(number) {
	if (number < 30 && number > 10 && number % 7 == 0) {
		return "Такое число нам подходит";
	} else {
		return "Не-а";
	}
}

document.write(iGoToNorth(21));


//__Циклы__

//Задача 1
function isPlain(n) {
	var half = n / 2;
	if (n == 1) {
		return "Число 1 не является ни простым, ни сложным"
	}
	for (var i = 2; i <= half; i++) {
		if (n > 1 && n <= 3) {
			return true;
		}
		n % i;
		if (n % i == 0) {
			return "Это составное число";
		} else {
			return true;
		}
	}
};
document.write(ref(101));

//Задача 2
function fib(n) {
	var firstNum = 1,
		secondNum = 1,
		total = firstNum + secondNum;
	for (var i = 2; i <= n; i++) {
		firstNum = secondNum;
		secondNum = total;
		total = firstNum + secondNum;
	}
	return total;
}
document.write(fib(10));

//Задача 3



//__Объекты__

//Задача 1
var book = {
	name: "js coding",
	type: "book"
};

//Задача 2
var cat = {
	setName: function (_name) {
		this.name = _name;
	},
	setLikes: function (_likes) {
		this.likes = _likes;
	}
};
cat.setName("Nelson");
cat.setLikes("milk");
if (cat.name == "Garphield" || cat.likes == "milk") {
	document.write("Cat");
};



//__Массивы__

//Задача 1
var array = [7, 8, 9, 10, 11, 12, 13];

//Задача 2
var a = [1, 2, 3, 4, 5];

function summ(array) {
	var total = 0
	for (var i = 0; i < array.length; i++) {
		total = total + array[i];
	}
	return total;
}

//Задача 3
function evens(array) {
	var n = []
	for (var i = 0; i < array.length; i++) {
		if (array[i] % 2 == 0) {
			n.push(array[i]);
		}
	}
	return n;
}

//Задача 4
var a = [1, 3, 5, 7];
var b = [2, 4, 6, 8];

function union(array1, array2) {
	var sum = []
	for (var i = 0; i < array1.length; i++) {
		for (var j = 0; j < array2.length; j++)
			sum.push([array1[i],array2[j]]);
	}
	return sum;

}


//__Строки, продолжение__

//Задача 1
var str = "Hello".concat(' ',"coding",' ',"in",' ',"javascript");
document.write(str);

//Задача 2
var short = "Coding in Javascript".substr(5,8);
document.write(short);
