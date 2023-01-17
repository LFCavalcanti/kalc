import operationsHandler from "../helpers/operationsHandler"
import useCurrElement from "../state/hooks/useCurrElement"
import useDisplayResult from "../state/hooks/useDisplayResult"
import useCalcFormula from "../state/hooks/useCalcFormula"
import usePopCalcFormula from "../state/hooks/usePopCalcFormula"
import usePushCalcFormula from "../state/hooks/usePushCalcFormula"
import useSetCurrElement from "../state/hooks/useSetCurrElement"
import useSetDisplayResult from "../state/hooks/useSetDisplayResult"
import { useDisplayErrorMsg } from "../state/hooks/useDisplayErrorMsg"
import calculateFormula from "../helpers/calculateFormula"

const useHandleKeyboard = () => {

    const currElement = useCurrElement()
    const setCurrElement = useSetCurrElement()

    const displayResult = useDisplayResult()
    const setDisplayResult = useSetDisplayResult()

    const calcFormula = useCalcFormula()
    const popCalcFormula = usePopCalcFormula()
    const pushCalcFormula = usePushCalcFormula()

    const displayError = useDisplayErrorMsg()

    return (keyPressed:string) => {

        if(displayResult != '0' && keyPressed !== 'AC'){

            if(keyPressed === "=" || keyPressed === 'C' ){
                return
            }

            popCalcFormula(true)
            pushCalcFormula(displayResult)            
            setDisplayResult('0')

        }

        let numReg = new RegExp(/[0-9]/)

        //NUMBERS
        if(numReg.test(keyPressed)){
            if(calcFormula[calcFormula.length -1] && calcFormula[calcFormula.length -1] === '!') return
            setCurrElement(currElement + keyPressed)
        }

        //SWITCH SIGNAL
        else if(keyPressed === 'NEG'){
            
            let currElementLen = currElement.length
            let tempElement = currElement
            
            if(currElement.includes('-')) {
                setCurrElement(tempElement.slice(1))
                return
            }

            setCurrElement((currElementLen) ? '-' + tempElement : '-')

        }

        //ERASE ALL
        else if(keyPressed === 'AC'){
            setDisplayResult('0')
            setCurrElement('')
            popCalcFormula(true)
        }

        //DELETE CHAR FROM NUMBER OR OPERATION
        else if (keyPressed === 'C') {

            let charsToDel = 1
            let tmpCurrElement = (currElement) ? currElement : popCalcFormula()

            if(!tmpCurrElement) return

            if(!numReg.test(tmpCurrElement)) charsToDel = tmpCurrElement.length
            setCurrElement(tmpCurrElement.slice(0, -charsToDel))
            
        }

        //COMMA
        else if (keyPressed === ',') {
            if(currElement.includes(',')) return
            let addComma = (!currElement) ? '0,' : keyPressed
            setCurrElement(currElement + addComma)
        }

        //PARENTESES
        else if(keyPressed === '(' || keyPressed === ')') {

            if(keyPressed === '(' && !calcFormula.length && !currElement){
                pushCalcFormula(keyPressed)
                return
            }

            let currOperation = (currElement) ? currElement : calcFormula[calcFormula.length -1]
            if(operationsHandler(currOperation , keyPressed)){
                if(currElement) pushCalcFormula(currElement)
                pushCalcFormula(keyPressed)
                setCurrElement('')
            }
        }

        //CALCULATE FORMULA
        else if(keyPressed === '='){

            let testElement = new RegExp(/[0-9]{1,}/)
            let testLast = new RegExp(/[0-9)!]/)

            if(currElement && !testElement.test(currElement)) {
                displayError('Current element is invalid', 5000)
                return
            }

            if(!currElement && !testLast.test(calcFormula[calcFormula.length -1])){
                displayError(`Previous formula element ${calcFormula[calcFormula.length -1]} makes it invalid`, 5000)
                return
            }

            let result = 0

            try {
                if(currElement){
                    result = calculateFormula([...calcFormula, currElement])
                }else{
                    result = calculateFormula(calcFormula.slice())
                }
            } catch(error) {
                displayError(`${error}`, 5000)
            }

            pushCalcFormula(currElement)
            setCurrElement('')
            setDisplayResult(result.toString())
            return

        }

        //MATH OPERATIONS
        else {

            //RADIC(8730) AND LOGe(13266)
            if((keyPressed === String.fromCharCode(8730) || keyPressed === String.fromCharCode(13266)) && !calcFormula.length && !currElement){
                pushCalcFormula(keyPressed)
                return
            }

            let currOperation = (currElement) ? currElement : calcFormula[calcFormula.length -1]
            if(keyPressed === currOperation) return
            if(operationsHandler(currOperation , keyPressed)){
                if(currElement) pushCalcFormula(currElement)
                pushCalcFormula(keyPressed)
                setCurrElement('')
            }
            
        }

    }

}

export default useHandleKeyboard