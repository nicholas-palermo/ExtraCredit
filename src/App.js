import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState, useEffect } from 'react';
import lscache from 'lscache';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [todoList, setTodoList] = useState([]);

  const lscacheKey = 'currentList';


  //rerender
  useEffect(() => {
    let currentList = lscache.get(lscacheKey);
    if(!currentList){
      currentList = [];
    }
    setTodoList(currentList);
  }, []);


  //add a todo
  const addNewTodo = title => {
    if(!title){
      return;
    }
    const todoListClone = [...todoList];
    todoListClone.push({title: title});
    setTodoList(todoListClone);
    lscache.set(lscacheKey, todoListClone);
  }

  //remove a todo
  const removeToDo = title => {
    if(!title){
      return;
    }
    var toDoListClone = todoList.filter(todo => {
      return todo.title !== title
    })
    setTodoList(toDoListClone)
    lscache.set(lscacheKey, toDoListClone)
  }

  //reorder todos
  const reorderToDos = (title, direction) => {
    if(!title){
      return;
    }
    var todoIndex = todoList.findIndex(todo => {
      return todo.title === title;
    });
    var toDoListClone = todoList.filter(todo => {
      return todo.title !== title
    })
    if (direction === "up" && todoIndex !== 0) {
      toDoListClone.splice(todoIndex-1, 0, {title: title})
    } else if(direction ==="down" && todoIndex !== todoList.length - 1) {
      toDoListClone.splice(todoIndex+1, 0, {title: title})
    } else {
      toDoListClone.split(todoIndex, 0, {title: title})
    }
    setTodoList(toDoListClone)
    lscache.set(lscacheKey, toDoListClone)
  }
    


  return (
    <div className="App">
      <h1 className='title'>My To-Do List</h1>
      <div className='addTodo'>
        <AddTodo adder={addNewTodo} />
      </div>
      <div className='toDoList'>
        <TodoList todoList={todoList} removeToDo={removeToDo} reorderToDos={reorderToDos}/>
      </div>
      
    </div>
  );
}

export default App;
