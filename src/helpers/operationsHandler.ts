
/*
    Se for operação só com 1 caractere como raiz quadrada, fatorial e log, caractere anterior precisa ser operação e posterior numero
    Se for operação com 2 caracteres como + - * / ^ % então anterior pode ser numero e posterior numero
*/




// key = Operation | value = RegEx with only the allowed elements before current operation
const operations = new Map([
    ['+' , /[0-9\!\)],{0}$/],
    ['-' , /[0-9\!\)],{0}$/],
    ['*' , /[0-9\!\)],{0}$/],
    ['/' , /[0-9\!\)],{0}$/],
    ['^' , /[0-9\!\)],{0}$/],
    ['%' , /[0-9\!\)],{0}$/],
    ['!' , /[0-9\)],{0}$/],
    [')' , /[0-9\!\)],{0}$/],
    ['(' , /[+\-*\/\^%!(]/],
    [String.fromCharCode(8730) , /[+\-*\/\^%!]|(?:\u33D2)/], //RADIC u33D2
    [String.fromCharCode(13266) , /[+\-*\/\^%!]|(?:\u221A)/] //LOG
])

export default function operationsHandler(previousElement:string, currOperation:string){
    let condTest = operations.get(currOperation)
    return condTest?.test(previousElement)
}