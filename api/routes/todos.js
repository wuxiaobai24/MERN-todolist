const express = require("express");
const router = express.Router();
const Todos = require("../db");

router.get("/", (req, res, next) => {
  Todos.find({})
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res, next) => {
  Todos.findById(req.params.id)
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/", (req, res, next) => {
  Todos.create(req.body, (err, todo) => {
    if (err) {
      res.json(err);
    } else {
      res.json(todo);
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Todos.findOneAndRemove({
    _id: req.params.id,
  })
    .then((todo) => res.json({ id: req.param.id }))
    .catch((err) => res.json(err));
});

router.put("/:id", (req, res, next) => {
  console.log(req.body);
  Todos.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  )
    .then((todo) => res.json(todo))
    .catch((err) => res.json(err));
});

module.exports = router;
