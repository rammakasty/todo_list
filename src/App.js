import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [todoTitle, setTodoTitle] = useState([
        { id: 0, title: 'React 강의 듣기', desc: '내일 까지 완강 목표', isDone: false },
        { id: 1, title: 'React 강의 듣기22', desc: '내일 까지 완강 목표22', isDone: false },
    ]);

    //Input state
    const [todoInputTitle, setTodoInputTitle] = useState('');
    const [todoInputDesc, setTodoInputDesc] = useState('');
    const titleChangeHandler = (e) => setTodoInputTitle(e.target.value);
    const descChangeHandler = (e) => setTodoInputDesc(e.target.value);

    //button handler
    const submitBtnHandler = () => {
        const newObj = {
            id: Date.now(),
            title: todoInputTitle,
            desc: todoInputDesc,
            isDone: false,
        };
        setTodoTitle([...todoTitle, newObj]);
    };

    return (
        <div>
            <div>
                <input value={todoInputTitle} onChange={titleChangeHandler} />
            </div>
            <div>
                <input value={todoInputDesc} onChange={descChangeHandler} />
            </div>
            <button onClick={submitBtnHandler}>추가하기</button>

            <div className="todoBox__container">
                {todoTitle.map((x) => {
                    return (
                        <div className="todoBox">
                            <h1>{x.title}</h1>
                            <h3>{x.desc}</h3>
                            <button>삭제하기</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default App;
