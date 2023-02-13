import React from "react";
import { faker } from "@faker-js/faker";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../../store";
import Button from "../Button/Button";
import Skeleton from "../skeleton";
import AlbumItem from "./components/AlbumListItem";
import { IUserData } from "../../types";
interface IAlbumListProps {
  user: IUserData;
}
function AlbumList({ user }: IAlbumListProps) {
  const { data, error, isLoading, isFetching } = useFetchAlbumsQuery(user);
  const err = error as FetchBaseQueryError;

  const [addAlbum, results] = useAddAlbumMutation();
  return (
    <div className=" w-full flex flex-col gap-4">
      <div className="flex justify-between">
        <h2 className="text-white text-lg font-medium">
          Album for {user.name}
        </h2>
        <Button
          loading={results.isLoading || isFetching}
          secondary
          rounded
          onClick={() => {
            addAlbum({ user: user, albumTitle: faker.commerce.productName() });
          }}
        >
          + Add Album
        </Button>
      </div>
      {isLoading || isFetching ? (
        <Skeleton
          customClass="!gap-1.5 ml-4"
          ItemCustomClass="!h-12"
          numbers={3}
        />
      ) : err ? (
        <div>Eror Code: {err.status}</div>
      ) : (
        <div className="w-full flex flex-col !gap-1.5 pl-4">
          {data && data.length > 0 ? (
            data.map((item) => <AlbumItem albumData={item} key={item.id} />)
          ) : (
            <span className="bg-violet-100 text-violet-900 w-full text-lg px-2 rounded-lg">
              No any Album!
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default AlbumList;
