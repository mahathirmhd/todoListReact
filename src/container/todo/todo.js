import React, {Component} from "react";
import Forminput from "../../component/formput/Forminput";
import TodoList from "../../component/TodoList/TodoList";
import shortid from "shortid";

class Todo extends Component {
    state ={
        todos:[],
        todo: {
            id: '',
            text: '',
            done: false,
            editing: false
        }
    };

    changeHandler = event =>{
        const inpuTodo = {
            id: shortid.generate(),
            text: event.target.value
        };

        this.setState({
            todo: inpuTodo
        });
    };

    addTodoHandler = event =>{
        event.preventDefault();

        const todo = {
            ...this.state.todo
        }
        this.setState((prevState) => {
            return {
                todos: [todo, ... prevState.todos]
            }
        });
        event.target.previousElementSibling.value = null;
    };

    removeTodoHandler = id =>{
        const findTodo = this.state.todos.findIndex(todo => {
            return id === todo.id
        });
        const updateTodos = this.state.todos;
        updateTodos.splice(findTodo, 1);
        this.setState({
            todos: updateTodos
        });
    }

    doneTodoHandler = id => {
        const doneTodos = this.state.todos.map(todo => {
            if(id === todo.id) {
                return {
                    ... todo,
                    done: !todo.done
                }
            } else {
                return todo;
            }
        })


        this.setState({
            todos: doneTodos
        })
    }

    editingHandler = (id, event) => {
        const findTodo = this.state.todos.findIndex(todo => {
            return id === todo.id
        })

        const updateTodo = {
            ... this.state.todos[findTodo]
        }

        updateTodo.text = event.target.value
        const updateTodos = [... this.state.todos];
        updateTodos[findTodo] = updateTodo
        this.setState((prevState) => {
            return {
                todos: updateTodos
            }
        })

    }

    goEditMode = id => {
        const editedTodos = this.state.todos.map(todo => {
            if(id === todo.id){
                return {
                    ... todo,
                    done: false,
                    editing: !todo.editing
                }
            } else {
                return todo;
            }
        })

        this.setState({
            todos: editedTodos
        })
    }

    render() {
        let item = this.state.todos.map(todo =>(
            <TodoList 
            key={todo.id} 
            item={todo.text}
            complete = {todo.done}
            edit={() => this.goEditMode(todo.id)}
            done={() => this.doneTodoHandler(todo.id)}
            editingHandler= {(event) => this.editingHandler(todo.id, event)}
            editStatus={todo.editing}
            removeTodo={() => this.removeTodoHandler(todo.id)} />
        ));


        return (
        <div>
            <h1>Todo App</h1>
            <Forminput add={this.addTodoHandler} inputChange={this.changeHandler}/>
            {item}
        </div>

        );
    }
  }

export default Todo;