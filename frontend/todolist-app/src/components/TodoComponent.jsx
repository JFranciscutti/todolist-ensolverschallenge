import React, { Component } from "react";
import TodoDataService from "../api/TodoDataService";

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

  deleteTodoClicked() {
    TodoDataService.deleteTodo(this.state.todo.id);
    //falta refresh
  }

  //ARREGLAR DELETE EN BACKEND
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
    console.log(this.state.todo);
    //Actualizo en el backend
    TodoDataService.updateTodo(this.state.todo);
  }

  updateTodoClicked() {
    console.log(this.props.history)
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
            onChange={this.checkboxOnChange}
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
