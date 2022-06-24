import React from "react";

const formInput = props =>(
    <div>
        <form onSubmit={props.add}>
            <input onChange={props.inputChange} placeholder="input your todo ..."/>
            <button onClick={props.add} type="submit">Add Todo</button>
        </form>
    </div>
);

export default formInput;