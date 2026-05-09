import Image from "next/image";
import { Hero, LargeText, NavigationText, Paragraph, RegularText, SmallParagraph, XlargeText } from "./components/typography";
import Button from "./components/global/Button";
import ImageOverlay from "./components/global/imageoverlay/ImageOverlay";

export default function Home() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <div className="col-(--content-col)"></div>
      </main>
    </>
  );
}
