import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { scroller as scrollSpy } from "react-scroll";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { FullScreenMenu } from "./mobile-menu";
import { Menu } from "lucide-react";

interface ScrollSpy {
  scrollTo: (
    name: string,
    options: { duration: number; delay: number; smooth: string | boolean }
  ) => void;
}

const scroller = scrollSpy as ScrollSpy;

function MenuSelectable() {
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
    <Select onValueChange={handleSelect} defaultValue="home">
      <SelectTrigger className="w-36">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="home">Inicio</SelectItem>
        <SelectItem value="features">Features</SelectItem>
        <SelectItem value="testimonials">Reseñas</SelectItem>
        <SelectItem value="plans">Descargar</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  return (
    <div className="fixed top-0 lg:w-full">
      <div className="flex lg:justify-between items-center lg:py-10 py-5 lg:px-14 px-5 gap-48 bg-white">
        <div className="flex gap-2 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5200/5200787.png?ga=GA1.1.1536754857.1700396359&semt=aisemanticweb&semd=none&semg=2105250945&se=google&sv=1"
            alt="Vite Logo"
            className="lg:h-8 h-4"
          />
          <h3 className="font-montserrat font-bold lg:text-xl">
            Expense Tracker
          </h3>
        </div>
        <div>
          <Button
            variant="secondary"
            className="lg:hidden"
            onClick={handleMenuOpen}
          >
            <Menu />
          </Button>

          <FullScreenMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
        </div>
        <div className="lg:flex hidden  justify-between">
          <div className="flex gap-2">
            <a
              href="https://api.whatsapp.com/send?phone=+51914019629&text=Hola, consulta sobre tu app Expense Tracker"
              target="_blank"
            >
              <Button>Contacto</Button>
            </a>
            <MenuSelectable />
          </div>
        </div>
      </div>
    </div>
  );
}
