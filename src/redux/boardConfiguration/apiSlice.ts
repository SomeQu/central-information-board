import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

type BoardType ={
    number: number,
    text_size: string,
    text: string,
    сoursive: boolean,
    italic: boolean,
    bold: boolean,
    speed:number,
    branch: number
  }
export const BoardApi = createApi({
    reducerPath:'boardApi',
    baseQuery:fetchBaseQuery({baseUrl: 'http://35.228.114.191/'},),
    endpoints: (builder) => ({
      getBoard: builder.query({
        query: () => 'boards/',
      }),
    }),
  })

  export const {useGetBoardQuery}:any = BoardApi