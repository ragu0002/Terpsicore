import Image from "next/image";
import { Hero, LargeText, NavigationText, Paragraph, RegularText, SmallParagraph, XlargeText } from "./components/typography";
import Button from "./components/global/Button";
import ImageOverlay from "./components/global/imageoverlay/ImageOverlay";
import Underline from "./components/global/Underline";
import HomeHero from "./components/home/HomeHero";

export default function Home() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HomeHero />
      </main>
    </>
  );
}
