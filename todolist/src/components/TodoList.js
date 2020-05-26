import React from "react";
import List from "@material-ui/core/List";
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";

const todoSample = [
  {
    id: 1,
    title: "Test Todo",
    done: true,
  },
  {
    id: 2,
    title: "Build a Todo App",
    done: false,
  },
];

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
    this.setState({ todos: todoSample });
  }

  render() {
    const todos = this.state.todos;
    return (
      <React.Fragment>
        <List>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </List>
        <TodoAdd />
      </React.Fragment>
    );
  }
}
