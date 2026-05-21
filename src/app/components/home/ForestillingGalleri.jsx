import ImageOverlay from "../global/imageoverlay/ImageOverlay";
import Image from "next/image";
import Button from "../global/Button";
import Link from "next/link";
import { FooterText, SmallParagraph } from "../typography";
const ForestillingGalleri = () => {
  return (
    <section className="grid col-(--content-col) grid-cols-subgrid mt-20">
      <div className="grid grid-cols-2 grid-rows-[400px_250px_250px] md:grid-rows-[300px_200px_200px] md:grid-cols-5 gap-3">
        <div className="col-span-2 row-1 md:col-span-3 md:col-start-1 md:row-start-1 md:row-span-1 h-full">
          <ImageOverlay size="xlarge" width="2000" height="4000" text="årlig forestilling" image="siste_forestilling_1.jpg" variant="six" containerH="h-full" />
        </div>
        <div className="md:rounded-4xl rounded-2xl overflow-hidden row-2 md:row-start-1 md:row-span-2 md:col-start-4 md:col-span-2">
          <Image width={200} height={200} alt="gallery image" src="/assets/images/siste_forestilling_2.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="md:rounded-4xl rounded-2xl overflow-hidden row-3 md:row-start-2 md:row-span-2 md:col-start-1 md:col-span-1">
          <Image width={200} height={200} alt="gallery image" src="/assets/images/siste_forestilling_3.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="md:rounded-4xl rounded-2xl overflow-hidden row-start-2 row-span-2  md:row-start-2 md:row-span-2 md:col-start-2 md:col-span-2">
          <Image width={200} height={200} alt="gallery image" src="/assets/images/siste_forestilling_4.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="hidden md:grid md:col-start-4 md:row-start-3 md:col-span-2 md:p-3">
          <FooterText text="Årets høydepunkt er vår egenproduserte forestilling på USF Verftet som finner sted rundt mars/ april hvert år. Forestillingsprosessen starter tidlig i høstsemesteret, med innstudering konsentrert på vårsemesteret, og resulterer i en oppsetning som viser kompaniets egenkoreograferte tolkning av årets tematikk." />
          <div className="flex justify-end pt-4">
            <Link href="/forestilling">
              <Button text="Les mer" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForestillingGalleri;
