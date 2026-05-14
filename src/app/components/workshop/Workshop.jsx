import Image from "next/image";
import { LargeText, Paragraph, SmallParagraph } from "../typography";
import Button from "../global/Button";
export default function Workshop({ blok }) {
  return (
    <section className="grid md:flex gap-10">
      <div className="rounded-4xl overflow-hidden basis-0 grow w-full h-70">
        <Image width={200} height={200} src={blok.main_image.filename} alt={blok.main_image.alt || "image"} className="w-full h-full object-cover" />{" "}
      </div>
      <div className="basis-0 grow">
        <div className="grid md:py-5 gap-4 ">
          <SmallParagraph text={blok.date} color="accent" />
          <LargeText text={blok.name} />
          <SmallParagraph text={blok.introduction} />
          <div className="flex justify-end">
            <Button text="les mer" />
          </div>
        </div>
      </div>
    </section>
  );
}
