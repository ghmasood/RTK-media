import React from "react";
import { removeUser } from "../../../../store";
import { useThunk } from "../../../../store/hooks";
import { IUserdata } from "../../../../store/slices/usersSlice";
import Button from "../../../Button/Button";
import { TiDelete } from "react-icons/ti";
import ExpandPanel from "../../../ExpandablePanel";
import AlbumList from "../../../AlbumList";

function ListItem(user: IUserdata) {
  const [doRemove, isLoading, err] = useThunk(removeUser);
  const deleteHandle = (id: number) => {
    doRemove(id);
  };

  const header = (
    <>
      <div className="flex gap-2 items-center justify-center">
        <Button
          loading={isLoading}
          className={"border-none !p-0"}
          onClick={() => deleteHandle(user.id)}
        >
          <TiDelete
            viewBox="4 4 16 16"
            size={"20"}
            cursor={"pointer"}
            color="white"
          />
        </Button>
        {!err && (
          <span className="text-white text-xl font-medium">{user.name}</span>
        )}
        {err && (
          <span className="text-red-600 text-xl font-bold italic">
            {err.name}: {err.message}
          </span>
        )}
      </div>
    </>
  );
  return (
    <ExpandPanel header={header}>
      <AlbumList user={user} />
    </ExpandPanel>
  );
}

export default ListItem;
