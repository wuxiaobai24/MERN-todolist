import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
const TodoAdd = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  return (
    <form noValidate autoComplete="off">
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
        onClick={() => {
          addTodo(title);
          setTitle("");
        }}
      >
        Send
      </Button>
    </form>
  );
};

export default TodoAdd;
