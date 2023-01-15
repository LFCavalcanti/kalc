import { mathOperation } from "../interfaces/mathOperation"

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

            //console.log(`${workFormula[idx]} -> ${currOperation!.operation}`)

            if(currOperation && workFormula[idx] === currOperation.operation){

                console.log(workFormula)
                console.log(`ENTROU EM CALCULO NA POSICAO ${idx}`)

                let previous = (currOperation.needPrevious) ? currPass.pop() : 0
                let next = (currOperation.needNext) ? workFormula[idx + 1] : 0
                let currResult = 0

                console.log(`PARAMETROS MONTADOS || OPERATION: ${currOperation.operation} PREVIOUS: ${previous} NEXT ${next}`)

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

    console.log(workFormula)

    if(workFormula.length !== 1) throw 'Invalid Formula'

    return workFormula[0]

}

function processOperation(currOperation:string = '', previous:number, next: number){

    console.log(`CALCULATING: ${previous} ${currOperation} ${next}`)

    if(currOperation === '-'){
        return previous - next
    }

    if(currOperation === '+'){
        return previous + next
    }

    if(currOperation === '/'){
        return previous / next
    }

    if(currOperation === '*'){
        return previous * next
    }

    if(currOperation === '^'){
        return Math.pow(previous, next)
    }

    if(currOperation === '%'){
        return previous % next
    }

    if(currOperation === String.fromCharCode(8730)){ //RADIC
        return Math.sqrt(next)
    }

    if(currOperation === String.fromCharCode(13266)){ //LOG
        return Math.log(next)
    }

    if(currOperation === '!'){ //LOG

        let result = previous
        let curr = previous
        while(curr > 1){
            result = result * (curr-1)
            curr--
        }
        return result
    }

    throw 'Invalid operation'
    return 0

}