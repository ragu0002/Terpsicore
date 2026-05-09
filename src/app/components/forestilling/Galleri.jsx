import Image from "next/image";
import { LargeText, XlargeText } from "../typography";
const Galleri = () => {
  return (
    <div className="text-center py-20">
      <XlargeText text={`Bilder fra "Når verket våkner"`} font="font-serif" color="accent" />
      <section className="grid grid-cols-5 grid-rows-2 gap-4 h-150">
        <div className="rounded-4xl overflow-hidden row-1 col-1">
          <Image width={200} height={200} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-4xl overflow-hidden row-1 col-start-2 col-span-2">
          <Image width={200} height={200} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-4xl overflow-hidden row-start-1 row-span-2 col-start-4 col-span-2 ">
          <Image width={200} height={200} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-4xl overflow-hidden row-2 col-start-1 col-span-2">
          <Image width={200} height={200} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-4xl overflow-hidden row-2 col-3">
          <Image width={200} height={200} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
};

export default Galleri;
