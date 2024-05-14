import AOSWrapper from "@/lib/aos";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:space-y-36 space-y-10 overflow-x-hidden">
      <AOSWrapper>{children}</AOSWrapper>
    </div>
  );
}
