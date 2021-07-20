import React,{useState,useEffect} from 'react'
import InputArea from "./InputArea"
import ToDoItem from "./ToDoItem"

const App = () => {
const [items, setitems] = useState([])

useEffect(() => {
const items=localStorage.getItem("items");
setitems(JSON.parse(items));
}, []);

const addItems=(item)=>{
    setitems((currentitem)=>{
      localStorage.setItem("items",JSON.stringify([...currentitem,item]));
  return [...currentitem,item]
    
    });
    
  }
const deleteItem=(id)=>{
 setitems((currentitem)=>{
  let temp=currentitem.filter((item,index)=>{
     return index!==id;
   });
   localStorage.setItem("items",JSON.stringify(temp));
   return temp;
 }) ;
};
  return (
    <div className="container">
      <div className="heading">
        <h1>To-do list</h1>
      </div>
      <InputArea addItems={addItems}/>
      <div>
        <ul>
          {
            items.map((item,index)=>{
             return <ToDoItem key={index} text={item} index={index}
             onClick={()=>deleteItem(index)}/>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App


