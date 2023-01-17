import { mathOperation } from "../interfaces/mathOperation"
import processOperation from "./processOperation"

export default function calculateSegment(segment:any[]){

    let workFormula: any[] = segment.slice()

    let operationsPrecedence: mathOperation[] = [
        {operation : '-', needPrevious: true, needNext: true},
        {operation : '+', needPrevious: true, needNext: true},
        {operation : '/', needPrevious: true, needNext: true},
        {operation : '*', needPrevious: true, needNext: true},
        {operation : '^', needPrevious: true, needNext: true},
        {operation : '%', needPrevious: true, needNext: true},
        {operation : String.fromCharCode(8730), needPrevious: false, needNext: true}, //RADIC
        {operation : String.fromCharCode(13266), needPrevious: false, needNext: true}, //LOG
        {operation : '!', needPrevious: true, needNext: false}
    ]

    while(operationsPrecedence.length){

        let currOperation = operationsPrecedence.pop()

        let len = workFormula.length
        let currPass:any[] = []

        for(let idx = 0; idx < len; idx++){


            if(currOperation && workFormula[idx] === currOperation.operation){

                let previous = (currOperation.needPrevious) ? currPass.pop() : 0
                let next = (currOperation.needNext) ? workFormula[idx + 1] : 0
                let currResult = 0

                try{
                    currResult = processOperation(currOperation.operation, Number(previous), Number(next))
                } catch {
                    throw `Error calculating segment: ${previous} ${currOperation} ${next}`
                }

                currPass.push(currResult)

                if(currOperation.needNext) idx++

            } else {
                currPass.push(workFormula[idx])
            }
        }

        workFormula = currPass

    }

    if(workFormula.length !== 1) throw 'Invalid Formula'

    return workFormula[0]

}

