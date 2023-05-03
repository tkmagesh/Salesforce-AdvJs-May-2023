var nos = [3, 1, 4, 2, 5]

//map
var doubleNos = nos.map(no => no * 2)
var products = [
    { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
    { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
    { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
    { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
    { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' },
    { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
];

var discountedProducts = products.map(function (product) {
    return { id: product.id, name: product.name, cost: 0.9 * product.cost }
})

//the above in es6
var discountedProducts = products.map(({ id, name, cost }) => ({ id, name, cost: 0.9 * cost }))


//reduce
var nos = [3, 1, 4, 2, 5]

nos.reduce((prevResult, no) => {
    const result = prevResult + no
    console.log(`prevResult = ${prevResult}, no = ${no}, currentResult = ${result}`)
    return result
})

nos.reduce((prevResult, no) => {
    const result = prevResult + no
    console.log(`prevResult = ${prevResult}, no = ${no}, currentResult = ${result}`)
    return result
}, 0)

nos.reduce(({ even, odd }, no) => no % 2 === 0 ? { odd, even: even + 1 } : { odd: odd + 1, even }, { even: 0, odd: 0 })


//chaining
products
    .filter(p => p.category === 'stationary')
    .map(({ id, name, cost }) => ({ id, name, cost: cost * 0.9 }))
    .map(dp => `Product Name : ${dp.name}, cost : ${dp.cost}`)
    .forEach(s => console.log(s))