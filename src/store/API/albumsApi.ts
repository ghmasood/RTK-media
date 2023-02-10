import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserdata } from "../slices/usersSlice";

export const AlbumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: (user: IUserdata) => {
          return {
            url: "/albums",
            params: { userId: user.id },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery } = AlbumsApi;
