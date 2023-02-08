import React from "react";
import { removeUser } from "../../../../store";
import { useThunk } from "../../../../store/hooks";
import { IUserdata } from "../../../../store/slices/usersSlice";
import Button from "../../../Button/Button";
import { TiDelete } from "react-icons/ti";
import { VscTriangleDown } from "react-icons/vsc";

function ListItem(user: IUserdata) {
  const [doRemove, isLoading, err] = useThunk(removeUser);
  const deleteHandle = (id: number) => {
    doRemove(id);
  };
  return (
    <div
      key={user.id}
      className={`shadow-violet-900 shadow-sm w-full justify-between rounded-xl px-4 py-2 ${
        err ? "!bg-red-200" : ""
      }  bg-violet-600 hover:bg-violet-700 duration-300  min-h-[3rem] flex items-center`}
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
        {!err && (
          <span className="text-white text-xl font-medium">{user.name}</span>
        )}
        {err && (
          <span className="text-red-600 text-xl font-bold italic">
            {err.name}: {err.message}
          </span>
        )}
      </div>
      <Button
        loading={isLoading}
        className={"border-none !p-0"}
        onClick={() => {}}
      >
        <VscTriangleDown
          viewBox="2 5 12 6"
          size={20}
          cursor={"pointer"}
          color="white"
        />
      </Button>
    </div>
  );
}

export default ListItem;
