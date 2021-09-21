import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ToDoList></ToDoList>
    </div>
  );
}
function ToDoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() =>
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
    , [])
  return (
    <div>
      {
        todos.map(todo => <SingleTodo title={todo.title} completed={todo.completed}></SingleTodo>)
      }
    </div>
  )
}
function SingleTodo(props) {
  const { title, completed } = props;
  console.log(completed)
  return (
    <div className='blog'>
      <h1>Title: {title}</h1>
      <h5>Completed: {completed ? "true" : "false"}</h5>
    </div>
  )
}
/*
<Mobile></Mobile>
function Mobile() {
  const [charge, setCharge] = useState(100);
  const handleCharging = () => {
    const newCharge = charge - 10;

    if (charge > 0) {
      setCharge(newCharge);
    }
  }
  return (
    <div>
      <h1>Mobile Charge:{charge}%</h1>
      <button onClick={handleCharging}>Battery Down</button>
    </div>
  )
}

<Blog heading="What's coming in React 18" author="Adward Waltom"></Blog>
      <Blog heading="React seems very interesting" author="Kate Waltom"></Blog>
      <Blog heading="Fundamental Javascript" author="Henry Charles"></Blog>
function Blog(props) {
  console.log(props)
  const styleH2 = {
    color: 'magenta',
    backgroundColor: 'gray',
    fontSize: '30px'
  }
  return (
    <div>
      <article className='blog'>
        <h2 style={styleH2}>{props.heading}</h2>
        <h5>Author: {props.author}</h5>
        <p style={{ color: 'blue' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde illum distinctio repellat rem maxime laboriosam voluptatem asperiores laudantium animi in molestiae architecto, nisi deleniti harum explicabo excepturi debitis quidem!</p>
      </article>
    </div>
  )
}
*/
export default App;
