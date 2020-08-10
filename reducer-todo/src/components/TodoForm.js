import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";
import "../Todo.css";

const TodoForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputText, setInputText] = useState("");
  console.log(state);

  const handleChanges = (e) => {
    setInputText(e.target.value);
  };
  const addItem = (itemName) => {
    const newItem = {
      item: itemName,
      id: Date.now(),
      completed: false,
    };
  };
  return (
    <div>
      {state.todos.map((todo) => {
        return (
          <p
            key={todo.id}
            onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
            className={`${todo.completed ? "completed" : ""}`}
          >
            {todo.item}
          </p>
        );
      })}

      <label>
        Add a todo:
        <input type="text" value={inputText} onChange={handleChanges} />
        <button
          onClick={() => dispatch({ type: "ADD_TODO", payload: inputText })}
        >
          Add Todo
        </button>
      </label>
      <br />
      <button onClick={() => dispatch({ type: "CLEAR" })}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoForm;
