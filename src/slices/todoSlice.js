import { createSlice } from "@reduxjs/toolkit";

// store the initial state in a variable
const initialState = {
  todo: [],
};

// create the slices
const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodoItem: (state, { payload }) => {
      state.todos.push(payload);
    },
    addTodoItem: () => {
      console.log("remove Todo item is running");
    },
  },
});

// Export the reducers function (addtodoitem and remove todoitem)
// this is used where we want to dispatch the action/ function
export const { addTodoItem, removeTodoItem } = todoSlice.action;

// Export the reducer as default
// this is used to configure our store
export default todoSlice.reducers;
