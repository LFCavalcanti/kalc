import calculateSegment from "../src/helpers/calculateSegment"


describe('The function that calculates segments of formulas should', () => {

    test('using an invalid formula throw error', ()=> {
        const formula = ['2','+','+','2']
        expect(() => calculateSegment(formula)).toThrowError('Invalid Formula')
    })
})