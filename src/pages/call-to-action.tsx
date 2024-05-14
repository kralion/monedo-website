import { Button } from "@/components/ui/button";
import appStoreLogo from "@/assets/app-store-black.svg";
import googlePlayLogo from "@/assets/google-play-black.svg";
import backgroundImage from "@/assets/cto.svg";
import { DownloadCloud } from "lucide-react";
export default function CallToAction() {
  return (
    <div
      data-aos="fade-right"
      className="m-20 rounded-2xl flex px-14 pt-20  mt-10 h-[500px] justify-between"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="text-left space-y-14">
        <p className="font-montserrat  text-white  text-left font-black text-6xl w-[550px] tracking">
          Descargar la app y tus gastos{" "}
          <span className="text-teal-200 drop-shadow-xl ">trackear</span> debes
        </p>
        <div className="flex gap-3 pt-7">
          <a
            href="https://drive.google.com/file/d/18ip58gH4EcfrsGtopiIjbgh6mFG5GSqc/view?"
            target="_blank"
          >
            <Button className="rounded-full flex items-center gap-3  py-6 px-12 border-2 shadow-xl  backdrop-blur-md bg-white border-slate-200 text-black hover:bg-slate-100 ">
              <DownloadCloud size={20} />
              <span className="pt-1">Descargar App</span>
            </Button>
          </a>
          {/* <a
            //TODO: Add the correcct link to our app
            // href="https://play.google.com/store/apps/details?id=com.samsung.android.spay&hl=en&gl=US"
            // target="_blank"
            href="#"
          >
            <Button className="rounded-full flex items-center gap-3  py-6 px-12 border-2 shadow-xl  backdrop-blur-md bg-white border-slate-200 text-black hover:bg-slate-100 ">
              <img src={googlePlayLogo} alt="app-store" className="w-5" />
              Google Play
            </Button>
          </a> */}
        </div>
      </div>
    </div>
  );
}
