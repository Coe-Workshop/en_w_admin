import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Tool } from "../tools/toolSlice";
export type { Tool };

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  tagTypes: ["Tool"],
  endpoints: (builder) => ({
    getTools: builder.query<Tool[], void>({
    //   query: () => ({ url: "/products", method: "GET" }),
      query: () => '/products',
      providesTags: ["Tool"],
    }),
    getTool: builder.query<Tool, string>({
      query: (toolId) => `/products/${toolId}`,
    }),
    addTool: builder.mutation<Tool[], Tool>({
      query: (tool) => ({ url: "/products", method: "PUT", body: tool }),
      invalidatesTags: ["Tool"],
    }),
  }),
});

export const { useGetToolsQuery, useGetToolQuery } = apiSlice;
// ใช้fieldต่างๆกับ ui เหอะ