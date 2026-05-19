import Image from "next/image";
import { XlargeText } from "../typography";

const Galleri = ({ story }) => {
  const image = story.content.images;
  if (!story?.content?.images) return null;
  return (
    <div className="text-center pt-20">
      <XlargeText text={`bilder fra "${story.content.titel}"`} font="font-serif" color="accent" />

      <section className="grid grid-rows-4 gap-2 grid-cols-5 md:grid-cols-5 md:grid-rows-2 md:gap-4 md:h-150 h-160">
        <div className="col-start-1 col-span-2  md:rounded-4xl rounded-2xl overflow-hidden row-start-1 row-span-1 md:col-1">
          <Image width={500} height={500} alt={image[0]?.alt || "gallery image"} src={`${image[0]?.filename}/m/1200x0`} className="w-full h-full object-cover" unoptimized />
        </div>

        <div className="col-start-3 col-span-full md:rounded-4xl rounded-2xl overflow-hidden row-start-1 row-span-1 md:col-start-2 md:col-span-2">
          <Image width={500} height={500} alt={image[1]?.alt || "gallery image"} src={`${image[1]?.filename}/m/1200x0`} className="w-full h-full object-cover" unoptimized />
        </div>

        <div className="col-start-1 col-span-3 md:rounded-4xl rounded-2xl overflow-hidden md:row-start-1 md:row-span-2 md:col-start-4 md:col-span-2">
          <Image width={500} height={500} alt={image[2]?.alt || "gallery image"} src={`${image[2]?.filename}/m/1200x0`} className="w-full h-full object-cover" unoptimized />
        </div>

        <div className="col-start-1 col-span-3 row-span-2 md:rounded-4xl rounded-2xl overflow-hidden md:row-2 md:col-start-1 md:col-span-2">
          <Image width={500} height={500} alt={image[3]?.alt || "gallery image"} src={`${image[3]?.filename}/m/1200x0`} className="w-full h-full object-cover" unoptimized />
        </div>

        <div className="col-start-4 col-span-full row-start-2 row-span-full md:rounded-4xl rounded-2xl overflow-hidden md:row-2 md:col-3">
          <Image width={500} height={500} alt={image[4]?.alt || "gallery image"} src={`${image[5]?.filename}/m/1200x0`} className="w-full h-full object-cover" unoptimized />
        </div>
      </section>
    </div>
  );
};

export default Galleri;
