import Image from "next/image";
import Button from "../global/Button";
import "./omoss.css";
import { SmallParagraph, XlargeText } from "../typography";
import Link from "next/link";

const OmOss = ({ stories }) => {
  return (
    <section className="grid col-(--full-col) grid-cols-subgrid mt-15 overflow-hidden" id="next-section">
      <div className="col-(--full-col) grid-cols-subgrid grid md:grid-cols-2 items-start gap-10 md:col-(--content-col)">
        <div className="col-(--content-col) grid gap-4 md:pr-0 md:col-1 md:row-1">
          <XlargeText text="om oss" color="accent" />
          <SmallParagraph text={stories.content.text} />
          <div className="flex justify-end">
            <Link href="/audition">
              <Button text="bli medlem" />
            </Link>
          </div>
        </div>

        <div className="col-(--full-col) grid-cols-subgrid scroll-container flex gap-3 py-3 md:col-start-2 md:col-span-full md:row-1">
          <div className="flex  gap-6  h-full">
            {stories.content.images?.map((img) => (
              <div key={img.id} className="md:rounded-4xl rounded-2xl overflow-hidden shrink-0 w-66 h-full">
                <Image width={250} height={350} alt={img.alt || "gallery image"} src={img.filename} className="w-full h-full object-cover" loading="eager" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmOss;
