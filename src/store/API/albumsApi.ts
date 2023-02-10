import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { title } from "process";
import { IUserdata } from "../slices/usersSlice";

export const AlbumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    fetchFn: async (...args) => {
      await new Promise((res) => setTimeout(res, 1500));
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      addAlbum: builder.mutation({
        invalidatesTags: (
          result,
          error,
          arg: { user: IUserdata; albumTitle: string }
        ) => {
          return [{ type: "Album", id: arg.user.id }];
        },
        query: (arg: { user: IUserdata; albumTitle: string }) => {
          return {
            url: "/albums",
            method: "Post",
            body: {
              userId: arg.user.id,
              title: arg.albumTitle,
            },
          };
        },
      }),
      fetchAlbums: builder.query({
        providesTags: (result, error, user: IUserdata) => {
          return [{ type: "Album", id: user.id }];
        },
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

export const { useFetchAlbumsQuery, useAddAlbumMutation } = AlbumsApi;
