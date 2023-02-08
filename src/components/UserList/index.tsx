import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";
import { addUser, fetchUsers } from "../../store";
import { useAppSelector, useThunk } from "../../store/hooks";
import Button from "../Button/Button";
import Skeleton from "../skeleton";

function UserList() {
  const [doFetchUsers, isLoadingUsers, loadingUserError] = useThunk(fetchUsers);
  const [doCreateuser, isCreatingUser, createErr] = useThunk(addUser);

  const { data } = useAppSelector((store) => store.users);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doCreateuser(faker.name.fullName());
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <span className="text-3xl font-semibold text-violet-700">
          List of Users
        </span>
        <div className="flex flex-col items-end">
          <Button
            primary
            rounded
            onClick={handleAddUser}
            loading={isCreatingUser}
            className={"h-11 w-36 justify-center"}
          >
            <span className="font-medium text-lg px-3">+ Add User</span>
          </Button>
          {createErr && (
            <span className="text-red-600">
              {createErr.name}: {createErr.message}
            </span>
          )}
        </div>
      </div>
      {isLoadingUsers ? (
        <Skeleton numbers={6} customClass="!gap-1" ItemCustomClass="!h-12" />
      ) : loadingUserError ? (
        <div className="flex flex-col items-center bg-red-200 rounded-xl h-12 justify-center">
          <p className="text-red-600 text-xl font-medium">
            {loadingUserError.name}: {loadingUserError.message}
          </p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-1 max-h-[19.25rem] overflow-scroll">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full rounded-xl p-2 bg-violet-500 hover:bg-violet-600 duration-300 cursor-pointer min-h-[3rem] flex items-center"
            >
              <span className="text-white text-xl font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;
