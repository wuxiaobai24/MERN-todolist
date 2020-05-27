import React from "react";
import List from "@material-ui/core/List";
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";

let todoSample = [
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
let maxId = 3;

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

  checkBoxToggle(id) {
    const index = todoSample.findIndex((todo) => todo.id === id);
    todoSample[index].done = !todoSample[index].done;
    this.loadData();
  }

  deleteTodo(id) {
    todoSample = todoSample.filter((todo) => todo.id !== id);
    this.loadData();
  }

  addTodo(title) {
    todoSample.push({
      id: maxId++,
      title,
      done: false,
    });
    this.loadData();
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
