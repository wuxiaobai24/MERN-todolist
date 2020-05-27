import React, { useState } from "react";
import { Button, TextField, Paper } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
const TodoAdd = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const sendFunc = () => {
    addTodo(title);
    setTitle("");
  }
  return (
    <Paper elevation={1}>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        placeholder="Add todo here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <Button
        variant="outlined"
        color="primary"
        endIcon={<SendIcon />}
        onClick={sendFunc}
        fullWidth
      >
        Send
      </Button>
    </Paper>
  );
};

export default TodoAdd;
