"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // เพิ่ม Effect เมื่อ Scroll หน้าจอเพื่อให้ Navbar ดูมีมิติ
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 border-b border-[#FFFFFF]/20 shadow-lg left-0 w-full z-100 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0c2a]/95 backdrop-blur-md shadow-lg"
            : "bg-[#0b0c2a]"
        }`}
      >
        <div className="bg-[#e53637] py-2 text-white overflow-hidden">
          <div className="container mx-auto px-4 flex justify-center items-center gap-4 text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-center">
            <span className="hidden sm:inline-flex items-center gap-1">
              <Icon icon="mdi:fire" width={16} /> NEW UPDATE:
            </span>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
        <div className="container mx-auto max-w-7xl flex items-center justify-between px-4 lg:px-6">
          {/* 1. Logo Section */}
          <div className="">
            <Link href="/" className="group">
              <h1 className="text-3xl font-black tracking-tighter text-white uppercase italic">
                Ga
                <span className="text-[#e53637] group-hover:text-white transition-colors">
                  me
                </span>
              </h1>
            </Link>
          </div>

          {/* 2. Menu Section (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <ul className="flex items-center gap-2 font-bold uppercase text-sm tracking-widest">
              <li className="relative group">
                <Link
                  href="/"
                  className="bg-[#e53637] text-white py-6 px-8 block transition-all"
                >
                  Home
                </Link>
              </li>
              <li className="group relative">
                <Link
                  href="/games"
                  className="flex items-center gap-1 text-white py-6 px-6 hover:text-[#e53637] transition"
                >
                  Game
                </Link>
                {/* Simple Dropdown Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#e53637] group-hover:w-1/2 transition-all"></div>
              </li>
              <li className="group relative">
                <Link
                  href="/blog"
                  className="text-white py-6 px-6 hover:text-[#e53637] transition"
                >
                  Our Blog
                </Link>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#e53637] group-hover:w-1/2 transition-all"></div>
              </li>
              <li className="group relative">
                <Link
                  href="/contact"
                  className="text-white py-6 px-6 hover:text-[#e53637] transition"
                >
                  Contacts
                </Link>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#e53637] group-hover:w-1/2 transition-all"></div>
              </li>
            </ul>
          </div>

          {/* 3. Search & User & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="flex items-center border-r border-white/10 pr-4 mr-2 gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-[#e53637] hover:bg-transparent transition-transform active:scale-90"
              >
                <Icon icon="mdi:magnify" width={24} className="scale-150" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-[#e53637] hover:bg-transparent transition-transform active:scale-90"
              >
                <Icon icon="mdi:account" width={24} className="scale-150" />
              </Button>
            </div>

            {/* Hamburger (Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-[#e53637] transition-colors"
            >
              <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} width={30} />
            </button>
          </div>
        </div>

        {/* 4. Mobile Menu Overlay */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-[#0b0c2a] border-t border-white/5 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col font-bold uppercase tracking-widest text-sm">
            <li>
              <Link
                href="/"
                className="block px-8 py-5 bg-[#e53637] text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/games"
                className="flex justify-between items-center px-8 py-5 text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Game
                <Icon icon="iconamoon:arrow-down-2-light" width={20} />
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block px-8 py-5 text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Our Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-8 py-5 text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
