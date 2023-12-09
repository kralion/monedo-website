import { Button } from "@/components/ui/button";
import featuresAsset from "@/assets/save-goals.svg";
import chartGraphicAsset from "@/assets/chart-graphic.svg";
import notifiesAsset from "@/assets/notifies.svg";
import { useState, useEffect } from "react";
const iosUrl =
  "https://apps.apple.com/us/app/todoist-to-do-list-planner/id572688855";
const androidUrl =
  "https://play.google.com/store/apps/details?id=com.samsung.android.spay&hl=en&gl=US";

export default function Features() {
  const [url, setUrl] = useState(iosUrl);

  useEffect(() => {
    if (/Android/i.test(navigator.userAgent)) {
      setUrl(androidUrl);
    }
  }, []);

  return (
    <div className="space-y-7 px-14 pt-36 h-screen">
      <h1 className="font-montserrat font-black text-4xl tracking-tight text-center">
        Nuestras Funcionalidades
      </h1>
      <p className="text-lg  text-center px-[290px]">
        Con nuestras funcionalidades a medida podrás controlar tus gastos y ser
        mas eficiente y conciente de los gastos que realizas.
      </p>
      <div className="grid grid-rows-3 gap-7 grid-flow-col ">
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="2000"
          className=" row-span-3 space-y-10 p-10 text-center items-center flex flex-col justify-start  border-t-2 bg-teal-200 border-teal-100 rounded-3xl h-[600px] relative overflow-hidden"
        >
          <span className="font-montserrat font-black text-3xl tracking-tight text-center">
            Crea tu meta de ahorro
          </span>
          <a href={url} target="_blank">
            <Button className="rounded-full flex items-center gap-3 p-6 px-10">
              Obtener la App
            </Button>
          </a>
          <img
            src={featuresAsset}
            alt="image"
            className="absolute h-full -bottom-52 left-30 w-full object-contain"
          />
        </div>
        <div className="space-y-7">
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="2000"
            className="  pl-10 py-10  border-t-2 bg-lime-200 justify-between  flex border-lime-100 rounded-3xl h-[250px] relative overflow-hidden"
          >
            <div className="space-y-5 flex  flex-col justify-center">
              <span className="font-montserrat font-black text-3xl tracking-tight ">
                Grafico de gastos
              </span>
              <p className="w-64">
                Puedes visualizar en que gastas tu dinero y en que puedes
                ahorrar, para que puedas cumplir tus metas
              </p>
            </div>
            <img src={chartGraphicAsset} alt="image" width={250} />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="2000"
            className=" row-span-2 space-y-10 p-10  border-t-2 bg-indigo-200 border-indigo-100 rounded-3xl flex justify-between h-[320px] relative overflow-hidden"
          >
            <div className="space-y-5 flex  flex-col justify-center">
              <span className="font-montserrat font-black text-3xl tracking-tight ">
                Notificaciones
              </span>
              <p className="w-64">
                Recibe notificaciones de tus gastos y ahorros para que no te
                pases de tu presupuesto
              </p>
              <a href={url} target="_blank">
                <Button className="rounded-full flex items-center gap-3 w-36 p-6 border-2 border-indigo-300 backdrop-blur-md bg-indigo-400 hover:bg-indigo-500 ">
                  Obtener la App
                </Button>
              </a>
            </div>
            <img src={notifiesAsset} alt="image" width={250} />
          </div>
        </div>
      </div>
    </div>
  );
}
