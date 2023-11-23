import React from "react";
import NavBar from "./shared/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-7 py-7 pl-7 ">
      <NavBar />
      {children}
    </div>
  );
}
