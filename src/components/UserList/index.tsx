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
        <span>{data.length}</span>
      )}
    </>
  );
}

export default UserList;
