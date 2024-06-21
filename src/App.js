import React, { useState } from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([ ...todos, todo ]);
    };

    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="App">
            <h1>Todo <span> List</span></h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
        </div>
    );
}

export default App;
