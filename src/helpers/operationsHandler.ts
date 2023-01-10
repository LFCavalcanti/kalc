
/*
    Se for operação só com 1 caractere como raiz quadrada, fatorial e log, caractere anterior precisa ser operação e posterior numero
    Se for operação com 2 caracteres como + - * / ^ % então anterior pode ser numero e posterior numero
*/




// key = Operation | value = if allows only numbers before, else only operators
const operations = new Map([
    ['+' ,true],
    ['-' ,true],
    ['*' ,true],
    ['/' ,true],
    ['^' ,true],
    ['%' ,true],
    ['!' ,true],
    ['SQRT' ,false],
    ['LOG' ,false]
])

export default function operationsHandler(previousElement:string, currOperation:string){

    console.log('ENTROU NO HANDLER')
    console.log(`PARAMS - PREVOUS: ${previousElement} OPERATION: ${currOperation}`)

    let numReg = new RegExp(/[0-9]/)

    if(numReg.test(previousElement) && operations.get(currOperation)){
        console.log('COMO SE ANTERIOR FOSSE NUMERO')
        return true
    } else if (!(operations.get(currOperation) && !numReg.test(previousElement)) || previousElement === '!'){
        console.log('COMO SE ANTERIOR FOSSE OPERACAO')
        return true
    } else {
        return false
    }
 
}