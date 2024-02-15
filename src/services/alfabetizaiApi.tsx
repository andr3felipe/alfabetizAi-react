<<<<<<< HEAD
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IStudent, ITeacher, IUser } from '../@types/interfaces';
import { Login } from '../pages/app/Login';
=======
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITeacher } from "../@types/interfaces";
>>>>>>> develop

export const alfabetizaiApi = createApi({
  reducerPath: "alfabetizaiApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://vemser-dbc.dbccompany.com.br:39000/greicekelly/vs13-squad02-alfabetizai",
    prepareHeaders: (headers) => {
<<<<<<< HEAD
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
=======
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", token);
>>>>>>> develop
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLoggedUserData: builder.query<IUser, void>({
      query: () => ({
        url: '/auth/usuario-logado',
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      }),
    }),
    getAllTeachers: builder.query<ITeacher, void>({
      query: () => ({
        url: `/professor`,
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      }),
    }),
    getStudentsByGuardian: builder.query<IStudent[], void>({
      query: (id) => ({
        url: `/aluno/responsavel/${id}`,
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      }),
    }),
    login: builder.mutation<string, Omit<Login, 'role'>>({
      query: (credentials) => {
        return {
          url: '/auth',
          method: 'POST',
          body: credentials,
          headers: {},
          responseHandler: (response) => response.text(),
        };
      },
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

<<<<<<< HEAD
export const {
  useGetAllTeachersQuery,
  useLoginMutation,
  useGetStudentsByGuardianQuery,
  useGetLoggedUserDataQuery,
} = alfabetizaiApi;
=======
export const { useGetAllTeachersQuery, useRegisterReponsibleMutation } =
  alfabetizaiApi;
>>>>>>> develop
