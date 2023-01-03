import styles from './BtnKeypad.module.scss'

interface props {
    text: string,
    variant?: string
}

export default function BtnKeypad({
    text = 'Botão',
    variant = 'num'
}: props){
    return (
        <button className={variant === 'op' ? styles.btnOp : styles.btnNum}>{text}</button>
    )
}