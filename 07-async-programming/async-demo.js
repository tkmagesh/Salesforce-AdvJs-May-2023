

(function(){

    //sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const result = x + y
        console.log(`   [@service] returning result`)
        return result
    }

    function addSyncClient(){
        console.log(`[@client] invoking the service`)
        const result = addSync(100,200)
        console.log(`[@client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient;

    //handling errors
    function divideSync(x, y) {
        console.log(`   [@service] processing ${x} and ${y}`)
        if (y === 0){
            throw new Error('invalid arguments. divisor cannot be 0')
        }
        const result = x / y
        console.log(`   [@service] returning result`)
        return result
    }

    function divideSyncClient() {
        try {
            console.log(`[@client] invoking the service`)
            const result = divideSync(100, 0)
            console.log(`[@client] result = ${result}`)
        } catch (e){
            console.log(`[@client] error occurred : ${e}`)
        }
    }

    window['divideSyncClient'] = divideSyncClient;

    //async (using callback)
    function addAsync(x, y, callback) {
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(() => {
            const result = x + y
            console.log(`   [@service] returning result`)
            // return result    
            callback(result)
        }, 5000);
    }

   

    function addAsyncClient() {
        console.log(`[@client] invoking the service`)
        addAsync(100, 200, function(result){
            console.log(`[@client] result = ${result}`)  
        })
    }

    window['addAsyncClient'] = addAsyncClient;

    //handling errors
    function divideAsync(x, y, callback) {
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(() => {
            if (y === 0) {
                // throw new Error('invalid arguments. divisor cannot be 0')
                const err = new Error('invalid arguments. divisor cannot be 0')
                callback(err, undefined)
                return
            }
            const result = x / y
            console.log(`   [@service] returning result`)
            callback(undefined, result)
        }, 5000);
    }

    function divideAsyncClient() {
        console.log(`[@client] invoking the service`)
        divideAsync(100, 0, function(err, result){
            if (err){
                console.log(`[@client] error occurred : ${err}`)
                return
            }
            console.log(`[@client] result = ${result}`)
        })        
    }
    window['divideAsyncClient'] = divideAsyncClient;

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)

        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(() => {
                const result = x + y
                console.log(`   [@service] returning result`)
                resolveFn(result)
            }, 5000);
        })
        return p;
    }

    function addSyncClient() {
        console.log(`[@client] invoking the service`)
        const result = addSync(100, 200)
        console.log(`[@client] result = ${result}`)
    }

    /* 
    function addAsyncPromiseClient(){
        console.log(`[@client] invoking the service`)
        const p = addAsyncPromise(100, 200)
        p.then(function (result) { // callback invoked when the promise is "resolved"
            console.log(`[@client] result = ${result}`)
        })
    } 
    */

    //using async await
    async function addAsyncPromiseClient() {
        console.log(`[@client] invoking the service`)
        const result = await addAsyncPromise(100, 200)
        console.log(`[@client] result = ${result}`)
        console.log('done')
        return result * 2;
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;

    function divideAsyncPromise(x, y) {
        console.log(`   [@service] processing ${x} and ${y}`)
        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(() => {
                if (y === 0) {
                    // throw new Error('invalid arguments. divisor cannot be 0')
                    const err = new Error('invalid arguments. divisor cannot be 0')
                    return rejectFn(err)
                }
                const result = x / y
                console.log(`   [@service] returning result`)
                resolveFn(result)
            }, 5000);
        })
        return p;
    }

    /* 
    function divideAsyncPromiseClient() {
        console.log(`[@client] invoking the service`)
        
        // const p = divideAsyncPromise(100, 0)
        // p.then(result => console.log(`[@client] result = ${result}`))
        // p.catch(err => console.log(`[@client] error occurred : ${err}`)) 
        
        divideAsyncPromise(100, 0)
            .then(result => console.log(`[@client] result = ${result}`))
            .catch(err => console.log(`[@client] error occurred : ${err}`))
    } 
    */

    //using async await
    async function divideAsyncPromiseClient() {
        try {
            console.log(`[@client] invoking the service`)
            const result = await divideAsyncPromise(100, 0)
            console.log(`[@client] result = ${result}`)
        } catch (err) {
            console.log(`[@client] error occurred : ${err}`)
        }
    }
    window['divideAsyncPromiseClient'] = divideAsyncPromiseClient;

})()

//client
/* 
console.log(`[@client] invoking the service`)
const p = addAsyncPromise(100,200)
p.then(function(result){ // callback invoked when the promise is "resolved"
    console.log(`[@client] result = ${result}`)
})
*/

// follow up operation (async)
/* 
console.log(`[@client] invoking the service`)
const p = addAsyncPromise(100, 200)
var p2 = p.then(function (result) { // callback invoked when the promise is "resolved"
    console.log(`[@client] result = ${result}`)

    //follow up (async)
    const p2 = new Promise((resolveFn, rejectFn) => {
        setTimeout(() => {
            const doubleResult = result * 2
            resolveFn(doubleResult)
        }, 4000);
    });
    return p2
})
p2.then(doubleResult => console.log(`doubleResult : ${doubleResult}`)) 
*/

// follow up operation (sync) - 1
/* 
console.log(`[@client] invoking the service`)
const p = addAsyncPromise(100, 200)
var p2 = p.then(function (result) { // callback invoked when the promise is "resolved"
    console.log(`[@client] result = ${result}`)

    //follow up (sync)
    const p2 = new Promise((resolveFn, rejectFn) => {
        const doubleResult = result * 2
        resolveFn(doubleResult);
    });
    return p2
})
p2.then(doubleResult => console.log(`doubleResult : ${doubleResult}`)) 
*/

// follow up operation (sync) - 2
/* 
console.log(`[@client] invoking the service`)
const p = addAsyncPromise(100, 200)
var p2 = p.then(function (result) { // callback invoked when the promise is "resolved"
    console.log(`[@client] result = ${result}`)

    //follow up operation (sync)
    const doubleResult = result * 2
    const p2 = Promise.resolve(doubleResult)
    return p2
})
p2.then(doubleResult => console.log(`doubleResult : ${doubleResult}`)) 
*/

// promise chaining - 1
/* 
console.log(`[@client] invoking the service`)
const p = addAsyncPromise(100, 200)
//p.then() by default returns a promise
var p2 = p.then(function (result) { // callback invoked when the promise is "resolved"
    console.log(`[@client] result = ${result}`)

    //follow up operation (sync)
    const doubleResult = result * 2
    return doubleResult;
})
var p3 = p2.then(doubleResult => {
    console.log(`doubleResult : ${doubleResult}`);
    return 'dummy result'
}) 
*/

// promise chaining - 1
/* 
console.log(`[@client] invoking the service`)
var p3 = addAsyncPromise(100, 200)
    .then(function (result) { // callback invoked when the promise is "resolved"
        console.log(`[@client] result = ${result}`)
        //follow up operation (sync)
        const doubleResult = result * 2
        return doubleResult;
    })
    .then(doubleResult => {
        console.log(`doubleResult : ${doubleResult}`);
        return 'dummy result'
    }) 
*/