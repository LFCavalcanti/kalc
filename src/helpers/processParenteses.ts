export default function processParenteses(formula: string[]){

    let len = formula.length
    let returnList:any[] = []
    let controlStack:any[] = []

    for(let idx = 0; idx < len; idx++){

        if(formula[idx] === "("){

            controlStack.push(["(", idx])

        } else if (formula[idx] === ")"){

            if(!controlStack.length) throw `Invalid parenteses at position ${idx +1}`

            let [openChar, openPosition] = controlStack.pop()

            returnList.push([openPosition, idx])
            //console.log(returnList)

        }

        //console.log(controlStack)

    }

    if(controlStack.length) throw 'Invalid parenteses pairs'

    return returnList


}