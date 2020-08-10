export const initialState = {
  todos: [
    { item: "Learn about reducers", completed: false, id: 3892987589 },
    { item: "Cry", completed: false, id: Date.now() },
  ],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        }),
      };
    case "ADD_TODO":
      const newItem = {
        item: action.payload,
        id: Date.now(),
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newItem],
      };
    case "CLEAR":
      let stillDue = state.todos.filter((todo) => todo.completed === false);
      return {
        ...state,
        todos: stillDue,
      };
    default:
      return state;
  }
};
