import React, { Component } from "react";
import TodoDataService from "../api/TodoDataService";
import TodoListComponent from "./TodoListComponent";

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        id: this.props.todo.id,
        title: this.props.todo.title,
        done: this.props.todo.done,
      },
    };

    this.updateTodoClicked = this.updateTodoClicked.bind(this);
    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.checkboxOnChange = this.checkboxOnChange.bind(this);
  }

  //Elimina en backend el item con el id del estado
  deleteTodoClicked() {
    TodoDataService.deleteTodo(this.state.todo.id);
  }

  checkboxOnChange() {
    //Actualizo en el frontend
    let check = !this.state.todo.done;
    this.setState = {
      todo: {
        id: this.state.todo.id,
        title: this.state.todo.title,
        done: check,
      },
    };
    console.log(check);
    console.log(this.state.todo);
    //Actualizo en el backend
    TodoDataService.updateTodo(this.state.todo);
  }

  //Cambia a la página para editar la tarea
  updateTodoClicked() {
    this.props.history.push(`/edit/${this.state.todo.id}`);
  }

  render() {
    const { id, title, done } = this.state.todo;
    return (
      <tr>
        <td>
          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked={done}
            onClick={this.checkboxOnChange}
          />
        </td>
        <td>{title}</td>
        <td>
          <button className="btn btn-dark" onClick={this.updateTodoClicked}>
            Edit
          </button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={this.deleteTodoClicked}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TodoComponent;
