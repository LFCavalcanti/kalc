import { MouseEventHandler } from 'react'
import { useDisplayFormula } from '../../state/hooks/useDisplayFormula'
import { useSetDisplayFormula } from '../../state/hooks/useSetDisplayFormula'
import styles from './BtnKeypad.module.scss'

interface props {
    text: string,
    variant?: string,
}

export default function BtnKeypad({
    text = 'Botão',
    variant = 'num'
}: props){

    const setDisplayFormula = useSetDisplayFormula()
    const displayFormula = useDisplayFormula()

    const handleClick = (value: string) => {

        let currFormula = displayFormula

        if(currFormula === '0'){
            currFormula = value
        } else {
            currFormula = currFormula + value
        }

        setDisplayFormula(currFormula)
    }

    return (
        <button className={variant === 'op' ? styles.btnOp : styles.btnNum} onClick={() => handleClick(text)}>{text}</button>
    )
}