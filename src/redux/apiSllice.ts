import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from './store'
import { setCredentials } from './features/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://35.228.114.191/',
    credentials: 'include',
    prepareHeaders: (headers, { getState }:any) => {
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers
    }
})

const baseQueryWithReauth = async (args:any, api:any, extraOptions:any) => {
    let result:any = await baseQuery(args, api, extraOptions)

    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token')
        // send refresh token to get new access token 
        const refreshResult = await baseQuery('login/jwt/refresh', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            // store the new token 
            api.dispatch(setCredentials({ ...refreshResult.data, user }))
            // retry the original query with new access token 
            result = await baseQuery(args, api, extraOptions)
        } 
    }

    return result
}


export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})