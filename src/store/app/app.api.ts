import { createApi } from "@reduxjs/toolkit/query/react";
import { Me } from "../../models/models";
import { baseQuery } from "../../utils/baseQuery";
import { injectToken } from "../../utils/injectToken";

export const appApi = createApi({
  reducerPath: "api/v1/me",
  baseQuery,
  refetchOnFocus: true,
  endpoints: (build) => ({
    authMe: build.query<Me, string>({
      query: () => ({
        url: `/auth/me`,
        headers: injectToken(),
      }),
    }),

    createUser: build.mutation<any, void>({
      query: () => ``,
    }),
  }),
});

export const { useAuthMeQuery } = appApi;
