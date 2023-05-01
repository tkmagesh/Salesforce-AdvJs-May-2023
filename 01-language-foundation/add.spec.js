
function add(x,y){
    return x + y;
}

test("add(10,20) => 30", function(){
    var expectedResult = 30;
    var actualResult = add(10,20)
    expect(actualResult).toBe(expectedResult)
})

test("add(10) => 10", function () {
    var expectedResult = 10;
    var actualResult = add(10)
    expect(actualResult).toBe(expectedResult)
})