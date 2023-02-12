import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { AlbumsApi } from "./API/albumsApi";
import { photosApi } from "./API/photosApi";
import { userReducer } from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    [AlbumsApi.reducerPath]: AlbumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware()
      .concat(AlbumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeuser";

export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./API/albumsApi";

export {
  useFetchPhotosQuery,
  useRemovePhotoMutation,
  useAddPhotoMutation,
} from "./API/photosApi";
