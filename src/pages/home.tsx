import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <div className="flex ">
      <div className="space-y-5 -mt-24 flex flex-col justify-center items-center">
        <h1 className="font-montserrat px-80   text-center font-black text-6xl tracking-tight">
          Controla tus gastos fácil y rápido
        </h1>

        <p className="text-lg px-20 text-center">
          La mejor app para controlar tus gastos.
        </p>
        <div className="flex gap-3 pt-7">
          <Button className="rounded-full flex items-center gap-3 p-6 px-10">
            <img
              src="/src/assets/app-store.svg"
              alt="app-store"
              className="w-5"
            />
            App Store
          </Button>
          <Button className="rounded-full flex items-center gap-3 p-6 px-10">
            <img
              src="/src/assets/google-play.svg"
              alt="app-store"
              className="w-5"
            />
            Google Play
          </Button>
        </div>
      </div>
    </div>
  );
}
