import React from "react";

function MainTitle() {
  return (
    <div className="items-center w-full flex flex-col gap-2">
      <h1 className="text-6xl font-bold text-violet-900">Media App</h1>
      <span className="italic text-violet-800 text-sm ">
        In this app i used Redux Toolkit and Async Thunk according to Udemy
        course by Stephan Grider.
      </span>
    </div>
  );
}

export default MainTitle;
