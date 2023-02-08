import React, { useState } from 'react';
import 'App.css';

const App = () => {
    const [todoList, setTodoList] = useState([
        { id: 0, title: '음식', desc: '피자먹기', isDone: false },
        { id: 1, title: '고용센터', desc: '택시', isDone: false },
    ]);

    //Input state
    const [todoInputTitle, setTodoInputTitle] = useState('');
    const [todoInputDesc, setTodoInputDesc] = useState('');
    const titleChangeHandler = (e) => setTodoInputTitle(e.target.value);
    const descChangeHandler = (e) => setTodoInputDesc(e.target.value);

    // Add button click
    const submitBtnHandler = () => {
        const newObj = {
            id: Date.now(),
            title: todoInputTitle,
            desc: todoInputDesc,
            isDone: false,
        };
        setTodoList([...todoList, newObj]);
        setTodoInputTitle('');
        setTodoInputDesc('');
    };

    //Remove button click
    const removeButtonHandler = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id));
    };

    return (
        <div className="root">
            <div className="layout">
                <div className="container">
                    <div>오늘의</div>
                    <div>할일</div>
                </div>
                <div className="input-group">
                    <label className="form-label">제목</label>
                    <input value={'todoInputTitle'} onChange={titleChangeHandler} />
                    <label className="form-label">내용</label>
                    <input value={todoInputDesc} onChange={descChangeHandler} />
                    <button onClick={submitBtnHandler}>추가</button>
                </div>

                <div className="todoBox__container">
                    {todoList.map((x, i) => {
                        return (
                            <div key={i} className="todoBox">
                                <h1>{x.title}</h1>
                                <h3>{x.desc}</h3>
                                <button onClick={() => removeButtonHandler(x.id)}>삭제</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;
