import { useState } from "react";
import trashIcon from "./assets/trashcan-icon.svg";
import upIcon from "./assets/up-arrow.svg";
import downIcon from "./assets/down-arrow.svg";
import './App.css'

const Main_ToDoList = () => {
    
  const [List, setList] = useState([]);
  const [todo, setTodo] = useState("");
  const [time, setTime] = useState('');

  const addAct = () => {

    const newtoDoList = {
      Activity: todo,
      Time_of_Act: time
    }
    if(todo.trim() !== '' && time.trim() !== '' ){
      document.getElementById("newtime").value = '';
      document.getElementById("newact").value = '';
      setTodo('');
      setTime('');
      setList(L => [...L, newtoDoList]);
    }
  }

  const NewAct = (event) => {
      setTodo(event.target.value);
  }

  const NewTime = (event) => {
      setTime(event.target.value);
  } 

  const Delete = (index) => {
    const deletedTask = List.filter((e, i) => i !== index);
    setList(deletedTask);
  }

  const MoveUp = (index) => {
    
    if(index > 0){
      const movedTask = [...List];
      [movedTask[index], movedTask[index - 1]] =  [movedTask[index - 1], movedTask[index]];
      setList(movedTask);
    }
  }

  const MoveDown = (index) => {

    if(index < List.length - 1){
      const movedTask = [...List];
      [movedTask[index], movedTask[index + 1]] =  [movedTask[index + 1], movedTask[index]];
      setList(movedTask);
    }
  }

  return(
    <>
      <div className='todo-container'>
      <div className='inputan'>
        <input 
          type="text" 
          id='newact' 
          className='new-item' 
          placeholder='Apa yang ingin kamu lakukan hari ini?'
          minLength={1}
          onChange={NewAct}
        />
        <input 
          type='time' 
          id='newtime'
          onChange={NewTime}
          onKeyDown={(e) => e.key === 'Enter' && addAct()}
        />
        
        <div className='tombolan-add'>
          <button className='delete-all' onClick={addAct}>add</button>
        </div>

      </div>
          <ul className='todo-list'>
            {List.map((act, index) => 
              <li key={index}>

                <span className='act-text'>{act.Activity}</span>
                <span className='time-text'>
                  {act.Time_of_Act}
                </span>

                <button 
                onClick={() => Delete(index)}>
                  <img src={trashIcon} alt="delete" height={17}/>
                </button>

                <button 
                onClick={() => MoveUp(index)}>
                  <img src={upIcon} alt="up" height={17} />
                </button>

                <button 
                onClick={() => MoveDown(index)}>
                  <img src={downIcon} alt="down" height={17} />
                </button>

              </li>
              )}
          </ul>

      </div>

    </>
  )
}

export default Main_ToDoList