import React from "react";
import style from "./style.module.scss";
import Item from "./item";
import Task from "../../models/Task";

function List() {

    const tasks = [
        {
            subject: 'React',
            time: '02:00:00'
        },
        {
            subject: 'Javascript',
            time: '01:27:00'
        },
        {
            subject: 'Typescript',
            time: '05:12:27'
        }
    ]

    return (
        <aside className={style.listaTarefas}>
            <h2>Today's Studies</h2>
            <ul>
                {tasks.map((task: Task, index) =>
                    <Item key={index}
                          subject={task.subject}
                          time={task.time}
                    />
                )}
            </ul>
        </aside>
    )
}


export default List;