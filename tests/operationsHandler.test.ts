import operationsHandler from "../src/helpers/operationsHandler"

describe('The function that validates formula elements should', () => {

    test('Adition(+) should only accept numbers and closing parenteses as previous element', ()=> {
        expect(
            operationsHandler('2','+') &&
            operationsHandler('!','+') &&
            operationsHandler(')','+') &&
            !operationsHandler('-','+') &&
            !operationsHandler('+','+')
        )
    })

    test('Subtraction(-) should only accept numbers and closing parenteses as previous element', ()=> {
        expect(
            operationsHandler('2','-') &&
            operationsHandler('!','-') &&
            operationsHandler(')','-') &&
            !operationsHandler('+','-') &&
            !operationsHandler('-','-')
        )
    })

    test('Multiplication(-) should only accept numbers and closing parenteses as previous element', ()=> {
        expect(
            operationsHandler('2','*') &&
            operationsHandler('!','*') &&
            operationsHandler(')','*') &&
            !operationsHandler('+','*') &&
            !operationsHandler('*','*')
        )
    })

    test('Division(/) should only accept numbers and closing parenteses as previous element', ()=> {
        expect(
            operationsHandler('2','/') &&
            operationsHandler('!','/') &&
            operationsHandler(')','/') &&
            !operationsHandler('+','/') &&
            !operationsHandler('/','/')
        )
    })

    test('Exponentiation(^) should only accept numbers and closing parenteses as previous element', ()=> {
        expect(
            operationsHandler('2','^') &&
            operationsHandler('!','^') &&
            operationsHandler(')','^') &&
            !operationsHandler('+','^') &&
            !operationsHandler('^','^')
            
        )
    })

    test('Modus/Rest(%) should only accept numbers and closing parenteses as previous element', ()=> {
        expect(
            operationsHandler('2','%') &&
            operationsHandler('!','%') &&
            operationsHandler(')','%') &&
            !operationsHandler('+','%') &&
            !operationsHandler('%','%')
        )
    })

    test('Factorial(!) should only accept numbers and closing parenteses as previous element', ()=> {
        expect(
            operationsHandler('2','!') &&
            operationsHandler(')','!') &&
            !operationsHandler('+','!') &&
            !operationsHandler('!','!')
        )
    })

    test('Closing parenteses should only accept numbers and factorial as previous element', ()=> {
        expect(
            operationsHandler('2',')') &&
            operationsHandler('!',')') &&
            !operationsHandler('+',')') &&
            !operationsHandler(')',')')
        )
    })

    test('Opening parenteses should only accept the specific math operations(+,-,/,*,%,^) and other opening parenteses as previous element', ()=> {
        expect(
            operationsHandler('+','(') &&
            operationsHandler('-','(') &&
            operationsHandler('^','(') &&
            operationsHandler('2','(') &&
            operationsHandler('(','(') &&
            !operationsHandler('!','(') &&
            !operationsHandler(String.fromCharCode(8730),'(') &&
            !operationsHandler(')','(')
        )
    })

    test('Radic(Square Root) should only accept the specific math operations(+,-,/,*,%,^) and opening parenteses as previous element', ()=> {
        expect(
            operationsHandler('+',String.fromCharCode(8730)) &&
            operationsHandler('-',String.fromCharCode(8730)) &&
            operationsHandler('^',String.fromCharCode(8730)) &&
            operationsHandler('2',String.fromCharCode(8730)) &&
            operationsHandler('(',String.fromCharCode(8730)) &&
            !operationsHandler('!',String.fromCharCode(8730)) &&
            !operationsHandler(String.fromCharCode(8730),String.fromCharCode(8730)) &&
            !operationsHandler(')',String.fromCharCode(8730))
        )
    })

    test('Natural Logarithms(Log of e) should only accept the specific math operations(+,-,/,*,%,^) and opening parenteses as previous element', ()=> {
        expect(
            operationsHandler('+',String.fromCharCode(13266)) &&
            operationsHandler('-',String.fromCharCode(13266)) &&
            operationsHandler('^',String.fromCharCode(13266)) &&
            operationsHandler('2',String.fromCharCode(13266)) &&
            operationsHandler('(',String.fromCharCode(13266)) &&
            !operationsHandler('!',String.fromCharCode(13266)) &&
            !operationsHandler(String.fromCharCode(13266),String.fromCharCode(13266)) &&
            !operationsHandler(')',String.fromCharCode(13266))
        )
    })

})