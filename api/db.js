const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost/todolist";

mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log(`Connect ${MONGODB_URL}`);
});

const todoSchema = new mongoose.Schema(
  {
    title: String,
    done: Boolean,
  },
  { collection: `todolist` }
);

const Todo = (module.exports = mongoose.model("todo", todoSchema));
