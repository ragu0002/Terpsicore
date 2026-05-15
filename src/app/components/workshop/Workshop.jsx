import Image from "next/image";
import { LargeText, Paragraph, SmallParagraph } from "../typography";
import Button from "../global/Button";
import Link from "next/link";
export default function Workshop({ blok, slug }) {
  return (
    <section className="grid md:flex gap-10">
      <div className="md:rounded-4xl rounded-2xl overflow-hidden basis-0 grow w-full h-70">
        <Image width={200} height={200} src={blok.main_image.filename} alt={blok.main_image.alt || "image"} className="w-full h-full object-cover" />{" "}
      </div>
      <div className="basis-0 grow">
        <div className="grid md:py-5 gap-4 ">
          <SmallParagraph text={blok.date} color="accent" />
          <LargeText text={blok.name} />
          <SmallParagraph text={blok.introduction} />
          <Link href={`/detalje/${slug}`}>
            <div className="flex justify-end">
              <Button text="les mer" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
