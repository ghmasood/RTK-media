import React from "react";
import CopyRight from "./copyRight";
import MainTitle from "./MainTitle";
import UserList from "./UserList";

function MediaApp() {
  return (
    <div className="flex flex-col gap-6 container bg-violet-100 rounded-2xl py-4 px-8 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 shadow-lg">
      <MainTitle />
      <UserList />
      <CopyRight />
    </div>
  );
}

export default MediaApp;
