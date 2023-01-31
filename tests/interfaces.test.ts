import { mathOperation } from "../src/interfaces/mathOperation"

describe('Testing typescript interfaces', () => {
    test('the MathOperations should accept only the correct type', ()=>{
        const operations: mathOperation[] = [
            {operation : '-', needPrevious: true, needNext: true}
        ]

        const typeGuardCheck = (toBeDetermined: mathOperation): toBeDetermined is mathOperation => {
            if((toBeDetermined as mathOperation).operation){
              return true
            }
            return false
          }

        expect(typeGuardCheck(operations[0]))

    })
})