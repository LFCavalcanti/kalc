import styles from './BtnClear.module.scss'

interface props {
    text: string,
    variant?: string
}

export default function BtnClear({
    text = 'Botão',
    variant = 'c'
}: props){
    return (
        <button className={variant === 'c' ? styles.btnC : styles.btnAc}>{text}</button>
    )
}