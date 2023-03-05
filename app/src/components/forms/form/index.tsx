import React from "react";
import Button from "../../buttons";
import style from '../style.module.scss';

class Form extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Add a new study</label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="What do you want to study"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">Time</label>
                    <input
                        type="time"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button
                    propriedade="Alguma coisa"
                >Usando any</Button>
            </form>
        )
    }
}

export default Form;