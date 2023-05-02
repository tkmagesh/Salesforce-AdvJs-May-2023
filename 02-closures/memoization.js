
var isPrime = (function(){
    var results = {}
    function isPrime(no) {
        for (var i = 2; i <= (no / 2); i++) {
            if (no % i === 0) {
                return false
            }
        }
        return true
    }
    return function(no){
        if (results.hasOwnProperty(no)) return results[no]
        console.log('processing :', no)
        results[no] = isPrime(no)
        return results[no]
    }
})()


var isEven = (function () {
    var results = {}
    function isEven(no) {
        return no % 2 === 0;
    }
    return function (no) {
        if (results.hasOwnProperty(no)) return results[no]
        console.log('processing :', no)
        results[no] = isEven(no)
        return results[no]
    }
})()

/* 
function memoize(fn) {
    var results = {}
    return function (no) {
        if (results.hasOwnProperty(no)) return results[no]
        console.log('processing :', no)
        results[no] = fn(no)
        return results[no]
    }
} 
*/

function memoize(fn, ctx) {
    var results = {}
    return function () {
        var key = JSON.stringify(arguments)
        if (results.hasOwnProperty(key)) return results[key]
        console.log('processing :', key)
        results[key] = fn.apply(ctx, arguments)
        return results[key]
    }
} 

var isEven = memoize(function (no) { return no % 2 === 0; })

var isPrime = memoize(function isPrime(no) {
    for (var i = 2; i <= (no / 2); i++) {
        if (no % i === 0) {
            return false
        }
    }
    return true
})

// Modify the memoize function in such a way that it can memoize the result of any function with any number of arguments
// for example, the following should work
var memoizedAdd = memoize(function (x, y) { return x + y; })
memoizedAdd(10,20)
memoizedAdd(10, 200)
memoizedAdd(100, 20)


var memoizedAdd = memoize(function () {
    var result = 0;
    for (var idx = 0; idx < arguments.length; idx++)
        result += arguments[idx]
    return result
})

memoizedAdd(10)
memoizedAdd(10, 20)
memoizedAdd(10, 20, 30)
