import React, { useState } from 'react';
import './App.css';

function App() {

const [toDos,setTodos] = useState([])
const [toDo,setTodo] = useState("")

const deleteHandler = (id)=>{
const updatedToDos=toDos.filter((obj)=>obj.id !== id)
//return updatedToDos
setTodos(updatedToDos)
}
const addToDo= ()=>{
  setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])
  setTodo("")
}

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e)=>setTodo(e.target.value)} placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" 
       // onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])}
       onClick={addToDo}
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj,id)=>{
          return(
            <div className="todo" key={id}>
            <div className="left">
              <input onChange={(e)=>{
                // console.log(e.target.value)
                // console.log(obj)
                setTodos(toDos.filter((obj2)=>{
                  if(obj2.id === obj.id){
                 obj2.status = e.target.checked
                }
                return obj2;
                }))
              }} type="checkbox" value={obj.status} name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times" onClick={()=>deleteHandler(obj.id)}></i>
            </div>
          </div>
          )
        })}

        {toDos.map((obj)=>{
          if(obj.status){
            return (<h1>{obj.text}</h1>)
          }
          return null;
        })}
       
      </div>
    </div>
  );
}

export default App;