//1

function isAllTrue(array, fn) {
    if (array.length === 0 || !Array.isArray(array)) {
        throw new Error('empty array')
    }
    if (typeof fn !== 'function') {
        throw new Error('fn is not a function')
    }
    for (let i = 0; i < array.length; i++) {
        if (!fn(array[i])) return false
    }
    return true;
}

try {
    console.log(isAllTrue([1, 2, 3, 4, 5], n => n < 10));
    console.log(isAllTrue([100, 2, 3, 4, 5], n => n < 10))
} catch (e) {
    console.log(e.message)
}

//2

function isSomeTrue(array, fn) {
    if (array.length === 0 || !Array.isArray(array)) {
        throw new Error('empty array')
    }
    if (typeof fn !== 'function') {
        throw new Error('fn is not a function')
    }
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) return true
    }
    return false;
}

try {
    console.log(isSomeTrue([1, 2, 30, 4, 5], n => n > 20));
    console.log(isSomeTrue([1, 2, 3, 4, 5], n => n > 20))
} catch (e) {
    console.log(e.message)
}

//3

function returnBadArguments(fn, ...args) {
    let result = [];
    if (typeof fn !== 'function') {
        throw new Error('fn is not a function')
    }
    for (let i = 0; i < args.length; i++) {
        try {
            fn(args[i]);
        } catch (e) {
            result.push(args[i])
        }
    }
    return result
}

function fn1(arg) {
    if (arg < 0) {
        throw new Error('false')
    }
}

try {
    console.log(returnBadArguments(fn1, 1, 23, -4, 3, 1, -42));
} catch (e) {
    console.log(e.message)
}


//4

function calculator(number = 0, ...args) {
    if (typeof number !== "number") {
        throw new Error('number is not a number')
    }
    return {
        number: number,
        args: args,
        sum: function () {
            let result = this.number;
            for (let i = 0; i < this.args.length; i++) {
                result += this.args[i];
            }
            return result
        },
        dif: function () {
            let result = this.number;
            for (let i = 0; i < this.args.length; i++) {
                result -= this.args[i];
            }
            return result
        },
        div: function () {
            let result = this.number;
            for (let i = 0; i < this.args.length; i++) {
                if (this.args[i] === 0) {
                    throw new Error('division by 0');
                }
                result = result / this.args[i];
            }
            return result
        },
        mul: function () {
            let result = this.number;
            for (let i = 0; i < this.args.length; i++) {
                result = result * this.args[i];
            }
            return result
        }
    }
}

try {
    let n = calculator(12, 2, 3, 1, 0);
    console.log(n.number, n.args, n.sum(), n.dif(), n.mul());
    console.log(n.div())
} catch (e) {
    console.log(e.message)
}
