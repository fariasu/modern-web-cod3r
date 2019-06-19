// function declaration
console.log(soma(1, 2))

function soma(x, y) {
    return x + y
}
soma(1, 2)

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(1, 2))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(1, 2))
