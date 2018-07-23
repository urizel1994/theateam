//__ЧАСТЬ 1__

//Задача 1
//1.1
function a() {
	var name = 'simple function'
}
//1.2
function returnArgument(a) {
	return a;
}
console.log(returnArgument('hey'));

//Задача 2
//2.1
function sumWithDefaults(a, b, c, ...rest) {
	var sum = 0;
	if (rest == undefined) {
		sum = sum + a + b + c;
	} else {
		sum = sum + a + b + c;
		for (var i = 0; i < rest.length; i++) {
			sum += rest[i];
		}
	}
	return sum;
}
console.log(sumWithDefaults());
//2.2
function sumWithDefaults_ver2_0(a, b, c, ...rest) {
	var sum = 100;
	if (rest == undefined) {
		sum = sum + a + b + c;
	} else {
		sum = sum + a + b + c;
		for (var i = 0; i < rest.length; i++) {
			sum += rest[i];
		}
	}
	return sum;
}
console.log(sumWithDefaults_ver2_0(1, 2, 3));

//Задача 3
function inner() {
	console.log("Hello");
}

function returnFnResult(fn) {
	return fn;
}
console.log(returnFnResult(inner()));

//Задача 4
function returnCounter(a) {
	var num = a;

	function F(a) {
		var sum = a + 1;
		return sum;
	}
	return F(a);
}
var f = returnCounter(10);
f = returnCounter(f);

//Задача 5
function returnArgumentsArray(...rest) {
	return rest;
}
console.log(returnArgumentsArray(1, 2, 3, 4, 5));


//Задача 6
function returnArgumentsArray(...rest) {
	return rest;
}

function bindFunction(fn) {
	return fn;
	
}

console.log(bindFunction(returnArgumentsArray(1,2,3,4,5)));
