import Button from "../global/Button";
import ImageOverlay from "../global/imageoverlay/ImageOverlay";
import { SmallParagraph } from "../typography";
import Image from "next/image";
const Oppdrag = () => {
  return (
    <section className="grid col-(--content-col) grid-cols-5 gap-3 md:rows-4 mt-20 z-2">
      <div className="col-span-2 md:col-start-1 md:row-start-1 md:row-span-2">
        <ImageOverlay width="2000" height="4000" text="oppdrag" image="bilde_1.jpg" variant="five" containerH="h-150" containerW="w-full" />
      </div>
      <div className="col-span-3 pt-30 md:col-start-3 md:col-span-2 md:row-start-1 md:px-5">
        <SmallParagraph text="I tillegg til treninger fire timer i uka tar vi stadig på oss oppdrag. De siste årene har vi blant annet hatt oppdrag for Gullruten, Jussformidlingen og Studentersamfunnet i Bergen, samt deltatt i samarbeid som Døgnfluer med Vill Vill Vest, og Kulturnatt." />
        <div className="flex justify-end pt-4">
          <Button text="book oss" />
        </div>
      </div>
      <div className="rounded-4xl overflow-hidden hidden md:block">
        <Image width={250} height={350} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
      </div>
      <div className="rounded-4xl overflow-hidden hidden md:block md:row-start-2 md:row-span-2 md:col-start-3 md:col-span-full w-full h-90">
        <Image width={250} height={350} alt="gallery image" src="/assets/images/hero.jpg" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Oppdrag;
