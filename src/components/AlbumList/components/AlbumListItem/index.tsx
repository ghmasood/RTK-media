import React from "react";
import { TiDelete } from "react-icons/ti";
import { useRemoveAlbumMutation } from "../../../../store";
import { IAlbumItem } from "../../../../types";
import Button from "../../../Button/Button";
import ExpandPanel from "../../../ExpandablePanel";

function AlbumItem({ albumData }: IAlbumItem) {
  const [remobeAlbum, removeResults] = useRemoveAlbumMutation();

  return (
    <ExpandPanel
      chevronColor="rgb(76 29 149)"
      customClass="!bg-violet-100"
      header={
        <div className="flex gap-2">
          <Button
            loading={removeResults.isLoading}
            className={"border-none !p-0"}
            onClick={() => {
              remobeAlbum(albumData);
            }}
          >
            <TiDelete
              viewBox="4 4 16 16"
              size={"20"}
              cursor={"pointer"}
              color="rgb(76 29 149)"
            />
          </Button>
          <span className=" text-violet-900 text-lg rounded-lg">
            {albumData.title}
          </span>
        </div>
      }
    >
      <>PHOTOS!!</>
    </ExpandPanel>
  );
}

export default AlbumItem;
