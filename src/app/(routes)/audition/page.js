import ImageOverlay from "@/app/components/global/imageoverlay/ImageOverlay";
import { SmallParagraph } from "@/app/components/typography";
import Image from "next/image";
const Audition = () => {
  return (
    <main className="grid col-(--content-col) grid-cols-subgrid mt-30">
      <div className="grid gap-5">
        <ImageOverlay width="1200" height="800" text="audition" image="oppdrag_2_2.jpg" variant="six" containerH="h-120" containerW="w-full" />

        <div className="text-center md:text-start grid md:grid-cols-2 md:gap-5 md:h-50">
          <div className="md:rounded-4xl rounded-2xl overflow-hidden hidden md:block">
            <Image width={400} height={400} quality={70} alt="gallery image" src="/assets/images/siste_forestilling_1.jpg" className="w-full h-full object-cover" loading="eager" />
          </div>
          <div className="flex items-start h-full pt-5">
            <SmallParagraph text="Vi holder audition i starten av hvert høstsemester. Vi tar imot alle danseglade studenter som har lyst til å prøve seg. Mer informasjon kommer nærmere semesterstart!" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Audition;
