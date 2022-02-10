import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  name: string;
  age: number;
}
const initState: TodoState = {
  name: "todo",
  age: 20,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initState,
  reducers: {
    setTodo: (state, action: PayloadAction<{ [key: string]: any }>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setTodo } = todoSlice.actions;
export default todoSlice.reducer;
