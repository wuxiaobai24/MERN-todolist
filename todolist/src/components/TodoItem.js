import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
// import IconButton from "@material-ui/core/IconButton";

const TodoItem = ({ todo }) => {
  const labelId = `checkbox-list-label-${todo.id}`;
  return (
    <ListItem role={undefined} dense button>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todo.done}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": labelId }}
        />
        <ListItemText id={labelId} primary={todo.title} />
      </ListItemIcon>
    </ListItem>
  );
};

export default TodoItem;
