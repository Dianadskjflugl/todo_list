import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/page/todoList';
import Nav from './components/nav/nav';
import InputField from './components/page/inputField';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, fetchTodos } from './store/todoSlice';

function App() {
  const [title, setTitle] = useState('')
  const { status, error } = useSelector(state => state.todos)

  const dispatch = useDispatch()

  const AddTask = () => {
    if (!title == '') {
      dispatch(addNewTodo(title))
      setTitle('')
    }
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className='App'>
      <Nav />
      <div className='content'>
        <InputField title={title} handleInput={setTitle} handleSubmit={AddTask} />
        {status === 'loading' && <h2>Идет загрузка...</h2>}
        {error && <h2>Произошла ошибка!</h2>}
        <TodoList />
      </div>
    </div>
  );
}

export default App;

