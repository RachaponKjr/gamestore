import React from "react";
import Banner from "./banner";
import LayoutBox from "@/components/layout/layout-box";
import BlogItem from "@/components/layout/blog-item";
import GameItem from "@/components/layout/game-item";
import { Button } from "@/components/ui/button";
import FeaturesSection from "@/components/layout/featureItem";

const HomePage = () => {
  return (
    <div className="container mx-auto pt-20">
      <Banner />
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-0 mb-16">
        <div className="flex-1 flex flex-col gap-6">
          <LayoutBox
            title="Latest Game"
            header={<Button variant={"outline"}>View All</Button>}
          >
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
              {Array.from({ length: 12 }).map((_, index) => (
                <GameItem key={index} />
              ))}
            </div>
          </LayoutBox>
          <LayoutBox
            title="Latest Game"
            header={<Button variant={"outline"}>View All</Button>}
          >
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <GameItem key={index} />
              ))}
            </div>
          </LayoutBox>
          <div className="w-full aspect-16/8 bg-neutral-100 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]"></div>
        </div>
        <div className="basis-2/6 flex flex-col gap-8">
          <LayoutBox
            title="News"
            header={<Button variant={"outline"}>View All</Button>}
          >
            <div className="flex flex-col gap-4 md:gap-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <BlogItem key={index} />
              ))}
            </div>
          </LayoutBox>
          <LayoutBox title="Why Choose Us">
            <FeaturesSection />
          </LayoutBox>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
