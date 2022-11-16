import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import BUILD_PARAMS from "./buld";

export const initialHeaders = {
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "ngrok-skip-browser-warning": "ngrok",
};

export const baseQuery = fetchBaseQuery({
  baseUrl: `${BUILD_PARAMS.DEFAULT_WEBSPI_URL}/api/v1`,
  headers: initialHeaders,
});
