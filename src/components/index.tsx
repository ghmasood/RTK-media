import React from "react";
import UserList from "./UserList";

function MediaApp() {
  return (
    <div className="container bg-violet-100 rounded-2xl p-8 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
      <UserList />
    </div>
  );
}

export default MediaApp;
