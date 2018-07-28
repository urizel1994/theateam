//Задача 1
function filter(array) {
	var b = []
	for (var i = 0; i < array.length; i++) {
		b[i] = array[i]
		if (b[i] == undefined || b[i] == -1) {
			b[i] = 0;
		}
	}

	return a >= b ? true : false

}
var a = [1, -1, 3, 4]

function isAllTrue(array, fn) {
	if (array.length == 0) {
		throw new Error('Переданный массив пуст')
	} else if (typeof fn !== 'function') {
		throw new Error('Переданный аргумент не является функцией')
	} else {
		return fn(array);
	}

}
try {
	isAllTrue(a, filter)
} catch (e) {
	console.error(e.message);
}


//Задача 2
function filterVersion2(array) {
	var b = []
	var positiveCount = 0;
	var negativeCount = 0;
	for (var i = 0; i < array.length; i++) {
		b[i] = array[i]
		if (b[i] !== undefined && b[i] !== -1) {
			positiveCount += 1;
		} else {
			negativeCount += 1;
		}
		return positiveCount > 0 ? true : false
	}
}
var a = [-1, , -1];

function isSomeTrue(array, fn) {
	if (array.length == 0) {
		throw new Error('Переданный массив пуст')
	} else if (typeof fn !== 'function') {
		throw new Error('Переданный аргумент не является функцией')
	} else {
		return fn(array);
	}

}
try {
	isSomeTrue(a, filterVersion2)
} catch (e) {
	console.error(e.message);
}


//Задача 3
function inner(a) {
	return "Аргумент: " + a
}

function ReturnBadArguments(fn) {
	var func = fn;
	if (typeof func !== 'function') {
		throw new Error('Переданный аргумент не является функцией')
	} else {
		for (var i = 1; i < arguments.length; i++) {
			console.log(func(arguments[i]));
		}
	}

}
try {
	ReturnBadArguments(inner, 'robin', 'dabank', 4)
} catch (e) {
	console.error(e.message);
}


//Задача 4
function calculator(number = 0,...args) {
	if (typeof number != 'number') {
		throw new Error('Number не является числом');
	}
	return {
		sum: function () {
			for (var i = 0; i < args.length; i++) {
				var result = number;
				result += args[i];
			}
			return result;
		},
		dif: function () {
			for (var i = 0; i < args.length; i++) {
				var result = number;
				result -= args[i];
			}
			return result;
		},
		div: function () {
			for (var i = 0; i < args.length; i++) {
				var result = number;
				if (args[i] == 0) {
					throw new Error('Деление на 0 невозможно');
				}
				result /= args[i];
			}
			return result;
		},
		mul: function () {
			var result = number;
			for (var i = 0; i < args.length; i++) {
				result *= args[i];
			}
			return result;
		}
	}
}

var a = calculator("a", 1,3,4);
try{
console.log(a.dif());}
catch(e){
	console.error(e.message);
}