import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginInput } from '../../pages/login/LoginPage';
import { IGenericResponse } from '../types/types'; 
import { userApi } from './userApi';

const BASE_URL = process.env.BASE_URL as string;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/jwt/create/`,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      { access_token: string; status: string },
      LoginInput
    >({
      query(data) {
        return {
          url: 'login',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: 'logout',
          credentials: 'include',
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;
