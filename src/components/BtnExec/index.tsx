import styles from './BtnExec.module.scss'

interface props {
    text: string
}

export default function BtnExec({
    text = 'Botão'
}: props){
    return (
        <button className={styles.btnExec}>{text}</button>
    )
}