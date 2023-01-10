import useHandleKeyboard from '../../hooks/useHandleKeyboard'
import styles from './BtnClear.module.scss'

interface props {
    text: string,
    variant?: string
}

export default function BtnClear({
    text = 'Botão',
    variant = 'c'
}: props){

    const handleClick = useHandleKeyboard()
    const operation = (variant === 'c') ? 'C' : 'AC'

    return (
        <button className={variant === 'c' ? styles.btnC : styles.btnAc}
                onClick={() => handleClick(operation)}
        >{text}</button>
    )
}