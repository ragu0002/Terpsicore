import Image from "next/image";
import { Hero, LargeText, NavigationText, Paragraph, RegularText, SmallParagraph, XlargeText } from "./components/typography";
import Button from "./components/global/Button";
import ImageOverlay from "./components/global/imageoverlay/ImageOverlay";
import Underline from "./components/global/Underline";

export default function Home() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <div className="col-(--content-col)">
          <Underline text="dette er underline" />
        </div>
      </main>
    </>
  );
}
