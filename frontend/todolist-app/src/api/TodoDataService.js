import axios from "axios";

class TodoDataService {
  retrieveAllTodos() {
    return axios.get("http://localhost:8080/todo/all");
  }

  retrieveTodo(id){
    return axios.get(`http://localhost:8080/todo/${id}`);
  }

  createTodo(todo) {
    return axios.post("http://localhost:8080/todo/add", todo);
  }

  updateTodo(todo){
      return axios.put("http://localhost:8080/todo/update",todo)
  }

  deleteTodo(id){
    return axios.delete(`http://localhost:8080/todo/delete/${id}`);
  }
}

export default new TodoDataService();
