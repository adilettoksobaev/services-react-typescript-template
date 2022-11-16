// We can use the following function to inject the JWT token through an interceptor

import { initialHeaders } from "./baseQuery";

// We get the `accessToken` from the localStorage that we set when we authenticate
export const injectToken = () => {
  try {
    const token = localStorage.getItem("token");
    if (token != null) {
      return {
        ...initialHeaders,
        "x-app-token": token,
      };
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
