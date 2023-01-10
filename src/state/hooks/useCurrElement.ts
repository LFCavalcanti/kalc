import { useRecoilValue } from "recoil"
import { currElement } from "../atom"

const useCurrElement = () => {
    return useRecoilValue(currElement)
}

export default useCurrElement