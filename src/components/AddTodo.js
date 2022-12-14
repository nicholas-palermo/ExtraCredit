import { useState } from "react";

const AddTodo = (props) => {

    const [inputValue, setInputValue] = useState('');

    const formSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        props.adder(inputValue);
        setInputValue('');
    }

    const updateInputValue = (e) => {
        setInputValue(e.target.value);
    }


    return <form onSubmit={formSubmit} className="addToDoForm">

        <label className="inputLabel" htmlFor="todo">Enter item:</label>
        <input
            className="inputBox" 
            type="text" 
            id="todo" 
            onChange={updateInputValue} 
            value={inputValue}
            />
        <input className="submitButton" type="submit" />

    </form>;
}

export default AddTodo;