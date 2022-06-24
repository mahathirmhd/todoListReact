import React from "react";
import Button from "../button/Button";
import Style from './TodoList.module.css';
import Todo from "../../container/todo/todo";

const todoList = props =>(
    <div className={Style.TodoList}>
        <ul>
            {props.editStatus ? ( <input onChange={props.editingHandler} value={props.item}/>
            ): (<li style={{
                textDecoration: props.complete ?
                'line-through' : null
            }}
             onClick={props.done}>{props.item}</li>   ) }
                    
        </ul>
        <div>
            <Button click={props.edit} btnType={props.editStatus ? 'Update' : 'Edit'} />
            <Button click={props.removeTodo} btnType = "Delete"/>
        </div>
    </div>
);

export default todoList;