import { Button } from "@/components/ui/button";
// import appStoreLogo from "@/assets/app-store-white.svg";
// import googlePlayLogo from "@/assets/google-play.svg";
import indexPageAsset from "@/assets/index-hero.png";
import statisticsPageAsset from "@/assets/statistics-hero.png";
import signupPageAsset from "@/assets/sign-up-hero.png";
import NavBar from "@/components/shared/navbar";
import styles from "@/styles/style.module.css";

import { DownloadCloud } from "lucide-react";

export default function Home() {
  return (
    <div className={styles.background}>
      <NavBar />
      <div className="space-y-5 pt-20 flex flex-col justify-center items-center">
        <h1 className="font-montserrat lg:w-[600px] w-80 text-center font-black lg:text-6xl text-3xl tracking-tight">
          Controla tus gastos fácil y rápido
        </h1>

        <p className="text-lg text-center">
          La mejor app para controlar tus gastos.
        </p>
        <div className="flex gap-3 pt-7">
          {/* <TooltipProvider>
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
          </TooltipProvider> */}
          <a
            href="https://drive.google.com/file/d/18ip58gH4EcfrsGtopiIjbgh6mFG5GSqc/view?usp=drive_link"
            target="_blank"
          >
            <Button className="rounded-full cursor-pointer  border-slate-700 border-2  flex items-center gap-3 lg:p-6 lg:px-10">
              <DownloadCloud className="w-5" />
              Download APK
            </Button>
          </a>
        </div>
        <div className="flex lg:gap-4 lg:pt-20 pt-10">
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
