import './App.css';
import { useState } from "react";



function App() {
const [todoItem, setTodoItem] = useState('')
const [list, setList] = useState([])


const todoUpdate = (e) =>{
  setTodoItem(e.target.value)
}

const click = ()=> {
  if (!todoItem ){
    alert('Enter something')
    return;
    
}

// console.log(todoItem)
const item = {
  id : Math.floor(Math.random()*500),
  value: todoItem,
  done: false
}
  setList(oldList => [...oldList,item])
  setTodoItem("")
 
}



const handleKeyDown = (e) => {
//   if (!todoItem ){
//     alert('Enter something')
//     return;
    
// }

  const item = {
    id : Math.floor(Math.random()*500),
    value: todoItem,
    done: false
  }

  
  if (e.key === 'Enter') {
    setList(oldList => [...oldList,item])
    setTodoItem("")
  }
};

const deleted = (index) => {
    let newArray = list.filter((item, i) => i !== index)
    setList(newArray)
}

const strike = (index) => {
    setList(
      list.map(( item, i) => {
      if(i === index ){
        // console.log(item.index)
        return { value: item.value, done: !item.done };
      }
      // console.log(item1)
      return item;
     
    }))

}


  return (
    <div className='container'>
    <div className="heading">
      
         {/* Header */}

        <h2>To-do List</h2>

            {/* Input todo & button */}
        <div className='Header'>
          <input
          onKeyDown={handleKeyDown}
          value={todoItem} placeholder={'Write Something ...'} onChange={todoUpdate}/>
          <button className='add' onClick={click}>Add</button>
        </div>

        
        {/* List all Items */}



        {list.map((item, index) =>{ 
          return(
            <div key={index} >
              <span style={{ textDecoration: item.done ? "line-through" : "none" }}>{item.value}</span>  
              <button className='strike' onClick={() =>strike(index)} >✅</button>
              <button className='del' onClick={() =>deleted(index)} >❎</button>
            
           
             </div>
          ) })}
      
    </div>
    </div>
  );
}

export default App;
