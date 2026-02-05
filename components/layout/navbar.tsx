"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ffffff] text-[#0b0c2a] relative z-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-0">
        {/* 1. Logo Section */}
        <div className="py-5">
          <h1 className="text-3xl font-bold tracking-tighter">
            Ga<span className="text-[#e53637]">me</span>
          </h1>
        </div>

        {/* 2. Menu Section (Desktop) - ซ่อนเมื่อเป็น Mobile */}
        <div className="hidden lg:flex flex-1 ml-20">
          <ul className="flex items-center gap-10 font-semibold">
            <li className="bg-[#e53637] text-white py-6 px-8 cursor-pointer">
              <Link href="#">Home</Link>
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-[#e53637] transition">
              <Link href="#">Game</Link>
              <Icon icon="iconamoon:arrow-down-2-light" width={18} />
            </li>
            <li className="cursor-pointer hover:text-[#e53637] transition">
              <Link href="#">Our Blog</Link>
            </li>
            <li className="cursor-pointer hover:text-[#e53637] transition">
              <Link href="#">Contacts</Link>
            </li>
          </ul>
        </div>

        {/* 3. Search, User & Mobile Toggle */}
        <div className="flex items-center gap-2 lg:gap-6">
          <Button
            size={"icon-lg"}
            variant={"ghost"}
            className="hover:text-[#e53637] rounded-full transition cursor-pointer"
          >
            <Icon
              icon="mdi:magnify"
              width={26}
              height={26}
              className="scale-125 lg:scale-150"
            />
          </Button>
          <Button
            size={"icon-lg"}
            variant={"ghost"}
            className="hover:text-[#e53637] rounded-full transition cursor-pointer"
          >
            <Icon
              icon="mdi:account"
              width={26}
              height={26}
              className="scale-125 lg:scale-150"
            />
          </Button>

          {/* ปุ่ม Hamburger (แสดงเฉพาะ Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-2xl"
          >
            <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} />
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Overlay (แสดงเมื่อกดปุ่ม) */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col font-semibold">
          <li className="border-b">
            <Link href="#" className="block px-6 py-4 bg-[#e53637] text-white">
              Home
            </Link>
          </li>
          <li className="border-b">
            <Link
              href="#"
              className="flex justify-between items-center px-6 py-4 hover:text-[#e53637]"
            >
              Game
              <Icon icon="iconamoon:arrow-down-2-light" width={18} />
            </Link>
          </li>
          <li className="border-b">
            <Link href="#" className="block px-6 py-4 hover:text-[#e53637]">
              Our Blog
            </Link>
          </li>
          <li className="border-b">
            <Link href="#" className="block px-6 py-4 hover:text-[#e53637]">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
