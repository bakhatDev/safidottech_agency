"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]">
      <div className="w-16 h-16 border-4 border-white/10 border-t-[#C2F026] rounded-full animate-spin"></div>
    </div>
  );
}
