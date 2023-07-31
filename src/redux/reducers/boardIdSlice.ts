import { createSlice } from "@reduxjs/toolkit";

export interface IBoardId {
  boardId: number | null;
}
const initialState: IBoardId = {
  boardId: null,
};

export const boardIdSlice = createSlice({
  name: "boardCall",
  initialState,
  reducers: {
    changeBoardId(state, action) {
      state.boardId = action.payload;
    },
  },
});

export default boardIdSlice.reducer;
