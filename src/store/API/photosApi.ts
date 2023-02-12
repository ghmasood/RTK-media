import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IAlbumData, IPhotoData, PhotoResponse } from "../../types";

export const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => {
    return {
      fetchPhotos: builder.query<PhotoResponse, IAlbumData>({
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
        query: (album) => {
          return {
            method: "POST",
            url: "/photos",
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true),
            },
          };
        },
      }),
      removePhoto: builder.mutation<PhotoResponse, IPhotoData>({
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
