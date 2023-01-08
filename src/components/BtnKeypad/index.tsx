import useHandleKeyboard from '../../hooks/useHandleKeyboard'
import styles from './BtnKeypad.module.scss'

interface props {
    text: string,
    variant?: string,
}

export default function BtnKeypad({
    text = 'Botão',
    variant = 'num'
}: props){

    const handleClick = useHandleKeyboard()

    return (
        <button className={variant === 'op' ? styles.btnOp : styles.btnNum} onClick={() => handleClick(text)}>{text}</button>
    )
}