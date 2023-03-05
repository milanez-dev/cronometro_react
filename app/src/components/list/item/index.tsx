import style from "../style.module.scss";
import Task from "../../../models/Task";

export default function Item({subject, time}: Task) {
    return (
        <li className={style.item}>
            <h3>{subject}</h3>
            <span>{time}</span>
        </li>
    )
}