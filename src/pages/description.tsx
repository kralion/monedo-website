import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ArrowDownToLine } from "lucide-react";
import MonedoVideo from "../assets/video.mp4";
const iosUrl =
  "https://drive.google.com/file/d/18ip58gH4EcfrsGtopiIjbgh6mFG5GSqc/view?usp=drive_link";
const androidUrl =
  "https://drive.google.com/file/d/18ip58gH4EcfrsGtopiIjbgh6mFG5GSqc/view?usp=drive_link";

export default function Features() {
  const [url, setUrl] = useState(iosUrl);

  useEffect(() => {
    if (/Android/i.test(navigator.userAgent)) {
      setUrl(androidUrl);
    }
  }, []);
  return (
    <div className="space-y-5  ">
      <video
        controls
        loop
        className="lg:w-[1000px] lg:h-auto mx-auto w-full h-[450px] object-cover lg:rounded-2xl shadow-2xl"
      >
        <source src={MonedoVideo} type="video/mp4" />
      </video>
      <div className="space-y-7 pt-36 ">
        <div className="space-y-7  px-14">
          <h1 className="font-montserrat font-black text-4xl tracking-tight">
            Registra para trackerlos
          </h1>

          <span className="text-lg lg:w-[400px] ">
            Simple, rápido y fácil de usar, registra tus gastos en menos de 10
            segundos.
          </span>
          <a href={url} target="_blank">
            <Button className="rounded-full flex items-center gap-3 my-6 p-6 px-10 ">
              Descargar
              <ArrowDownToLine size={20} />
            </Button>
          </a>
        </div>
        <div className="flex lg:gap-7 gap-2 ">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            className="mt-20 lg:w-[500px] w-1/2 rounded-2xl h-[600px] relative overflow-hidden"
          >
            <img
              src="https://images.pexels.com/photos/7251055/pexels-photo-7251055.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="image"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="lg:w-[800px] w-1/2 rounded-2xl h-[600px] relative overflow-hidden"
          >
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
