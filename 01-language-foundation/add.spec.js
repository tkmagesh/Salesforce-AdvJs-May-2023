
function add(x,y){
    function parseArg(n){
        return isNaN(n) ? 0 : parseInt(n);
    }
    var result = 0
    for (var idx = 0; idx < arguments.length; idx++){
        result += parseArg(arguments[idx])
    }
    return result
}

test("add(10,20) => 30", function(){
    var expectedResult = 30;
    var actualResult = add(10,20)
    expect(actualResult).toBe(expectedResult)
})

test("add('10',20) => 30", function () {
    var expectedResult = 30;
    var actualResult = add("10", 20)
    expect(actualResult).toBe(expectedResult)
})

test("add('abc',20) => 20", function () {
    var expectedResult = 20;
    var actualResult = add("abc", 20)
    expect(actualResult).toBe(expectedResult)
})

test("add(10) => 10", function () {
    var expectedResult = 10;
    var actualResult = add(10)
    expect(actualResult).toBe(expectedResult)
}) 

test("add(10,20,30,40,50) => 150", function () {
    var expectedResult = 150;
    var actualResult = add(10,20,30,40,50)
    expect(actualResult).toBe(expectedResult)
}) 
