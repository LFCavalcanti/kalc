import styles from './BtnExec.module.scss'
import useHandleKeyboard from '../../hooks/useHandleKeyboard'

interface props {
    children: string
}

export default function BtnExec({
    children = 'Botão'
}: props){

    const handleClick = useHandleKeyboard()

    return (
        <button role={'button'} className={styles.btnExec} onClick={() => handleClick('=')}>{children}</button>
    )
}