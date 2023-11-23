import React from "react";
import NavBar from "./shared/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-7">
      <NavBar />
      {children}
    </div>
  );
}
