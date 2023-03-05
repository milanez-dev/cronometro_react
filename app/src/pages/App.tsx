import React from 'react';
import Form from '../components/forms/form';
import List from '../components/list';
import style from './styles.module.scss';
import Timer from "../components/timer";


function App() {
    return (
        <div className={style.AppStyle}>
            <Form />
            <Timer />
            <List />
        </div>
    );
}

export default App;
