import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ChildrenP {
  children: React.ReactNode;
}

function AOSWrapper({ children }: ChildrenP) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", refreshAOS);

    return () => {
      window.removeEventListener("scroll", refreshAOS);
    };
  }, []);

  return <>{children}</>;
}

export default AOSWrapper;
