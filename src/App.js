import {useState,useRef,useEffect} from 'react'
import './App.css';
import Todos from './Todos.js';
import { v4 as uuidv4 } from 'uuid';
import MouseTracker from './MouseTracker';
import ThemeTutorial from './ThemeToggle';

function App() {
  //const [inputValue,setinput] = useState(''); // it will return only the value of input object
  const LOCAL_STORAGE_KEY = 'todosApp.todos'
  
  const newTodo = useRef(); //it will return the actual input object

  const [todos, settodos] = useState([]);

  const handleAddTodo = (e) =>{
    const newTodoName = newTodo.current.value;

    if (newTodoName === '') return;

    settodos(prevTodos =>{
      return [...todos,{id:uuidv4(),name:newTodoName,isCompeleted:false}]
    })

    newTodo.current.value = null;
    // setinput('')
  }
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) settodos(storedTodos)
  },[]) // array is empty so that it will only run once when the app is loaded
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  }, [todos]) // it will trigger when ever the todos array is changed

  const clearCompleted = (e) =>{
    const newTodos = todos.filter(todo => !todo.isCompeleted)
    settodos(newTodos);
  }

  function toggleTodo(id){
    const copiedTodos = [...todos];
    const todo = copiedTodos.find(todo => todo.id === id);
    todo.isCompeleted = !todo.isCompeleted;
    settodos(copiedTodos);
  }

  return (
    <>
    <div className="App">
      <header className="App-header">
        
      </header>
      <div className="Todos">
        <Todos toggleTodo={toggleTodo} todos={todos}/>
        {/* <input type='text' value={inputValue} onChange={(e) => setinput(e.target.value)}/> */}
        <input type='text' ref={newTodo}/>
        <button onClick={handleAddTodo}>Add Todo</button> 
        <button onClick={clearCompleted}>Clear Compeleted</button>
        <div>{todos.filter(todo => !todo.isCompeleted).length} Left Todo</div>
      </div>
    </div>
    <MouseTracker/>
    <ThemeTutorial/>
    </>
  );
}

export default App;
