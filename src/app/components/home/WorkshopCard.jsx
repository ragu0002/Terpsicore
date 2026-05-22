import Image from "next/image";
import { FooterText, LargeText, Paragraph, SmallParagraph } from "../typography";
import Link from "next/link";

export default function WorkshopCard({ blok, slug }) {
  const date = new Date(blok.date);
  const formattedDate = date.toLocaleDateString("nb-NO", {
    day: "2-digit",
    month: "long",
  });
  const formattedTime = date.toLocaleTimeString("nb-NO", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return (
    <Link className="md:flex grid gap-4 h-96 md:h-full w-full items-center md:items-start" href={`/detalje/${slug}`}>
      <div className="md:rounded-4xl rounded-2xl overflow-hidden w-full h-full">
        <Image width={200} height={200} src={blok.main_image.filename} alt={blok.main_image.alt || "image"} className="w-full h-full object-cover" loading="eager" />
      </div>
      <div className="grid md:py-5 justify-center gap-3">
        <div>
          <FooterText text={`${formattedDate} Kl ${formattedTime}`} color="white" />
          <Paragraph text={blok.name} color="white uppercase" />
        </div>
        <FooterText text={blok.introduction} color="white" />
      </div>
    </Link>
  );
}
