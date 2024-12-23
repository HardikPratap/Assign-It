import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_URL = "http://localhost:8000/api/v1";
const API_URL = import.meta.env.VITE_APP_BASE_URL;

const baseQuery = fetchBaseQuery({ baseUrl: API_URL + "/api/v1" });

const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});

export default apiSlice;
