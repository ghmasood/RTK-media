import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAlbumData, AlbumsResponse, IUserData } from "../../types";

export const AlbumsApi = createApi({
  reducerPath: "albums",
  tagTypes: ["Album", "UsersAlbum"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    fetchFn: async (...args) => {
      await new Promise((res) => setTimeout(res, 1000));
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      removeAlbum: builder.mutation<AlbumsResponse, IAlbumData>({
        invalidatesTags: (
          result,
          error,
          arg: { id: number; userId: number; title: string }
        ) => {
          return [{ type: "Album", id: arg.id }];
        },
        query: (album: { id: number; userId: number; title: string }) => {
          return {
            method: "DELETE",
            url: `/albums/${album.id}`,
          };
        },
      }),
      addAlbum: builder.mutation<
        AlbumsResponse,
        { user: IUserData; albumTitle: string }
      >({
        invalidatesTags: (
          result,
          error,
          arg: { user: IUserData; albumTitle: string }
        ) => {
          return [{ type: "UsersAlbum", id: arg.user.id }];
        },
        query: (arg: { user: IUserData; albumTitle: string }) => {
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
      fetchAlbums: builder.query<AlbumsResponse, IUserData>({
        providesTags: (result, error, user) => {
          return result
            ? [
                ...result.map((item) => ({
                  type: "Album" as const,
                  id: item.id,
                })),
                { type: "UsersAlbum", id: user.id },
              ]
            : [{ type: "UsersAlbum", id: user.id }];
        },
        query: (user: IUserData) => {
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

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = AlbumsApi;
