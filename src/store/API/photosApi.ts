import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IAlbumData, IPhotoData, PhotoResponse } from "../../types";

export const photosApi = createApi({
  tagTypes: ["Photo", "AlbumPhoto"],
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    fetchFn: async (...args) => {
      await new Promise((res) => setTimeout(res, 1000));
      return fetch(...args);
    },
  }),
  endpoints: (builder) => {
    return {
      fetchPhotos: builder.query<PhotoResponse, IAlbumData>({
        providesTags: (result, error, album) => {
          return result
            ? [
                ...result.map((item) => ({
                  type: "Photo" as const,
                  id: item.id,
                })),
                { type: "AlbumPhoto", id: album.id },
              ]
            : [{ type: "AlbumPhoto", id: album.id }];
        },
        query: (album) => {
          return {
            url: "/photos",
            params: {
              albumId: album.id,
            },
            method: "GET",
          };
        },
      }),
      addPhoto: builder.mutation<PhotoResponse, IAlbumData>({
        invalidatesTags: (resultm, errr, album) => {
          return [{ type: "AlbumPhoto", id: album.id }];
        },
        query: (album) => {
          return {
            method: "POST",
            url: "/photos",
            body: {
              albumId: album.id,
              url: faker.image.city(150, 150, true),
            },
          };
        },
      }),
      removePhoto: builder.mutation<PhotoResponse, IPhotoData>({
        invalidatesTags: (result, error, photo) => {
          return [{ type: "Photo", id: photo.id }];
        },
        query: (photo) => {
          return {
            method: "DELETE",
            url: `/photos/${photo.id}`,
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useRemovePhotoMutation,
  useAddPhotoMutation,
} = photosApi;
