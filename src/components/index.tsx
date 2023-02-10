import React from "react";
import CopyRight from "./copyRight";
import MainTitle from "./MainTitle";
import UserList from "./UserList";

function MediaApp() {
  return (
    <>
      <div className="flex flex-col gap-6 container bg-violet-100 rounded-2xl py-4 px-8 absolute left-1/2 -translate-x-1/2 top-[6rem] shadow-lg">
        <MainTitle />
        <UserList />
        <CopyRight />
      </div>
      {/* THIS NOTE DELETED IN NEXT PROJECT */}
      <div className="bottom-[10%] left-1/2 -translate-x-1/2 text-center  absolute container text-red-400">
        <span className="font-semibold italic">NOTE:</span> This project is done
        for Async Thunk practice and the continuation of functions in this{" "}
        <a
          className="font-semibold cursor-pointer underline text-red-500 hover:text-red-600 duration-500"
          href="https://github.com/ghmasood/RTK-media"
        >
          repository{" "}
          <span className="font-normal italic text-sm">
            (github.com/ghmasood/RTK-media)
          </span>
        </a>{" "}
        is completed for Redux Toolkit Query (RTK) practice.
      </div>
      {/* THIS NOTE DELETED IN NEXT PROJECT */}
    </>
  );
}

export default MediaApp;
