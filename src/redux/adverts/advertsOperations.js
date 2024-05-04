import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://661f87c616358961cd949866.mockapi.io/adverts/";

export const fetchAllAdverts = createAsyncThunk(
  "adverts/fetchAll",

  async ({ page, limit }) => {
    try {
      const { data } = await axios.get(`/advert/`, {
        params: { page, limit },
      });

      return data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);
