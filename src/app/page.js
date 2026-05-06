import Image from "next/image";
import { Hero, LargeText, NavigationText, Paragraph, RegularText, SmallParagraph, XlargeText } from "./components/typography";

export default function Home() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <div className="col-(--content-col)">
          <Hero text="hello" font="font-serif" color="accent" />
          <XlargeText text="this is h2" font="font-serif" color="accent" />
          <LargeText text="this is h3" />
          <RegularText text="this is h4" />
          <Paragraph text="this is s text" />
          <SmallParagraph text="this is xs text" />
          <NavigationText text="this is navigation text" />
        </div>
      </main>
    </>
  );
}
