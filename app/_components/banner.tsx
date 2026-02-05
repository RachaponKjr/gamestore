import { Icon } from "@iconify/react";
import React from "react";

const Banner = () => {
  return (
    <div className="relative my-10 md:my-20 max-w-11/12 md:max-w-10/12 mx-auto">
      <div className="bg-neutral-200 w-full aspect-16/8 flex items-end relative">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-black/50 via-black/10 to-transparent" />
        <div className="text-[#0b0c2a] flex flex-col gap-2 p-10">
          <h5 className="text-lg md:text-3xl max-w-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            quidem?
          </h5>
          <p className="max-w-xl text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            sed laboriosam ea eaque porro nesciunt quibusdam repellat iusto.
            Eius, eligendi.
          </p>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 rotate-45 -translate-x-1/2 -translate-y-1/2 w-16 h-16 p-2 bg-[#0b0c2a]">
        <div className="w-full h-full bg-white/70 cursor-pointer flex items-center justify-center">
          <Icon
            icon="mdi:arrow-left"
            width={26}
            height={26}
            color="#0b0c2a"
            className="-rotate-45"
          />
        </div>
      </div>
      <div className="absolute top-1/2 right-0 rotate-45 translate-x-1/2 -translate-y-1/2 w-16 h-16 p-2 bg-[#0b0c2a]">
        <div className="w-full h-full bg-white/70 cursor-pointer flex items-center justify-center">
          <Icon
            icon="mdi:arrow-right"
            width={26}
            height={26}
            color="#0b0c2a"
            className="-rotate-45"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
