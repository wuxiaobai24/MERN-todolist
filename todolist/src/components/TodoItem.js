import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { ListItemSecondaryAction, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoItem = ({ todo, onCheckBoxToggle, onDeleteToogle }) => {
  const labelId = `checkbox-list-label-${todo.id}`;
  return (
    <ListItem role={undefined} dense button>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todo.done}
          onClick={onCheckBoxToggle}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": labelId }}
        />
        <ListItemText id={labelId} primary={todo.title} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete"
            onClick={onDeleteToogle}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItemIcon>
    </ListItem>
  );
};

export default TodoItem;
