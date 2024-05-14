import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { scroller as scrollSpy } from "react-scroll";
import { Button } from "../ui/button";
interface ScrollSpy {
  scrollTo: (
    name: string,
    options: { duration: number; delay: number; smooth: string | boolean }
  ) => void;
}

const scroller = scrollSpy as ScrollSpy;

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleSelect = (value: string) => {
    scroller.scrollTo(value, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  useEffect(() => {
    scroller.scrollTo("home", {
      duration: 1000,
      delay: 0,
      smooth: true,
    });
  }, []);

  return (
    <div className=" flex justify-between w-full items-center  rounded-xl  p-5 lg:p-10  bg-transparent backdrop-blur-md ">
      <div className="flex gap-2 items-center">
        <img
          src="https://camo.githubusercontent.com/33b7d5ff0bb7baf7e4a080548ab1a7cfd7eb6ec08d63ad22177c60fc69fb3cb7/68747470733a2f2f63646e2d69636f6e732d706e672e6672656570696b2e636f6d2f3235362f31323232382f31323232383834392e706e673f67613d4741312e312e313639353932383236312e313731323539333330332673656d743d6169735f687962726964"
          alt="Vite Logo"
          className="lg:h-8 h-4"
        />
        <h3 className="font-montserrat font-bold lg:text-xl">Monedo</h3>
      </div>

      <Sheet>
        <SheetTrigger onClick={() => setMenuOpen(!isMenuOpen)}>
          <img
            src="https://www.svgrepo.com/show/511072/menu-duo-lg.svg"
            alt="menu"
            className="w-6 h-6 active:opacity-70 active:scale-95"
          />
        </SheetTrigger>
        <SheetContent className="w-full p-0">
          <SheetHeader>
            <SheetDescription className="space-y-2 mt-10 font-montserrat">
              <Button
                onClick={() => handleSelect("home")}
                className="w-full p-6 rounded-none tracking-tight flex justify-start text-2xl border-black  active:border-b"
                variant="ghost"
              >
                Inicio
              </Button>
              <Button
                onClick={() => handleSelect("features")}
                className="w-full p-6  rounded-none tracking-tight flex justify-start text-2xl border-black  active:border-b"
                variant="ghost"
              >
                Features
              </Button>
              <Button
                onClick={() => handleSelect("testimonials")}
                className="w-full p-6  rounded-none tracking-tight flex justify-start text-2xl border-black  active:border-b"
                variant="ghost"
              >
                Reseñas
              </Button>
              <Button
                onClick={() => handleSelect("plans")}
                className="w-full p-6  rounded-none tracking-tight flex justify-start text-2xl border-black  active:border-b"
                variant="ghost"
              >
                Descargar
              </Button>
            </SheetDescription>
          </SheetHeader>
          <SheetFooter className="absolute bottom-0  left-5 flex justify-center items-center">
            <Button className="rounded-full font-montserrat p-6  flex items-center gap-3 my-6  px-10">
              <a
                href="https://api.whatsapp.com/send?phone=+51914019629&text=Hola, consulta sobre tu app Monedo"
                target="_blank"
              >
                Contacto
              </a>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
