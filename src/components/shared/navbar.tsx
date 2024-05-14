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
    <div className=" lg:fixed top-0 z-10 lg:w-full ">
      <div className=" flex justify-between w-full items-center m-4 rounded-xl  py-5 lg:px-14 px-5 pr-10 bg-transparent backdrop-blur-md ">
        <div className="flex gap-2 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5200/5200787.png?ga=GA1.1.1536754857.1700396359&semt=aisemanticweb&semd=none&semg=2105250945&se=google&sv=1"
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
          <SheetContent className="w-full">
            <SheetHeader>
              <SheetDescription className="space-y-2 mt-10">
                <Button
                  onClick={() => handleSelect("home")}
                  className="w-full rounded-none tracking-tight flex justify-start text-2xl border-black  active:border-b"
                  variant="ghost"
                >
                  Inicio
                </Button>
                <Button
                  onClick={() => handleSelect("features")}
                  className="w-full rounded-none tracking-tight flex justify-start text-2xl border-black  active:border-b"
                  variant="ghost"
                >
                  Features
                </Button>
                <Button
                  onClick={() => handleSelect("testimonials")}
                  className="w-full rounded-none tracking-tight flex justify-start text-2xl border-black  active:border-b"
                  variant="ghost"
                >
                  Reseñas
                </Button>
                <Button
                  onClick={() => handleSelect("plans")}
                  className="w-full rounded-none tracking-tight flex justify-start text-2xl border-black  active:border-b"
                  variant="ghost"
                >
                  Descargar
                </Button>
              </SheetDescription>
            </SheetHeader>
            <SheetFooter className="absolute bottom-0  left-5 flex justify-center items-center">
              <Button className="rounded-full flex items-center gap-3 my-6 p-6 px-10">
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
    </div>
  );
}
