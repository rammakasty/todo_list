import React, { useState } from 'react';
import 'App.css';

const App = () => {
    const [todoList, setTodoList] = useState([
        { id: 0, title: '음식', desc: '피자먹기', isDone: false },
        {
            id: 1,
            title: '고용센터 다녀오기',
            desc: '택시,버스',
            isDone: false,
        },
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
    };

    // Remove button click
    const removeButtonHandler = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id));
    };

    return (
        <div className="root">
            <div className="layout">
                <div class="container">
                    <div>오늘의</div>
                    <div>할일</div>
                </div>
                <form className="add-form">
                    <div className="input-group">
                        <label class="form-label">제목</label>
                        <input value={todoInputTitle} onChange={titleChangeHandler} />
                        <label class="form-label">내용</label>
                        <input value={todoInputDesc} onChange={descChangeHandler} />
                    </div>

                    <button onClick={submitBtnHandler}>Add</button>
                </form>

                <div className="todoBox__container">
                    {todoList.map((x) => {
                        return (
                            <div className="todoBox">
                                <h1>{x.title}</h1>
                                <h3>{x.desc}</h3>
                                <button onClick={() => removeButtonHandler(x.id)}>Remove</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;
