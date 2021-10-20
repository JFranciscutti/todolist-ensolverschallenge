import React, { Component } from "react";
import TodoDataService from "../api/TodoDataService";
import TodoComponent from "./TodoComponent";
import { Formik, Form, Field } from "formik";

class TodoListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    TodoDataService.retrieveAllTodos().then((response) => {
      this.setState({ todo: response.data });
    });
  }

  onSubmit(values) {
    let todo = { title: values.title, done: 0 };
    TodoDataService.createTodo(todo).then(() => {
      this.props.history.push("/");
      this.refreshList();
      values.title = "";
    });
  }

  refreshList() {
    TodoDataService.retrieveAllTodos().then((response) => {
      this.setState({ todo: response.data });
    });
  }

  render() {
    let { title } = this.state;
    return (
      <div>
        <h1>To-Do List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Is done?</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todo.map((todoItem) => (
              <TodoComponent
                key={todoItem.id}
                todo={todoItem}
                history={this.props.history}
              />
            ))}
          </tbody>
        </table>

        <Formik initialValues={{ title }} onSubmit={this.onSubmit}>
          {(props) => (
            <Form>
              <fieldset className="form-group">
                <label>Add a new task...</label>
                <Field className="form-control" type="text" name="title" />
              </fieldset>
              <button className="btn btn-success" type="submit">
                Add
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default TodoListComponent;
