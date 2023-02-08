import React from "react";
import { removeUser } from "../../../../store";
import { useThunk } from "../../../../store/hooks";
import { IUserdata } from "../../../../store/slices/usersSlice";
import Button from "../../../Button/Button";
import { TiDelete } from "react-icons/ti";

function ListItem(user: IUserdata) {
  const [doRemove, isLoading, err] = useThunk(removeUser);
  const deleteHandle = (id: number) => {
    doRemove(id);
  };
  return (
    <div
      key={user.id}
      className="w-full justify-between rounded-xl px-4 py-2 bg-violet-500 hover:bg-violet-600 duration-300  min-h-[3rem] flex items-center"
    >
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
        <span className="text-white text-xl font-medium">{user.name}</span>
      </div>
      <span>ff</span>
    </div>
  );
}

export default ListItem;
