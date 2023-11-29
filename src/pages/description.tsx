import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

export default function Features() {
  return (
    <div className="space-y-5  px-14">
      <div className="space-y-7">
        <h1 className="font-montserrat font-black text-4xl tracking-tight">
          Registra para trackerlos
        </h1>

        <p className="text-lg w-[400px]">
          Simple, rápido y fácil de usar, registra tus gastos en menos de 10
          segundos.
        </p>
        <Button className="rounded-full flex items-center gap-3 p-6 px-10">
          Descargar
          <ArrowDownToLine size={20} />
        </Button>
        <div className="flex gap-7">
          <div className="mt-20 w-[500px] rounded-2xl h-[600px] relative overflow-hidden">
            <img
              src="https://images.pexels.com/photos/7251055/pexels-photo-7251055.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="image"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-[800px] rounded-2xl h-[600px] relative overflow-hidden">
            <img
              src="https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
