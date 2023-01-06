import { useSetRecoilState } from "recoil"
import { displayError } from "../atom"

export const displayErrorMsg = () => {

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