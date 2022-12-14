import React from 'react';
import './page.css';
import TodoItem from './todoItem';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);

    return (
        <div className='block'>
            <h1>Список задач</h1>
            <ul>
            <TransitionGroup>
                {todos.map(todo =>
                    <CSSTransition
                        key={todo.id}
                        timeout={500}
                        classNames="item">
                        <TodoItem key={todo.id} completed={todo.completed} title={todo.title} id={todo.id}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

            </ul>
        </div>
    );
}

export default TodoList;