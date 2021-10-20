import React, { Component } from "react";
import TodoDataService from "../api/TodoDataService";
import { Formik, Form, Field, ErrorMessage } from "formik";

class EditComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: {
        id: this.props.match.params.id,
        title: "",
        done: 0,
      },
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
  }

  cancelButton() {
    this.props.history.push("/");
  }

  onSubmit(values) {
    let todo = {
      id: this.state.todo.id,
      title: values.title,
      done: this.state.todo.done,
    };
    TodoDataService.updateTodo(todo).then(() => {
      console.log(values);
      console.log(this.state.todo.id);
      this.props.history.push("/");
    });
  }

  render() {
    let { title } = this.state;

    return (
      <div>
        <h1>Editing task</h1>
        <div className="container">
          <Formik initialValues={{ title }} onSubmit={this.onSubmit}>
            {(props) => (
              <Form>
                <ErrorMessage
                  name="title"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field className="form-control" type="text" name="title" />
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => this.cancelButton()}
                >
                  Cancel
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default EditComponent;
