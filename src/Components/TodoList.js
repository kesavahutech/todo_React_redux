import React from "react";
import classes from "./TodoList.module.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../Store/reducer";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const onComplete = (e) => {
    const id = e.target.parentElement.parentElement.id;
    dispatch(todoActions.updatetodo(id));
  };
  const onDelete = (e) => {
    const id = e.target.parentElement.parentElement.id;
    dispatch(todoActions.deletetodo(id));
  };
  return (
    <div className={classes.listdiv}>
      {todos.length === 0 && <h3>Add todos to display</h3>}
      {todos.length > 0 &&
        todos.map((todo) => {
          return (
            <div className={classes.itemdiv} id={todo.id} key={todo.id}>
              <span className={todo.striked ? classes.striked : ""}>
                {todo.text}
              </span>
              <div>
                <Button
                  variant="primary"
                  onClick={onComplete}
                  disabled={todo.striked}
                >
                  Complete
                </Button>
                <Button
                  variant="danger"
                  style={{ marginLeft: "1rem" }}
                  onClick={onDelete}
                >
                  X
                </Button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
