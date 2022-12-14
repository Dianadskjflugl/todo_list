import React from 'react';
import './page.css';

const InputField = ({title, handleSubmit, handleInput }) => {

    return (
        <div>
            <input value={title}
                className='input'
                onChange={(e) => handleInput(e.target.value)}
                placeholder='Введите текст' />
            <button onClick={handleSubmit}>Добавить задачу</button>
        </div>
    );
}

export default InputField;