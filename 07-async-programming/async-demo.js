

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

    window['addAsyncPromise'] = addAsyncPromise;

})()

//client
/* 
console.log(`[@client] invoking the service`)
const p = addAsyncPromise(100,200)
p.then(function(result){ // callback invoked when the promise is "resolved"
    console.log(`[@client] result = ${result}`)
})
*/