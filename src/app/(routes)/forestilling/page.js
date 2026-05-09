import Galleri from "@/app/components/forestilling/Galleri";
import Plakat from "@/app/components/forestilling/Plakat";
import ImageOverlay from "@/app/components/global/imageoverlay/ImageOverlay";
import { SmallParagraph } from "@/app/components/typography";
export default function Foretilling() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <div className="col-(--content-col)">
          <ImageOverlay width="2000" height="4000" text="forestilling" image="bilde_2.jpg" />
          <div className="md:text-center md:grid grid-cols-5 *:col-start-2 *:col-span-3 py-5">
            <SmallParagraph text="Årets høydepunkt er vår egenproduserte forestilling på USF Verftet som finner sted rundt mars/ april hvert år. Forestillingsprosessen starter tidlig i høstsemesteret, med innstudering konsentrert på vårsemesteret, og resulterer i en oppsetning som viser kompaniets egenkoreograferte tolkning av årets tematikk." />
          </div>
          <div className="flex justify-between gap-5">
            <Plakat text="når verket våkner" year="2025" image="plakat_3.png" />
            <Plakat text="får du ikke sove" year="2024" image="plakat_2.png" />
            <Plakat text="veni vidi hva nå?" year="2023" image="plakat_1.png" />
          </div>
          <Galleri />
        </div>
      </main>
    </>
  );
}
