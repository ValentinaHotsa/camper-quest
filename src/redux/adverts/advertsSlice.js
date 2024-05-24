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
  state.isloading = false;
  state.error = action.payload;
  state.adverts = state.adverts || [];
};

const initialState = {
  adverts: [],
  filteredAdverts: [],
  favorites: [],
  isLoading: false,
  error: null,
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
    applyFilters(state, action) {
      const { location, equipment, vehicleType } = action.payload;

      state.filteredAdverts = state.adverts.filter((advert) => {
        const matchesLocation = location
          ? advert.location.includes(location)
          : true;
        const matchesEquipment =
          equipment.length > 0
            ? equipment.every((item) => {
                if (item === "automatic") {
                  return advert.transmission === "automatic";
                }

                return advert.details[item];
              })
            : true;
        const matchesVehicleType = vehicleType
          ? advert.form === vehicleType
          : true;
        console.log("Checking advert:", advert);
        console.log("Matches:", {
          matchesLocation,
          matchesEquipment,
          matchesVehicleType,
        });
        return matchesLocation && matchesEquipment && matchesVehicleType;
      });
      console.log("Filtered Adverts:", state.filteredAdverts);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAdverts.pending, handlePending)
      .addCase(fetchAllAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = action.payload;
        state.filteredAdverts = action.payload;
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
export const { setPage, addToFavorite, removeFromFavorite, applyFilters } =
  advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
