import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
function MenuSelectable() {
  return (
    <Select>
      <SelectTrigger className="w-36">
        <SelectValue placeholder="Menu" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="planes">Planes</SelectItem>
        <SelectItem value="features">Features</SelectItem>
        <SelectItem value="contacto">Contacto</SelectItem>
        <SelectItem value="tc">T&C</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default function NavBar() {
  return (
    <div className="flex justify-between items-center py-7 px-14 ">
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
          <Button>Contacto</Button>
          <MenuSelectable />
        </div>
      </div>
    </div>
  );
}
