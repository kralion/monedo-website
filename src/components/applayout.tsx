import React from "react";
import NavBar from "./shared/navbar";
import AOSWrapper from "@/lib/aos";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-36">
      <NavBar />

      <AOSWrapper>
        <div className="pt-36">{children} </div>
      </AOSWrapper>
    </div>
  );
}
