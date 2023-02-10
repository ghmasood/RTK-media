import React, { ReactNode, useState } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import Button from "../Button/Button";

interface IExpaExpandPanelProps {
  header: ReactNode;
  children: ReactNode;
}
function ExpandPanel({ header, children }: IExpaExpandPanelProps) {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={`shadow-violet-900  flex flex-col items-center shadow-sm w-full justify-center rounded-xl px-4${
        false ? "!bg-red-200" : "" //fixx
      }  bg-violet-600 hover:bg-violet-700 duration-300 flex items-center`}
    >
      <div className="flex items-center justify-between w-full h-[3rem]  ">
        <>{header}</>
        <VscTriangleDown
          onClick={() => {
            setExpand(!expand);
          }}
          viewBox="2 5 12 6"
          size={20}
          cursor={"pointer"}
          color="white"
          className={`duration-700 ${expand ? "rotate-180" : ""}`}
        />
      </div>
      {expand && (
        <div className="flex w-full p-2 m-2 bg-violet-500 rounded-xl ">
          {children}
        </div>
      )}
    </div>
  );
}

export default ExpandPanel;
