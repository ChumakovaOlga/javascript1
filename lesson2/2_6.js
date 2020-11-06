//6. Реализовать функцию с тремя параметрами:
// function mathOperation(arg1, arg2, operation),
//где arg1, arg2 – значения аргументов, operation –
// строка с названием операции. В зависимости от
//переданного значения операции (использовать switch)
// выполнить одну из арифметических операций
//(использовать функции из задания 4) и вернуть полученное значение.
'use strict';
var a = 6;
var b = 3;
function mathOperation(a, b, operation){

    var msg;
    switch (operation) {
        case "summ":
            return (a + b)

        case "substraction":
            return (a - b)

        case "division":
            return (a / b)

        case "multiplication":
            return (a * b)

        default:
            throw new Error("unknown operator")
    }
}
console.log(mathOperation(a, b, "summ"));
console.log(mathOperation(a, b, "substraction"));
console.log(mathOperation(a, b, "division"));
console.log(mathOperation(a, b, "multiplication"));