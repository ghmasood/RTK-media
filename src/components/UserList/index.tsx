import React, { useEffect } from "react";
import { fetchUsers } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function UserList() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { data, error, isLoading } = useAppSelector((store) => store.users);

  // if (isLoading) {
  //   return <span>ff</span>;
  // }
  // if (error) {
  //   return (
  //     <span>
  //       {error.name}
  //       <br />
  //       {error.message}
  //     </span>
  //   );
  // }
  // return <div>{data.length}</div>;
  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
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
