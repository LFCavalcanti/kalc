import { useSetRecoilState } from "recoil"
import { displayFormula } from "../atom"

export const useSetDisplayFormula = () => {

    const setDisplayFormula = useSetRecoilState(displayFormula)

    return (currFormula?:string) => {

            setDisplayFormula((currFormula) ? currFormula : '')
            
    }
}