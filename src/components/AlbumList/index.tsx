import { faker } from "@faker-js/faker";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import React from "react";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../../store";
import { IUserdata } from "../../store/slices/usersSlice";
import Button from "../Button/Button";
import ExpandPanel from "../ExpandablePanel";
import Skeleton from "../skeleton";

interface IAlbumListProps {
  user: IUserdata;
}
function AlbumList({ user }: IAlbumListProps) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const err = error as FetchBaseQueryError;
  const albumData = data as { id: number; userId: number; title: string }[];
  const [addAlbum, result] = useAddAlbumMutation();
  return (
    <div className=" w-full flex flex-col gap-4">
      <div className="flex justify-between">
        <h2 className="text-white text-lg font-medium">
          Album for {user.name}
        </h2>
        <Button
          loading={result.isLoading}
          secondary
          rounded
          onClick={() => {
            addAlbum({ user: user, albumTitle: faker.commerce.productName() });
          }}
        >
          + Add Album
        </Button>
      </div>
      {isLoading ? (
        <Skeleton customClass="!gap-1.5" ItemCustomClass="!h-8" numbers={2} />
      ) : err ? (
        <div>Eror Code: {err.status}</div>
      ) : (
        <div className="w-full flex flex-col gap-1.5 pl-4">
          {albumData.length > 0 ? (
            albumData.map((item) => (
              <ExpandPanel
                chevronColor="rgb(76 29 149)"
                customClass="!bg-violet-100"
                header={
                  <span
                    key={item.id}
                    className=" text-violet-900 text-lg px-2 rounded-lg"
                  >
                    {item.title}
                  </span>
                }
              >
                <>PHOTOS!!</>
              </ExpandPanel>
            ))
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
