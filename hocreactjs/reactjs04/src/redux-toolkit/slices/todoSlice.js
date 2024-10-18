import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  status: "idle",
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todoList = action.payload;
      state.status = "idle";
    });

    builder.addCase(getTodos.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const getTodos = createAsyncThunk(
  "getTodos",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos1`);
    if (!response.ok) {
      return rejectWithValue("Error");
    }
    return response.json();
  }
);
// console.log(getTodos.pending());
// console.log(getTodos.fulfilled());

//State:
// - pending
// - fulfilled
// - rejected
