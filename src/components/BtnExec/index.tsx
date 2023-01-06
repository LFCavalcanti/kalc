import styles from './BtnExec.module.scss'

interface props {
    text: string
    onClick:()=>void
}

export default function BtnExec({
    text = 'Botão',
    onClick
}: props){
    return (
        <button className={styles.btnExec} onClick={onClick}>{text}</button>
    )
}