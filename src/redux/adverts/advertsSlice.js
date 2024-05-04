import { createSlice } from "@reduxjs/toolkit";
import { fetchAllAdverts } from "./advertsOperations";

const advertsInitialState = {
  adverts: [],
  isLoading: false,
  error: null,
  page: 1,
  pageLimit: 4,
};

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
        const { page, pageLimit } = state;
        const newItems = action.payload;

        if (page === 1) {
          state.adverts = newItems;
        } else {
          state.adverts = [...state.adverts, ...newItems];
        }
      })
      .addCase(fetchAllAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { setPage } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
