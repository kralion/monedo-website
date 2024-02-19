import { Button } from "@/components/ui/button";
import appStoreLogo from "@/assets/app-store-white.svg";
import googlePlayLogo from "@/assets/google-play.svg";
import indexPageAsset from "@/assets/index-hero.png";
import statisticsPageAsset from "@/assets/statistics-hero.png";
import signupPageAsset from "@/assets/sign-up-hero.png";
import NavBar from "@/components/shared/navbar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/abstract-29-light-background-wallpaper-colorful-gradient-blurry-soft-smooth-motion-bright-shine_792836-149460.jpg?size=626&ext=jpg&ga=GA1.1.1405311743.1707842042&semt=ais')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <NavBar />
      <div className="space-y-5 pt-40 flex flex-col justify-center items-center">
        <h1 className="font-montserrat lg:w-[600px] w-80 text-center font-black lg:text-6xl text-3xl tracking-tight">
          Controla tus gastos fácil y rápido
        </h1>

        <p className="text-lg text-center">
          La mejor app para controlar tus gastos.
        </p>
        <div className="flex gap-3 pt-7">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  //TODO: Add the correcct link to our app
                  // href="https://apps.apple.com/us/app/todoist-to-do-list-planner/id572688855"
                  href="#"
                  // target="_blank"
                >
                  <Button className="rounded-full cursor-not-allowed border-slate-700 border-2   flex items-center gap-3 lg:p-6 lg:px-10">
                    <img src={appStoreLogo} alt="app-store" className="w-5" />
                    App Store
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent className="mb-2 bg-red-100/50 border-red-500 text-red-700">
                <p>La app está en proceso de revisión</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a
                  //TODO: Add the correcct link to our app
                  // href="https://play.google.com/store/apps/details?id=com.samsung.android.spay&hl=en&gl=US"
                  href="#"
                  // target="_blank"
                >
                  <Button className="rounded-full cursor-not-allowed border-slate-700 border-2  flex items-center gap-3 lg:p-6 lg:px-10">
                    <img src={googlePlayLogo} alt="app-store" className="w-5" />
                    Google Play
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent className="mb-2 bg-red-100/50 border-red-500 text-red-700">
                <p>La app está en proceso de publicación</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex gap-4 pt-20">
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="2000"
          >
            <img
              className="drop-shadow-md"
              width={300}
              height={300}
              src={signupPageAsset}
              alt="phone"
            />
          </div>
          <div data-aos="fade-in" data-aos-delay="100" data-aos-duration="2000">
            <img
              className="drop-shadow-md mt-28"
              width={300}
              height={300}
              src={indexPageAsset}
              alt="phone"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="2000"
          >
            <img
              className="drop-shadow-md "
              width={300}
              height={300}
              src={statisticsPageAsset}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
