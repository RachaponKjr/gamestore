import React from "react";

const GameItem = () => {
  return (
    <div className="w-full aspect-12/16 bg-neutral-200 rounded-xl group relative flex">
      <div className="relative  w-max bg-red-200 top-6 left-1/2 -translate-x-6">
        <div className="absolute w-12 h-2.5 rounded-full bg-white"></div>
        <div className="absolute w-4 h-4 rounded-full bg-white -top-2 translate-x-1/2! left-2"></div>
      </div>
      {/* hover */}
      <div className="absolute items-center justify-center top-0 left-0 w-full h-full bg-black/40 group-hover:flex hidden duration-300">
        <h5 className="text-base max-w-xl font-bold text-white">
          Lorem, ipsum.
        </h5>
      </div>
    </div>
  );
};

export default GameItem;
