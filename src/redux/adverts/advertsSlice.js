import { createSlice } from "@reduxjs/toolkit";
import { fetchAllAdverts } from "./advertsOperations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const handleReject = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  adverts: [],
  isLoading: false,
  error: null,
  page: 1,
  pageLimit: 4,
  favorites: [],
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,

  reducers: {
    clearAdverts: (state) => {
      state.adverts = [];
      state.isLoading = false;
      state.error = null;
    },
    setPage: (state, a) => {
      state.page = a.payload;
    },
    addToFavorite: (state, action) => {
      const advertToAdd = action.payload;
      state.favorites.push(advertToAdd);
    },
    removeFromFavorite: (state, action) => {
      const advertToRemove = action.payload;
      state.favorites = state.favorites.filter(
        (advert) => advert._id !== advertToRemove._id
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAdverts.pending, handlePending)
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
      .addCase(fetchAllAdverts.rejected, handleReject)

      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("/rejected"), handleReject)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      );
  },
});
export const { setPage, addToFavorite, removeFromFavorite } =
  advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
