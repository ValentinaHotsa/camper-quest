import { createSelector } from "@reduxjs/toolkit";

export const selectAdverts = (state) => state.adverts.adverts;
export const selectPage = (state) => state.adverts.page;
export const selectPageLimit = (state) => state.adverts.pageLimit;
export const selectFavorites = (state) => state.favorite;
