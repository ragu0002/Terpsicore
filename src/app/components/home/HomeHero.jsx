"use client";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const HomeHero = () => {
  return (
    <div className="w-screen relative h-screen overflow-hidden">
      <Image width={2000} height={2000} alt="gallery image" src="/assets/images/hero.jpg" className="w-full h-full object-cover" />

      <button
        onClick={() => {
          document.getElementById("next-section")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-background cursor-pointer "
      >
        <MdOutlineKeyboardArrowDown size={60} />
      </button>
    </div>
  );
};

export default HomeHero;
