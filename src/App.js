import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [todoInputTitle, setTodoInputTitle] = useState('안녕하세요');
    const [todoInputDesc, setTodoInputDesc] = useState('');
    const titleChangeHandler = (e) => {
        setTodoInputTitle(e.target.value);
    };

    const descChangeHandler = (e) => {
        setTodoInputTitle(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={todoInputTitle} onChange={titleChangeHandler} />
            </div>
            <div>
                <input value={todoInputDesc} onChange={descChangeHandler} />
            </div>
            <button onClick="">추가하기</button>
        </div>
    );
};

export default App;
