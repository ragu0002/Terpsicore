import Image from "next/image";
import { FooterText, LargeText, Paragraph, SmallParagraph } from "../typography";
import Button from "../global/Button";
export default function WorkshopCard({ blok }) {
  return (
    <section className="flex gap-4 h-full w-full">
      <div className="md:rounded-4xl rounded-2xl overflow-hidden basis-0 grow w-full h-50">
        <Image width={200} height={200} src={blok.main_image.filename} alt={blok.main_image.alt || "image"} className="w-full h-full object-cover" />{" "}
      </div>
      <div className="basis-0 grow">
        <div className="grid md:py-5 gap-4 ">
          <FooterText text={blok.date} color="white" />
          <Paragraph text={blok.name} color="white" />
          <FooterText text={blok.introduction} color="white" />
        </div>
      </div>
    </section>
  );
}
