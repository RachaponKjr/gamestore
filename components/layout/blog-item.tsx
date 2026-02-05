import React from "react";

const BlogItem = () => {
  return (
    <div className="w-full aspect-16/8 bg-neutral-100 rounded-xl relative flex items-end">
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-black/50 via-black/10 to-transparent" />
      <div className="text-[#0b0c2a] flex flex-col gap-2 p-6">
        <h5 className="text-sm md:text-xl max-w-xl font-bold">
          Lorem ipsum dolor sit amet consectetur
        </h5>
        <p className="max-w-xl text-xs md:text-sm line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sed
          laboriosam ea eaque porro nesciunt quibusdam repellat iusto. Eius,
          eligendi.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
