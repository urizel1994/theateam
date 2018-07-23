//Задача 1
function forEach(array) {
	for (var i = 0; i < array.length; i++) {
		console.log("Элемент: " + array[i] + "; Под индексом:" + i + "; Массива: " + array);
	}
}
var mas = [1, 2, 3];

//Задача 2
function map(array) {
	var newar = []
	for (var i = 0; i < array.length; i++) {
		newar.push(array[i]);
	}
	return newar;
}
var oldar = [2, 3, 4];
console.log(map(oldar));

//Задача 3
function reduce(array, initial) {
	var item = 0;
	var sum = 0;
	for (var j = 0; j < array.length; j++) {
		sum += array[j];
	}
	if (sum < initial || array[array.length - 1] < initial) {
		console.log("Ошибка: введённое стартовое число некорректно")
	} else {
		for (var i = 0; i < array.length; i++) {
			while (array[i] < initial) {
				array.shift(array[i]);
			}
			item = item + array[i];

		}

	}


	return item;
}
var ar = [1, 2, 3, 4, 5]
console.log(reduce(ar, 5));

//Задача 4
var menu = {
	width: 300,
	height: 200,
	title: "Menu"
};

function upperPops(obj) {
	var mass = [];
	for (var key in obj) {
		mass.push(key);
	}
	for (var i = 0; i < mass.length; i++) {
		console.log(mass[i].toUpperCase());
	}
}
console.log(upperPops(menu));

//Задача 5
var ar = [1, 2, 3, 4, 5];

function slice(array, from, to) {
	var i = from
	if (from == undefined && to == undefined) {
		for (i = 0; i < array.length; i++) {
			console.log(array[i]);
		}
	} else if (from == undefined) {
		for (i = 0; i < to; i++) {
			console.log(array[i]);
		}
	} else if (to == undefined) {
		for (i = from; i < array.length; i++) {
			console.log(array[i]);
		}
	}
	for (; i < to; i++) {
		console.log(array[i]);
	}
}
console.log(slice(ar, 1, 3));
