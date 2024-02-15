import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IStudent, ITeacher, IUser } from '../@types/interfaces';
import { Login } from '../pages/app/Login';

export const alfabetizaiApi = createApi({
  reducerPath: 'alfabetizaiApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'http://vemser-dbc.dbccompany.com.br:39000/greicekelly/vs13-squad02-alfabetizai',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
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
  }),
});

export const {
  useGetAllTeachersQuery,
  useLoginMutation,
  useGetStudentsByGuardianQuery,
  useGetLoggedUserDataQuery,
} = alfabetizaiApi;
