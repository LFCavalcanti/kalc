import processOperation from '../src/helpers/processOperation'

describe('The math operation function should', () => {

    test('using invalid operation should throw error', ()=> {
        const operation = 'A'
        const previous = 5
        const next = 5
        expect(() => processOperation(operation, previous, next)).toThrowError('Invalid operation')
    })

})