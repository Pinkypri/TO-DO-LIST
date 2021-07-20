import React from 'react'

const ToDoItem = ({text,onClick}) => {
    return (
        <>
      
        <li onClick={onClick}>{text}</li>    
        </>
    )
}

export default ToDoItem
