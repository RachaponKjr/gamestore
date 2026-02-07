"use client";

import React, { useState } from "react";
// import { useSearchGames } from "@/hooks/useGames";
import GameItem from "@/components/layout/game-item";

const AllGamesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  // ดึงข้อมูลโดยใช้ Hook ที่เราทำไว้ (เพิ่ม category เข้าไปใน params)
  //   const { data, isLoading } = useSearchGames(searchTerm, page, 12);

  const categories = [
    { id: "all", name: "ทั้งหมด" },
    { id: "mobile", name: "เกมมือถือ" },
    { id: "pc", name: "เกม PC" },
    { id: "console", name: "คอนโซล" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* --- Sidebar Filter --- */}
      <aside className="w-64 bg-white border-r p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6">หมวดหมู่เกม</h2>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            ช่วงราคา
          </h2>
          {/* สามารถเพิ่ม Filter อื่นๆ เช่น ช่วงราคา ได้ที่นี่ */}
        </div>
      </aside>

      {/* --- Main Content --- */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            รายการเกมทั้งหมด
          </h1>
          <div className="relative w-72">
            <input
              type="text"
              placeholder="ค้นหาเกม..."
              className="w-full pl-4 pr-10 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Game Grid */}
        {/* {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-64 bg-gray-200 animate-pulse rounded-xl"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data?.data?.map((game: any) => (
              <GameItem key={game.id} game={game} />
            ))}
          </div>
        )} */}

        {/* Empty State */}
        {/* {!isLoading && data?.data?.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">ไม่พบเกมที่คุณกำลังมองหา...</p>
          </div> */}
        {/* )} */}
      </main>
    </div>
  );
};

export default AllGamesPage;
