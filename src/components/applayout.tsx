import AOSWrapper from "@/lib/aos";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-36">
      <AOSWrapper>{children}</AOSWrapper>
    </div>
  );
}
