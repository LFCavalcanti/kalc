import styles from './BtnExec.module.scss'
import useHandleKeyboard from '../../hooks/useHandleKeyboard'

interface props {
    text: string
}

export default function BtnExec({
    text = 'Botão'
}: props){

    const handleClick = useHandleKeyboard()

    return (
        <button role={'button'} className={styles.btnExec} onClick={() => handleClick('=')}>{text}</button>
    )
}