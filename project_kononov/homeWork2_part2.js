//Задача 1
function forEach(array) {
	for (var i = 0; i < array.length; i++) {
		console.log("Элемент: " + array[i] + "; Под индексом:" + i + "; Массива: " + array);
	}
	return array;
}
var mas = [1, 2, 3];
forEach(mas);

//Задача 2
function map(array, fn) {
	var newar = []
	for (var i = 0; i < array.length; i++) {
		newar.push(array[i]);
	}
	if (fn !== undefined){
		newar.push(10)
		return fn(newar);
	}
	else{
		newar.push(10);
		return newar;
	}
	
}
function root(array){
	array.push(22);
	return array;
	
}
var oldar = [16, 4, 9];
console.log(map(oldar, root));

//Задача 3
function reduce(array, initial, sum) {
	if (sum == undefined) {
		sum = 0;
	}
	for (var i = 0; i < array.length; i++) {
		if (initial !== undefined) {
			while (array[i] < initial) {
				array.shift(array[i]);
			}
		}
		sum += array[i];
	}
	return sum;
}
var arr = [1, 2, 3, 4, 5];
console.log(reduce(arr, 4));

//Задача 4
var menu = {
	width: 300,
	height: 200,
	title: "Menu"
};

function upperPops(obj) {
	var mass = [];
	for (var key in obj) {
		mass.push(key.toUpperCase());
	}
	return mass;
}
console.log(upperPops(menu));

//Задача 5
var ar = [1, 2, 3, 4, 5];

function slice(array, from, to) {
	var i = from
	if (from > to){
		for(; i > to; i --){
			console.log(array[i]);
		}
	}
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
console.log(slice(ar, 3, 1));
