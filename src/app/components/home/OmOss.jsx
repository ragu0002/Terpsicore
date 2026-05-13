import Image from "next/image";
import Button from "../global/Button";
import "./omoss.css";
import { SmallParagraph, XlargeText } from "../typography";

const OmOss = () => {
  return (
    <section className="grid col-(--full-col) grid-cols-subgrid mt-15 overflow-hidden">
      <div className="col-(--content-col) grid grid-cols-2 items-start gap-10">
        <div className="grid gap-4">
          <XlargeText text="om oss" color="accent" />
          <SmallParagraph text="Vi er et dansekompani for dedikerte danseglade studenter, som siden 2010 har vært en arena for dans på høyt nivå for studenter i Bergen. Terpsichore består av rundt 20 studenter fra ulike studiesteder i byen. Kompaniet er selvdrevet, og alt fra koreografier til daglig drift gjøres internt i kompaniet. Kompaniets stilart varierer avhengig av medlemmenes dansebakgrunn, men består i hovedsak av jazz/lyrisk jazz, moderne og hip hop." />
          <div className="flex justify-end">
            <Button text="bli medlem" />
          </div>
        </div>
        <div className="relative left-10 w-screen overflow-hidden">
          <div className="flex gap-3 overflow-x-auto overflow-y-hidden pb-4">
            <div className="rounded-4xl overflow-hidden shrink-0 w-62 h-88">
              <Image width={250} height={350} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
            </div>

            <div className="rounded-4xl overflow-hidden shrink-0 w-62 h-88">
              <Image width={250} height={350} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
            </div>

            <div className="rounded-4xl overflow-hidden shrink-0 w-62 h-88">
              <Image width={250} height={350} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
            </div>

            <div className="rounded-4xl overflow-hidden shrink-0 w-62 h-88">
              <Image width={250} height={350} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
            </div>

            <div className="rounded-4xl overflow-hidden shrink-0 w-62 h-88">
              <Image width={250} height={350} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-4xl overflow-hidden shrink-0 w-62 h-88">
              <Image width={250} height={350} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-4xl overflow-hidden shrink-0 w-62 h-88">
              <Image width={250} height={350} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-4xl overflow-hidden shrink-0 w-62 h-88">
              <Image width={250} height={350} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmOss;
