import calculateSegment from "./calculateSegment"
import processParenteses from "./processParenteses"

export default function calculateFormula(
    formula:string[]
){

    let haveParenteses:boolean
    let calculationStack: any[] = []
    let result:number = 0

    try {
        haveParenteses = processParenteses(formula)
    } catch(error) {
        throw error
    }

    //Rodar a Formula toda chamando a função de calculo para cada trecho de parenteses localizados
    //o retorno é atualizado na stack de calculo
    if(haveParenteses){

        let formLen = formula.length

        console.log(formula)

        for(let idx = 0; idx < formLen; idx++){

            if(formula[idx] === ')'){

                let calcSegment:any[] = []

                while(calculationStack[calculationStack.length - 1] !== '('){
                    // TODO: Inverter ordem de inserção no array ou inverter array
                    calcSegment.push(calculationStack.pop())
                }

                let currResult:number = 0

                try{
                    currResult = calculateSegment(calcSegment.reverse())

                } catch(error) {
                    throw error
                }

                calculationStack.pop()//Pop "("
                calculationStack.push(currResult)
                console.log(calculationStack)

            } else {
                calculationStack.push(formula[idx])
            }
        }

        //por fim chamar a formula final no calculo de novo e retornar o valor
        try {
            result = calculateSegment(calculationStack)
        } catch(error) {
            throw error
        }


    } else {
        
        try{
            result = calculateSegment(formula)
        } catch(error) {
            throw error
        }
    }



    return result
}