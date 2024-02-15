import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITeacher } from "../@types/interfaces";

export const alfabetizaiApi = createApi({
  reducerPath: "alfabetizaiApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://vemser-dbc.dbccompany.com.br:39000/greicekelly/vs13-squad02-alfabetizai",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllTeachers: builder.query<ITeacher, void>({
      query: () => `/professor`,
    }),

    registerReponsible: builder.mutation({
      query: (body) => ({
        url: "/auth/cadastrar/responsavel",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }),
    }),
  }),
});

export const { useGetAllTeachersQuery, useRegisterReponsibleMutation } =
  alfabetizaiApi;
