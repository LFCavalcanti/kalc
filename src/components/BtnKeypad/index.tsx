import useHandleKeyboard from '../../hooks/useHandleKeyboard'
import styles from './BtnKeypad.module.scss'

interface props {
    text: string,
    operation: string,
    variant?: string,
}

export default function BtnKeypad({
    text = 'Botão',
    operation,
    variant = 'num'
}: props){

    const handleClick = useHandleKeyboard()

    return (
        <button role={'button'} className={variant === 'op' ? styles.btnOp : styles.btnNum} onClick={() => handleClick(operation)}>{text}</button>
    )
}