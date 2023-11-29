import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <div className="space-y-7 px-14">
      <h1 className="font-montserrat font-black text-4xl tracking-tight text-center">
        Nuestras Funcionalidades
      </h1>
      <p className="text-lg  text-center px-[350px]">
        Con nuestras funcionalidades a medida podrás controlar tus gastos y ser
        mas eficiente / conciente con tu dinero.
      </p>
      <div className="grid grid-rows-3 gap-7 grid-flow-col ">
        <div className="w-[600px] row-span-3 space-y-10 pt-10 text-center items-center flex flex-col justify-start  border-t-2 bg-teal-200 border-teal-100 rounded-3xl h-[600px] relative overflow-hidden">
          <span className="font-montserrat font-black text-3xl tracking-tight text-center">
            Crea tu meta de ahorro
          </span>
          <Button className="rounded-full flex items-center gap-3 p-6 px-10">
            Obtener la App
          </Button>
          <img
            src="/src/assets/save-goals.svg"
            alt="image"
            className="absolute h-full -bottom-52 left-30 w-full object-contain"
          />
        </div>
        <div className="w-[600px]   pl-10 py-10  border-t-2 bg-lime-200 justify-between  flex border-lime-100 rounded-3xl h-[250px] relative overflow-hidden">
          <div className="space-y-5 flex  flex-col justify-center">
            <span className="font-montserrat font-black text-3xl tracking-tight ">
              Grafico de gastos
            </span>
            <p className="w-64">
              Puedes visualizar en que gastas tu dinero y en que puedes ahorrar,
              para que puedas cumplir tus metas
            </p>
          </div>
          <img src="/src/assets/chart-graphic.svg" alt="image" width={250} />
        </div>
        <div className="w-[600px] row-span-2 space-y-10 p-10  border-t-2 bg-indigo-200 border-indigo-100 rounded-3xl flex justify-between h-[320px] relative overflow-hidden">
          <div className="space-y-5 flex  flex-col justify-center">
            <span className="font-montserrat font-black text-3xl tracking-tight ">
              Notificaciones
            </span>
            <p className="w-64">
              Recibe notificaciones de tus gastos y ahorros para que no te pases
              de tu presupuesto
            </p>
            <Button className="rounded-full flex items-center gap-3 w-36 p-6 border-2 border-indigo-300 backdrop-blur-md bg-indigo-400 hover:bg-indigo-500 ">
              Obtener la App
            </Button>
          </div>
          <img src="/src/assets/notifies.svg" alt="image" width={250} />
        </div>
      </div>
    </div>
  );
}
