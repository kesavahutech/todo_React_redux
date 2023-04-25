import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

import classes from "./TodoForm.module.css";
import { useDispatch } from "react-redux";
import { todoActions } from "../Store/reducer";

export default function TodoForm() {
  const dispatch = useDispatch();
  const todoref = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    if (todoref.current.value) {
      const todo = {
        text: todoref.current.value,
        id: Math.random().toString(),
        striked: false,
      };
      dispatch(todoActions.addtodo(todo));
    }
    e.target.reset();
  };
  return (
    <>
      <Form onSubmit={submitHandler} className={classes.formdiv}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="add Todo"
            aria-label="addtodo"
            aria-describedby="addtodo"
            ref={todoref}
          />
          <Button
            variant="primary"
            type="submit"
            style={{ fontWeight: "bolder" }}
          >
            + Add
          </Button>
        </InputGroup>
      </Form>
    </>
  );
}
