const express = require("express");
const router = express.Router();

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
let maxId = 2;

router.get("/", (req, res, next) => {
  res.send({
    msg: "ok",
    data: todoSample,
  });
});

router.get("/:id", (req, res, next) => {
  const id = parseInt(req.param.id, 10);
  const index = todoSample.findIndex((todo) => todo.id === id);
  if (index < 0) {
    res.send({ msg: `Cannot find the todo whose id is ${id}` });
  } else {
    res.send({
      msg: "ok",
      data: todoSample[index],
    });
  }
});

router.post("/", (req, res, next) => {
  const newTodo = {
    id: ++maxId,
    ...req.body,
  };
  todoSample.push(newTodo);
  res.send({
    msg: "ok",
    data: newTodo,
  });
});

router.delete("/:id", (req, res, next) => {
  const len = todoSample.length;
  const id = parseInt(req.params.id, 10);
  console.log(req.params.id);
  console.log(id);
  todoSample = todoSample.filter((todo) => todo.id !== id);
  res.send({
    msg: len === todoSample.length ? "fail to delete" : "ok",
  });
});

router.put("/:id", (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  let index = todoSample.findIndex((todo) => todo.id === id);
  if (index < 0) {
    res.status(400).send("Fail to find todo");
  }
  todoSample[index] = Object.assign(todoSample[index], req.body);
  res.send({
    msg: "ok",
  });
});

module.exports = router;
