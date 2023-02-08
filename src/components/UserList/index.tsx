import React, { useEffect } from "react";
import { fetchUsers } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Skeleton from "../skeleton";

function UserList() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { data, error, isLoading } = useAppSelector((store) => store.users);

  return (
    <>
      {isLoading ? (
        <Skeleton numbers={3} customClass="!gap-2" ItemCustomClass="h-10" />
      ) : error ? (
        <div className="flex flex-col items-center">
          <p>{error.name}</p>
          <p>{error.message}</p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full rounded-lg p-2 bg-violet-500 cursor-pointer"
            >
              <span className="text-white text-lg font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default UserList;
