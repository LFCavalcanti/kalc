import { useSetRecoilState } from "recoil"
import { displayFormula } from "../atom"

const useSetDisplayFormula = () => {

    const setDisplayFormula = useSetRecoilState(displayFormula)

    return (currFormula?:string) => {

            setDisplayFormula((currFormula) ? currFormula : '')
            
    }
}

export default useSetDisplayFormula