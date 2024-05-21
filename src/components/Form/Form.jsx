import React from 'react';
import './Form.css'

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
                <option value={'physical'}>Рассылка в Телеграм</option>
                <option value={'physical'}>Увидел в канале</option>
                <option value={'physical'}>Интернет</option>
            </select>

        </div>
    );
};
