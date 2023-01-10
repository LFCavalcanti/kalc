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


    return (keyPressed:string) => {

        //BUGS: 5!LOG
        //Add logic to keep the current formula element to deal with decimal separators(,.) and trigger operations and parenteses

        let numReg = new RegExp(/[0-9]/)

        if(numReg.test(keyPressed)){
            if(calcFormula[calcFormula.length -1] && calcFormula[calcFormula.length -1] === '!') return
            setDisplayFormula((!displayFormula) ? keyPressed : displayFormula + keyPressed)
            setCurrElement(currElement + keyPressed)
        }
        else if(keyPressed === 'AC'){
            setDisplayFormula('')
            setDisplayResult('0')
            setCurrElement('')
            popCalcFormula(true)
        }
        else if (keyPressed === 'C') {
            if(!currElement) setCurrElement(popCalcFormula())
            setCurrElement(currElement.slice(0,-1))
            setDisplayFormula(displayFormula.slice(0,-1))
        }
        else if (keyPressed === ',') {
            if(!currElement.includes(',')) {
                let addComma = (!currElement) ? '0' + keyPressed : keyPressed
                setDisplayFormula((!displayFormula) ? addComma : displayFormula + addComma)
                setCurrElement(currElement + addComma)
            }
        }
        else if(keyPressed === '(' || keyPressed === ')') {
            //Lidar com parenteses
        } else {
            //lidar com operações matemáticas
            //sempre que for operação checar se pressionado e atual são váldos
            if(keyPressed === calcFormula[calcFormula.length -1]) return
            if(operationsHandler((currElement) ? currElement : calcFormula[calcFormula.length -1] , keyPressed)){
                setDisplayFormula((!displayFormula) ? keyPressed : displayFormula + keyPressed)
                pushCalcFormula(currElement)
                pushCalcFormula(keyPressed)
                setCurrElement('')
            }
            
        }

    }

}

export default useHandleKeyboard