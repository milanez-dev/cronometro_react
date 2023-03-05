import Button from "../buttons";
import Clock from "./clock";
import style from "./timer.module.scss";

export default function Timer() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicio o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock/>
            </div>
            <Button>Start</Button>
        </div>
    )
}