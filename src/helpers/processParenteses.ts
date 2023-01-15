export default function processParenteses(formula: string[]){

    let len = formula.length
    let controlStack:any[] = []
    let haveParenteses = false

    for(let idx = 0; idx < len; idx++){

        if(formula[idx] === "("){

            controlStack.push(idx)
            if(!haveParenteses) haveParenteses = true

        } else if (formula[idx] === ")"){

            if(!controlStack.length) throw `Invalid parenteses at position ${idx +1}`

            controlStack.pop()

        }

    }

    if(controlStack.length) throw 'Invalid parenteses pairs'

    return haveParenteses

}