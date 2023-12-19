import React, { useState } from 'react'
import "./App.css"
import Todo from './Todo';
export default function App() {
  const [inputList, setInputList]=useState("Buy mango");

  const [item,setItem]=useState([]);


  const itemEvent=(e)=>{
    setInputList(e.target.value)
  };

  const listOfitem=()=>{
    setItem(   (alreadysetItemsArrayData) => {
      return[...alreadysetItemsArrayData, inputList];
    })
  }
  

  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>Todo List</h1>
          <br />
          <input type="text" placeholder="Add a item" onChange={itemEvent} />

          <button onClick={listOfitem}>+</button>
          <ol>
            {inputList}


            { 
            item.map( (itemlistvalue)=>{
              return <Todo text={itemlistvalue}/>
            })
            }


          </ol>
        </div>
      </div>
    
    </>
    )
}
