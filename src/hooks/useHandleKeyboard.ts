import operationsHandler from "../helpers/operationsHandler"
import useCurrElement from "../state/hooks/useCurrElement"
import useDisplayFormula from "../state/hooks/useDisplayFormula"
import useDisplayResult from "../state/hooks/useDisplayResult"
import useCalcFormula from "../state/hooks/useCalcFormula"
import usePopCalcFormula from "../state/hooks/usePopCalcFormula"
import usePushCalcFormula from "../state/hooks/usePushCalcFormula"
import useSetCurrElement from "../state/hooks/useSetCurrElement"
import useSetDisplayFormula from "../state/hooks/useSetDisplayFormula"
import useSetDisplayResult from "../state/hooks/useSetDisplayResult"
import { useDisplayErrorMsg } from "../state/hooks/useDisplayErrorMsg"

const useHandleKeyboard = () => {

    const displayFormula = useDisplayFormula()
    const setDisplayFormula = useSetDisplayFormula()

    const currElement = useCurrElement()
    const setCurrElement = useSetCurrElement()

    const displayResult = useDisplayResult()
    const setDisplayResult = useSetDisplayResult()

    const calcFormula = useCalcFormula()
    const popCalcFormula = usePopCalcFormula()
    const pushCalcFormula = usePushCalcFormula()

    const displayError = useDisplayErrorMsg()


    return (keyPressed:string) => {

        let numReg = new RegExp(/[0-9]/)

        //NUMBERS
        if(numReg.test(keyPressed)){
            if(calcFormula[calcFormula.length -1] && calcFormula[calcFormula.length -1] === '!') return
            setDisplayFormula((!displayFormula) ? keyPressed : displayFormula + keyPressed)
            setCurrElement(currElement + keyPressed)
        }

        //SWITCH SIGNAL
        else if(keyPressed === 'NEG'){
            
            let currElementLen = currElement.length
            let tempElement = currElement
            
            if(currElement.includes('-')) {
                setCurrElement(tempElement.slice(1))
                setDisplayFormula(displayFormula.slice(0,(displayFormula.length - currElementLen)) + tempElement.slice(1))
                return
            }

            setCurrElement((currElementLen) ? '-' + tempElement : '-')
            setDisplayFormula((currElementLen) ? displayFormula.slice(0,(displayFormula.length - currElementLen)) + '-' + tempElement : displayFormula + '-')

        }

        //ERASE ALL
        else if(keyPressed === 'AC'){
            setDisplayFormula('')
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
            setDisplayFormula(displayFormula.slice(0, -charsToDel))
            
        }

        //COMMA
        else if (keyPressed === ',') {
            if(currElement.includes(',')) return
            let addComma = (!currElement) ? '0,' : keyPressed
            setDisplayFormula((!displayFormula) ? addComma : displayFormula + addComma)
            setCurrElement(currElement + addComma)
        }

        //PARENTESES
        else if(keyPressed === '(' || keyPressed === ')') {

            if(keyPressed === '(' && !calcFormula.length && !currElement){
                pushCalcFormula(keyPressed)
                setDisplayFormula(keyPressed)
                return
            }

            let currOperation = (currElement) ? currElement : calcFormula[calcFormula.length -1]
            if(operationsHandler(currOperation , keyPressed)){
                setDisplayFormula((!displayFormula) ? keyPressed : displayFormula + keyPressed)
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
                displayError('Elemento atual é inválido', 5000)
                return
            }

            if(!currElement && !testLast.test(calcFormula[calcFormula.length -1])){
                displayError(`Elemento anterior fórmula("${calcFormula[calcFormula.length -1]}") é inválido`, 5000)
                return
            }


            console.log('CALCULANDO')
            /*
            if(currElement) pushCalcFormula(currElement)
            let resultado = calculateFormula()
            */
        }

        //MATH OPERATIONS
        else {

            if((keyPressed === String.fromCharCode(8730) || keyPressed === String.fromCharCode(13266)) && !calcFormula.length && !currElement){
                pushCalcFormula(keyPressed)
                setDisplayFormula(keyPressed)
                return
            }

            let currOperation = (currElement) ? currElement : calcFormula[calcFormula.length -1]
            if(keyPressed === currOperation) return
            if(operationsHandler(currOperation , keyPressed)){
                setDisplayFormula((!displayFormula) ? keyPressed : displayFormula + keyPressed)
                if(currElement) pushCalcFormula(currElement)
                pushCalcFormula(keyPressed)
                setCurrElement('')
            }
            
        }

    }

}

export default useHandleKeyboard