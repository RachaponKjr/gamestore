import React from "react";

const LayoutSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col bg-white gap-4">
      <div className="w-full aspect-16/8 md:aspect-16/6 bg-neutral-200"></div>
      {children}
    </div>
  );
};

export default LayoutSection;
