import { useSetRecoilState } from "recoil"
import { displayError } from "../atom"

export const useDisplayErrorMsg = () => {

    const setMensagem = useSetRecoilState(displayError)

    return (
            message: string,
            timeToDisplay: number
        ) => {
        setMensagem(message)
        setTimeout(() => {
            setMensagem('')
        }, timeToDisplay)

    }

}