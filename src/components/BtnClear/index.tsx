import useHandleKeyboard from '../../hooks/useHandleKeyboard'
import styles from './BtnClear.module.scss'

interface props {
    children: string,
    variant?: string
}

export default function BtnClear({
    children = 'Botão',
    variant = 'c'
}: props){

    const handleClick = useHandleKeyboard()
    const operation = (variant === 'c') ? 'C' : 'AC'

    return (
        <button role={'button'} className={variant === 'c' ? styles.btnC : styles.btnAc}
                onClick={() => handleClick(operation)}
        >{children}</button>
    )
}