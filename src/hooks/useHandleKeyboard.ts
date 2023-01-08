import { useDisplayFormula } from "../state/hooks/useDisplayFormula"
import { useSetDisplayFormula } from "../state/hooks/useSetDisplayFormula"

const useHandleKeyboard = () => {
    const displayFormula = useDisplayFormula()
    const setDisplayFormula = useSetDisplayFormula()

    return (keyPressed:string) => {

        let newValue = ''

        if(keyPressed === 'AC'){
            newValue = ''
        } else if (keyPressed === 'C') {
            newValue = displayFormula.slice(0, -1)
        } else {
            newValue = (displayFormula === '0') ? keyPressed : displayFormula + keyPressed
        }

        setDisplayFormula(newValue || '0')

    }

}

export default useHandleKeyboard