import useHandleKeyboard from '../../hooks/useHandleKeyboard'
import styles from './BtnKeypad.module.scss'

interface props {
    children: string,
    operation: string,
    variant?: string,
}

export default function BtnKeypad({
    children = 'Botão',
    operation,
    variant = 'num',
}: props){

    const handleClick = useHandleKeyboard()

    return (
        <button role={'button'} className={variant === 'op' ? styles.btnOp : styles.btnNum} onClick={() => handleClick(operation)}>{children}</button>
    )
}