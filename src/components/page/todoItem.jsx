import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodos, toggleStatus } from '../../store/todoSlice';
import './page.css';

const TodoItem = ({ title, id, completed }) => {

    const dispatch = useDispatch()

    return (
        <li>
            <div className="element_one">
                <input type='checkbox'
                    className='input'
                    checked={completed}
                    onChange={() => dispatch(toggleStatus(id))} />
                <span className='todo_text'>{title}</span>
            </div>
            <div className="element_two">
                <span className="delete" onClick={() => dispatch(deleteTodos(id))}>&times;</span>
            </div>
        </li>
    );
}

export default TodoItem;
