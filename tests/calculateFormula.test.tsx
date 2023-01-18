import calculateFormula from '../src/helpers/calculateFormula'
import processOperation from '../src/helpers/processOperation'


describe('A formula should calculate', () => {

    test('using simple operations return the correct result', ()=> {
        const formula = ['2','+','8','*','2','/','2','-','5']
        const result = calculateFormula(formula)
        expect(result).toBe(5)
    })

    test('using simple operations and parenteses return the correct result', ()=> {
        const formula = ['2','+','(','8','*','(','2','/','2',')',')','-','(','5','*','10',')','*','10']
        const result = calculateFormula(formula)
        expect(result).toBe(-490)
    })

    test('using advanced operations and parenteses return the correct result', ()=> {
        const formula = ['2','^','(','45','%','2','+','3',')','!','+',String.fromCharCode(8730),'64']
        const result = calculateFormula(formula)
        expect(result).toBe(16777224)
    })

    test('using natural LOG shloud return the correct result', ()=> {
        const formula = [String.fromCharCode(13266),'5']
        const result = calculateFormula(formula)
        expect(result).toBe(1.6094379124341003746007593332262)
    })

    test('using invalid parentes should throw error', ()=> {
        const formula = ['2','+','(','8','*','(','2','/','2',')','-','(','5','*','10',')','*','10']
        expect(() => calculateFormula(formula)).toThrowError('Invalid parenteses pairs')
    })

    test('using invalid formula should throw error for segment with parenteses', ()=> {
        const formula = ['(','2','+','+','2',')']
        expect(() => calculateFormula(formula)).toThrowError('Invalid Formula')
    })

    test('using invalid formula should throw error for segment outside parenteses', ()=> {
        const formula = ['(','2','+','2',')','+','+','2']
        expect(() => calculateFormula(formula)).toThrowError('Invalid Formula')
    })

    test('using invalid formula should throw error without parenteses', ()=> {
        const formula = ['2','+','+','2']
        expect(() => calculateFormula(formula)).toThrowError('Invalid Formula')
    })

    test('using invalid closing parentes at position 12 should throw error', ()=> {
        const formula = ['2','+','(','8','*','(','2','/','2',')',')',')','-','(','5','*','10',')','*','10']
        expect(() => calculateFormula(formula)).toThrowError('Invalid parenteses at position 12')
    })

})