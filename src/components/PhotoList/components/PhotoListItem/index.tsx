import React from "react";
import { TiDelete } from "react-icons/ti";
import { useRemovePhotoMutation } from "../../../../store";
import { IAlbumData, IPhotoData } from "../../../../types";
import Button from "../../../Button/Button";
interface IPhotoListProps {
  photo: IPhotoData;
}
function PhotoListItem({ photo }: IPhotoListProps) {
  const [removePhoto, result] = useRemovePhotoMutation();
  return (
    <div className="relative ">
      <img src={photo.url} width="128" height="128" className="rounded-xl " />
      <div className="absolute flex inset-0 bg-violet-800 justify-center items-center opacity-0 hover:opacity-70 rounded-xl">
        <Button loading={result.isLoading} className={"border-none !p-0"}>
          <TiDelete
            viewBox="4 4 16 16"
            color="white"
            size={30}
            cursor={"pointer"}
            onClick={() => {
              removePhoto(photo);
            }}
          />
        </Button>
      </div>
    </div>
  );
}

export default PhotoListItem;
