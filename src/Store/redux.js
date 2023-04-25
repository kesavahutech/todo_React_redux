import { configureStore } from "@reduxjs/toolkit";

import TodoSlice from "./reducer";

const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
});

export default store;
