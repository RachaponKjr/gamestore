/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Loader2, CheckCircle2 } from "lucide-react"; // ใช้ lucide-react สำหรับไอคอน

export default function LoginSuccess() {
  const { login } = useAuth();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  // ใช้ useRef เพื่อป้องกันการรันซ้ำ (Prevent double execution in Strict Mode)
  const isProcessed = useRef(false);

  useEffect(() => {
    if (isProcessed.current) return;

    const token = searchParams.get("token");
    if (token) {
      isProcessed.current = true;
      try {
        console.log("Token found, logging in...");
        login(token); // มั่นใจว่าในฟังก์ชันนี้ไม่มีการสั่ง router.push ซ้อน
        setStatus("success");
      } catch (err) {
        console.error("Login failed:", err);
        setStatus("error");
      }
    } else {
      setStatus("error");
    }
  }, [searchParams, login]);

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        console.log("Redirecting to home...");
        window.location.href = "/"; // ใช้ window.location เพื่อล้าง State เก่าให้สะอาดที่สุด
      }, 2000);
      return () => clearTimeout(timer);
    } else if (status === "error") {
      const timer = setTimeout(() => {
        router.replace("/login");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status, router]);

  return (
    <div className="min-h-screen bg-[#0b0c2a] flex items-center justify-center text-white">
      <div className="max-w-md w-full p-8 text-center">
        {status === "loading" && (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-12 h-12 text-[#e53637] animate-spin" />
            <h2 className="text-xl font-bold tracking-wider uppercase">
              ยืนยันตัวตน...
            </h2>
            <p className="text-gray-400 text-sm">
              กำลังเชื่อมต่อข้อมูลจาก Google
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
            <div className="bg-green-500/10 p-4 rounded-full">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-xl font-bold tracking-wider uppercase">
              เข้าสู่ระบบสำเร็จ!
            </h2>
            <p className="text-gray-400 text-sm">ยินดีต้อนรับกลับเข้าสู่ระบบ</p>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center gap-4">
            <div className="bg-red-500/10 p-4 rounded-full">
              <div className="w-12 h-12 text-[#e53637] flex items-center justify-center text-4xl">
                !
              </div>
            </div>
            <h2 className="text-xl font-bold tracking-wider uppercase text-[#e53637]">
              เกิดข้อผิดพลาด
            </h2>
            <p className="text-gray-400 text-sm">
              ไม่พบข้อมูลการยืนยันตัวตน กรุณาลองใหม่อีกครั้ง
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
