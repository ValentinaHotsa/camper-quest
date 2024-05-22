import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://661f87c616358961cd949866.mockapi.io/adverts/";

export const fetchAllAdverts = createAsyncThunk(
  "adverts/fetchAll",

  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/advert/`);

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
