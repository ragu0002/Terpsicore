import ImageOverlay from "@/app/components/global/imageoverlay/ImageOverlay";
import Underline from "@/app/components/global/Underline";
import OppdragForm from "@/app/components/oppdrag/OppdragForm";
import { LargeText, SmallParagraph } from "@/app/components/typography";
import Image from "next/image";
export default function Oppdrag() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <div className="col-(--full-col) flex gap-3">
          <div className="rounded-r-4xl overflow-hidden">
            <Image width={200} height={200} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
          </div>
          <ImageOverlay width="2000" height="4000" text="oppdrag" image="bilde_2.jpg" variant="four" />
          <div className="rounded-l-4xl overflow-hidden">
            <Image width={200} height={200} alt="gallery image" src="/assets/images/bilde_1.jpg" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="col-(--content-col)">
          <div className="md:px-50 grid gap-3 pt-5">
            <SmallParagraph text="Vi er tilgjengelige for en hel rekke ulike typer oppdrag hele året. Både store og små oppdrag tas gledelig i mot. Vi kan blant annet stille opp på julebord, holde workshops, være statister eller bakgrunnsdansere, holde dansegulv på utesteder, opptre på jubileer, banketter og mye mer. Da det tar litt tid å øve inn danser ber vi om at forespørsler om oppdrag sendes i god tid i forkant. " />
            <Underline text="intressert i å booke oss?" />
            <SmallParagraph text="Send inn skjema så tar vi kontakt med deg." />
            <OppdragForm />
          </div>
        </div>
      </main>
    </>
  );
}
