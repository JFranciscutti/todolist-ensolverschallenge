import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditComponent from "./EditComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import TodoListComponent from "./TodoListComponent";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={TodoListComponent} />
              <Route path="/edit/:id" component={EditComponent} />
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

export default TodoApp;
