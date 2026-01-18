import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
import SEO from "@/app/seo";
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <SEO metaTitle={"Doston_Coder | About"}>
        {/* Orqa fon - Blur va Animatsiya bilan */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          <Image
            src={bg}
            priority
            sizes="100vw"
            alt="Background"
            className="w-full h-full object-cover object-center opacity-30 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        {/* 3D Model - Hat (Qalpoq) */}
        <div className="w-full h-screen fixed top-0 left-0 z-10 pointer-events-none">
          <RenderModel>
            <HatModel />
          </RenderModel>
        </div>

        {/* Hero Section */}
        <div className="relative w-full h-screen flex flex-col items-center justify-center z-20">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="font-extrabold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent drop-shadow-[0_0_20px_rgba(254,254,91,0.5)] animate-pulse">
              DostonCoder
            </h1>
            <p className="font-light text-foreground/80 text-lg md:text-2xl tracking-[0.2em] uppercase">
              The Wizard Behind The Code
            </p>
          </div>
          
          {/* Pastga tushish uchun vizual signal */}
          <div className="absolute bottom-10 animate-bounce">
             <div className="w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full" />
          </div>
        </div>

        {/* Tafsilotlar - Container ichida */}
        <div className="relative z-30 container mx-auto px-4">
          <AboutDetails />
        </div>
      </SEO>
    </>
  );
}
