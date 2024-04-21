import { createSlice } from "@reduxjs/toolkit";
import { fetchAllAdverts } from "./advertsOperations";

const advertsInitialState = {
  adverts: [],
  isLoading: false,
  error: null,
  page: 1,
  pageLimit: 4,
};
// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleReject = (state, action) => {
//   state.error = action.payload;
// };

// const handleFulfilled = (state) => {
//   state.isLoading = false;
//   state.error = null;
// };

const advertsSlice = createSlice({
  name: "adverts",
  initialState: advertsInitialState,

  reducers: {
    clearAdverts: (state) => {
      state.adverts = [];
      state.isLoading = false;
      state.error = null;
    },
    setPage: (state, a) => {
      state.page = a.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAdverts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = action.payload;
      })
      .addCase(fetchAllAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { setPage } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
