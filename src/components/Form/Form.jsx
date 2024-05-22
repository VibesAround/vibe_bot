import React from 'react';
import './Form/Form.css'

const Form = () => {
    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Город'}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Имя'}
            />
            <select className={'select'}>
                <option value={'physical'}>Показал друг</option>
                <option value={'legal'}>Интернет</option>
            </select>

        </div>
    );
};

export default Form;