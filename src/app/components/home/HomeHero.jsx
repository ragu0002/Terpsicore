import Image from "next/image";
const HomeHero = () => {
  return (
    <div className="w-screen relative h-screen overflow-hidden">
      <Image width={2000} height={2000} alt="gallery image" src="/assets/images/hero.jpg" className="w-full h-full object-cover" />
    </div>
  );
};

export default HomeHero;
