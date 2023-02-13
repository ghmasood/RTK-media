import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import React from "react";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../../store";
import { IAlbumData } from "../../types";
import Button from "../Button/Button";
import Skeleton from "../skeleton";
import PhotoListItem from "./components/PhotoListItem";

interface IPhotosListProp {
  album: IAlbumData;
}
function PhotosList({ album }: IPhotosListProp) {
  const { isFetching, isLoading, error, data } = useFetchPhotosQuery(album);
  const err = error as FetchBaseQueryError;

  const [addPhoto, addResult] = useAddPhotoMutation();
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-lg font-medium">
          Album for {album.title}
        </h2>
        <Button
          loading={addResult.isLoading || isFetching}
          secondary
          rounded
          onClick={() => {
            addPhoto(album);
          }}
        >
          + Add Photo
        </Button>
      </div>
      {isLoading || isFetching ? (
        <Skeleton
          customClass="justify-between flex !flex-row !gap-4 !h-32"
          ItemCustomClass="!h-32 !w-32"
          numbers={8}
        />
      ) : err ? (
        <div>Error Code: {err.status}</div>
      ) : (
        <div className="grid grid-cols-8 w-full justify-items-center  gap-4">
          {data && data.length > 0 ? (
            data.map((item) => <PhotoListItem photo={item} key={item.id} />)
          ) : (
            <span className="flex w-full justify-center text-white">
              No any Photo!
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default PhotosList;
