이승민(3조, React)
22:51 PM
import { useState } from "react";

function App() {
return (
<div>
<Todo />
</div>
);
}

const Todo = () => {
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [todo, setTodo] = useState([
//{ id: 1, title: "제목입니다", content: "내용입니다", isDone: false },
//{ id: 2, title: "스파르타", content: "할수있다", isDone: false },
//const [value,setValue]=useState(초기값)
]);

const onAddTodo = () => {
if (title === "" && content === "") return;
let newData = {
id: todo.length + 1,
title: title,
content: content,
isDone: false,
};
let copy = [...todo, newData];
setTodo(copy);
};

const onDeleteTodo = (id) => {
const newArray = todo.filter((td) => td.id !== id);
setTodo(newArray);
console.log(id);
};

const onFinishTodo = (id) => {
const idx = todo.findIndex((td) => td.id === id);
let copy = [...todo];
copy[idx].isDone = !copy[idx].isDone;
setTodo(copy);
};

return (
<div>
<div
style={{
display: "flex",
alignitems: "center",
border: "1px solid #ddd",
height: "30px",
padding: "0 20px",
justifycontent: "spacebetween",
}}
>
My Todo List
</div>
<div
style={{
backgroundColor: "skyblue",
borderRadius: "12px",
padding: "30px",
}}
>
<span>제목</span>
<input
value={title}
onChange={(event) => setTitle(event.target.value)}
style={{
marginRight: "20px",
borderRadius: "7px",
border: "1px solid #ddd",
}}
/>
<span>내용</span>
<input
value={content}
onChange={(event) => setContent(event.target.value)}
style={{
marginRight: "200px",
borderRadius: "7px",
border: "1px solid #ddd",
}}
/>
<button
onClick={onAddTodo}
style={{
background: "lightblue",
float: "right",
borderRadius: "7px",
}}
>
추가하기
</button>
</div>

<br />

<div>
<div>
<h1>working..</h1>
<div style={{ display: "flex" }}>
{todo.map(
(td) =>
td.isDone === false && (
//&&앞에 false면 무조껀 false
<TodoCard
td={td}
onDeleteTodo={onDeleteTodo}
onFinishTodo={onFinishTodo}
/>
)
)}
</div>
</div>
<div>
<h1>done..</h1>
<div style={{ display: "flex" }}>
{todo.map((td) =>
td.isDone === true ? (
<TodoCard
td={td}
onDeleteTodo={onDeleteTodo}
onFinishTodo={onFinishTodo}
/>
) : null
)}
</div>
</div>
</div>
</div>
);
};

const TodoCard = (props) => {
const { td, onDeleteTodo, onFinishTodo } = props;
return (
<div
style={{
border: "4px solid #39c5e1",
borderRadius: "20px",
backgroundColor: "skyblue",
width: "300px",
padding: "24px 24px 24px",
}}
>
<h2>{td.title}</h2>
<p>{td.content}</p>
<div style={{ display: "flex" }}>
<button onClick={() => onFinishTodo(td.id)}>완료하기</button>
<button onClick={() => onDeleteTodo(td.id)}>삭제하기</button>
</div>
</div>
);
};

export default App;