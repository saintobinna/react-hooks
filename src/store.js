import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./slices/todoSlice";

// configure

const store = configureStore({
  reducer: {
    todos: todoSliceReducer,
  },
});

export { store };
