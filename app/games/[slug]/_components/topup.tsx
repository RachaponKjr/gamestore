"use client";
import LayoutSection from "@/components/layout/layout-section";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Policy from "./policy";

interface Pack {
  id: number;
  amount: number;
  price: number;
  bonus: string;
  popular: boolean;
}

const TopUpPage = () => {
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);
  const [selectedMethod, setSelectedMethod] = useState("");

  const packs = [
    { id: 1, amount: 100, price: 35, bonus: "5", popular: false },
    { id: 2, amount: 300, price: 100, bonus: "20", popular: true },
    { id: 3, amount: 500, price: 165, bonus: "45", popular: false },
    { id: 4, amount: 1000, price: 320, bonus: "100", popular: false },
    { id: 5, amount: 2000, price: 630, bonus: "250", popular: false },
    { id: 6, amount: 5000, price: 1550, bonus: "700", popular: false },
  ];

  const paymentMethods = [
    {
      id: "truemoney",
      name: "TrueMoney Wallet",
      icon: "logos:truemoney",
      fee: "0%",
    },
    {
      id: "promptpay",
      name: "Thai QR PromptPay",
      icon: "logos:promptpay-icon",
      fee: "0%",
    },
    {
      id: "kplus",
      name: "K-Plus Mobile Banking",
      icon: "simple-icons:kasikornbank",
      color: "#13803a",
      fee: "0%",
    },
  ];

  return (
    <LayoutSection>
      <div className="container mx-auto max-w-7xl py-6 px-4 text-[#0b0c2a]">
        {/* --- 1. Game Header Section --- */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-10 bg-gradient-to-r from-[#0b0c2a] to-[#1a1c4e] p-8 rounded-[2.5rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10 translate-x-10 -translate-y-10">
            <Icon icon="mdi:controller" width={300} />
          </div>

          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border-4 border-white/20 shadow-md z-10">
            <img
              src="https://play-lh.googleusercontent.com/I9K9H3AnI3u4V-H5eE4pG7S8S6Z5M1O1M8N-L-Q-Z-Y-S-E-Y-S-E"
              alt="Game Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left z-10">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="bg-[#e53637] text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-widest">
                Official Partner
              </span>
              <div className="flex text-yellow-400">
                <Icon icon="material-symbols:star" />
                <Icon icon="material-symbols:star" />
                <Icon icon="material-symbols:star" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter">
              GENSHIN IMPACT
            </h1>
            <p className="text-white/60 mt-2 flex items-center justify-center md:justify-start gap-4">
              <span className="flex items-center gap-1">
                <Icon icon="mdi:flash" className="text-yellow-400" />
                ส่งไวใน 1 นาที
              </span>
              <span className="flex items-center gap-1">
                <Icon icon="mdi:shield-check" className="text-green-400" />
                ใช้เพียง UUID
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- ฝั่งซ้าย: เลือกแพ็กเกจ (8/12) --- */}
          <div className="lg:col-span-8 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#0b0c2a] text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold">
                  1
                </span>
                <h3 className="text-2xl font-bold">เลือกจำนวน Primogems</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {packs.map((pack) => (
                  <div
                    key={pack.id}
                    onClick={() => setSelectedPack(pack)}
                    className={`relative p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center gap-1 group ${
                      selectedPack?.id === pack.id
                        ? "border-[#e53637] bg-red-50 shadow-md ring-1 ring-[#e53637]"
                        : "border-gray-100 bg-white hover:border-gray-300 shadow-sm"
                    }`}
                  >
                    {pack.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e53637] text-white text-[10px] px-3 py-1 rounded-full font-bold shadow-sm">
                        POPULAR
                      </span>
                    )}
                    <Icon
                      icon="twemoji:gem-stone"
                      width={40}
                      className="mb-2 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xl font-black text-[#0b0c2a]">
                      {pack.amount.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#e53637] font-bold">
                      +{pack.bonus} Bonus
                    </span>
                    <div
                      className={`mt-3 w-full text-center py-2 rounded-xl font-bold text-sm ${selectedPack?.id === pack.id ? "bg-[#e53637] text-white" : "bg-gray-100 text-gray-600"}`}
                    >
                      ฿{pack.price}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* --- Policy & Instructions Section --- */}
            <div className={"hidden md:block"}>
              <Policy />
            </div>
          </div>

          {/* --- ฝั่งขวา: ข้อมูล & ชำระเงิน (4/12) --- */}
          <div className="lg:col-span-4 space-y-6">
            {/* Step 2: ข้อมูลผู้ใช้ */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#0b0c2a] text-white w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <h3 className="text-lg font-bold">ข้อมูลตัวละคร</h3>
              </div>
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="กรอก UID"
                    className="w-full px-5 py-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-[#e53637] border-none font-bold"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: ชำระเงิน */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#0b0c2a] text-white w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <h3 className="text-lg font-bold">ช่องทางชำระเงิน</h3>
              </div>
              <div className="space-y-2">
                {paymentMethods.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => setSelectedMethod(m.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all ${selectedMethod === m.id ? "border-[#e53637] bg-red-50" : "border-gray-50 hover:bg-gray-50"}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon icon={m.icon} width={28} />
                      <span className="text-sm font-bold text-gray-700">
                        {m.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-400">
                      ค่าธรรมเนียม {m.fee}
                    </span>
                  </div>
                ))}
              </div>

              {/* สรุปยอด */}
              {selectedPack && (
                <div className="mt-6 pt-6 border-t border-dashed space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">แพ็กเกจ</span>
                    <span className="font-bold">
                      {selectedPack.amount} Gems
                    </span>
                  </div>
                  <div className="flex justify-between text-xl font-black text-[#0b0c2a]">
                    <span>ยอดชำระ</span>
                    <span className="text-[#e53637]">
                      ฿{selectedPack.price}
                    </span>
                  </div>
                </div>
              )}

              <button
                disabled={!selectedPack || !selectedMethod}
                className="w-full mt-6 py-4 bg-[#e53637] disabled:bg-gray-300 text-white rounded-xl font-bold text-lg shadow-md shadow-red-200 transition-all hover:scale-[1.02] active:scale-95"
              >
                ชำระเงิน
              </button>
            </div>
            <div className={"md:hidden block"}>
              <Policy />
            </div>
          </div>
        </div>
      </div>
    </LayoutSection>
  );
};

export default TopUpPage;
