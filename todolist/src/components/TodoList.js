import React from "react";
import List from "@material-ui/core/List";
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";
import axios from "axios";

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    axios
      .get("http://localhost:8000/todos")
      .then(({ data }) => {
        console.log(data);
        this.setState({ todos: data.data });
      })
      .catch((err) => console.log(err));
  }

  checkBoxToggle(id) {
    const todo = this.state.todos.findIndex((todo) => todo.id === id);
    axios
      .put(`http://localhost:8000/todos/${id}`, { done: !todo.done })
      .then(() => {
        this.loadData();
      })
      .catch((err) => console.log(err));
    this.loadData();
  }

  deleteTodo(id) {
    axios
      .delete(`http://localhost:8000/todos/${id}`)
      .then(({ data }) => {
        console.log(data);
        this.loadData();
      })
      .catch((err) => console.log(err));
  }

  addTodo(title) {
    // todoSample.push({
    //   id: maxId++,
    //   title,
    //   done: false,
    // });
    axios
      .post("http://localhost:8000/todos", {
        title,
        done: false,
      })
      .then((data) => {
        console.log("post", data);
        this.loadData();
      })
      .catch((err) => console.log(err));
  }

  render() {
    const todos = this.state.todos;
    return (
      <React.Fragment>
        <List>
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCheckBoxToggle={() => this.checkBoxToggle(todo.id)}
              onDeleteToogle={() => this.deleteTodo(todo.id)}
            />
          ))}
        </List>
        <TodoAdd addTodo={this.addTodo.bind(this)} />
      </React.Fragment>
    );
  }
}
