import React from "react";
interface ISkeletonProps {
  numbers: number;
  ItemCustomClass?: string;
  customClass?: string;
}
function Skeleton({
  numbers,
  customClass = "",
  ItemCustomClass = "",
}: ISkeletonProps) {
  return (
    <div className={`flex flex-col gap-24 ${customClass}`}>
      {Array(numbers)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`relative overflow-hidden bg-gray-200 rounded h-10 w-full ${ItemCustomClass}`}
          >
            <div className="animate-shimShim absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-200 via-white to-gray-200" />
          </div>
        ))}
    </div>
  );
}

export default Skeleton;
