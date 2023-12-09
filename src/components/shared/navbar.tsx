import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { scroller } from "react-scroll";
import { Button } from "../ui/button";
import { useEffect } from "react";
function MenuSelectable() {
  const handleSelect = (value: string) => {
    scroller.scrollTo(value, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  useEffect(() => {
    scroller.scrollTo("home", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
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
  return (
    <div className="flex justify-between items-center py-10 px-14 fixed top-0 w-full bg-white z-50">
      <div className="flex gap-2 items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5200/5200787.png?ga=GA1.1.1536754857.1700396359&semt=aisemanticweb&semd=none&semg=2105250945&se=google&sv=1"
          alt="Vite Logo"
          className="h-8"
        />
        <h3 className="font-montserrat font-bold text-xl">Expense Tracker</h3>
      </div>
      <div className="flex justify-between">
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
  );
}
