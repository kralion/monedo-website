import { Button } from "@/components/ui/button";
import appStoreLogo from "@/assets/app-store-black.svg";
import googlePlayLogo from "@/assets/google-play-black.svg";
import backgroundImage from "@/assets/cto.svg";
export default function CallToAction() {
  return (
    <div
      className="m-20 rounded-2xl flex px-10 pt-24 mt-10 h-[500px] justify-between"
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
          <span className="text-teal-200">trackear</span> debes
        </p>
        <div className="flex gap-3 pt-7">
          <Button className="rounded-full flex items-center gap-3  py-6 px-12 border-2 shadow-xl  backdrop-blur-md bg-white border-slate-200 text-black hover:bg-slate-100 ">
            <img src={appStoreLogo} alt="app-store" className="w-5" />
            App Store
          </Button>
          <Button className="rounded-full flex items-center gap-3  py-6 px-12 border-2 shadow-xl  backdrop-blur-md bg-white border-slate-200 text-black hover:bg-slate-100 ">
            <img src={googlePlayLogo} alt="app-store" className="w-5" />
            Google Play
          </Button>
        </div>
      </div>
    </div>
  );
}
