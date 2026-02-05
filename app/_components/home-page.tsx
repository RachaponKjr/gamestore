import React from "react";
import Banner from "./banner";
import LayoutBox from "@/components/layout/layout-box";
import BlogItem from "@/components/layout/blog-item";
import GameItem from "@/components/layout/game-item";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-6">
          <LayoutBox title="Latest Game">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, index) => (
                <GameItem key={index} />
              ))}
            </div>
          </LayoutBox>
          <LayoutBox title="Latest Game">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <GameItem key={index} />
              ))}
            </div>
          </LayoutBox>
        </div>
        <div className="basis-2/6">
          <LayoutBox title="News">
            <div className="flex flex-col gap-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <BlogItem key={index} />
              ))}
            </div>
          </LayoutBox>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
