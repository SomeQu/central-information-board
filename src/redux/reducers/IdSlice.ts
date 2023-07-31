import { createSlice } from "@reduxjs/toolkit";

export interface IBranchId {
  id: number | null;
}
const initialState: IBranchId = {
  id: null,
};

export const idSlice = createSlice({
  name: "idCall",
  initialState,
  reducers: {
    changeId(state, action) {
      state.id = action.payload;
    },
  },
});

export default idSlice.reducer;
