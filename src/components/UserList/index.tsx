import React, { useEffect } from "react";
import { fetchUsers } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import Skeleton from "../skeleton";

function UserList() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { data, error, isLoading } = useAppSelector((store) => store.users);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="text-3xl font-semibold text-violet-700">
          List of Users
        </span>
      </div>
      {isLoading ? (
        <Skeleton numbers={2} customClass="!gap-1" ItemCustomClass="h-12" />
      ) : error ? (
        <div className="flex flex-col items-center">
          <p>{error.name}</p>
          <p>{error.message}</p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-1">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full rounded-xl p-2 bg-violet-500 cursor-pointer h-12 flex items-center"
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
