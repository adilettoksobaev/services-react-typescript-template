import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Me } from "../../models/models";
import BUILD_PARAMS from "../../utils/buld";

const token = localStorage.getItem("token");

export const appApi = createApi({
  reducerPath: "api/v1/me",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BUILD_PARAMS.DEFAULT_WEBSPI_URL}/api/v1`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      "ngrok-skip-browser-warning": "ngrok",
    },
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    authMe: build.query<Me, string>({
      query: () => ({
        url: `/auth/me`,
        headers: {
          "x-app-token": token ? token : "null",
        },
      }),
    }),

    createUser: build.mutation<any, void>({
      query: () => ``,
    }),
  }),
});

export const { useAuthMeQuery } = appApi;
