import React from "react";
import { Button } from "../ui/button";
import { ChevronsUpDown } from "lucide-react";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center pr-7 py-2 ">
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
          <Button>Descargar</Button>
          <Button variant="secondary" className="flex items-center gap-3">
            Menu
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
