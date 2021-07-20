import React,{useState} from 'react'

const InputArea = ({addItems}) => {
const [inputText, setinputText] = useState("");

const handleChange=(event)=>{
setinputText(event.target.value);
}
const addItem=()=>{
    if(inputText.trim()!==""){
    addItems(inputText)
    setinputText("");
    }
    return;
}

    return (
        <div className="form">
      
            <input type="text" onChange={handleChange} value={inputText}/>
            <button onClick={addItem}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea
