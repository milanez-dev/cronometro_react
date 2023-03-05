import style from './style.module.scss';

interface Props {
    children: React.ReactNode,
    propriedade?: string,
    segundaPropriedade?: string,
}

const Button = (props: Props) => {
    return (
        <button className={style.botao}>
            {props.children}
        </button>
    )

}

export default Button;