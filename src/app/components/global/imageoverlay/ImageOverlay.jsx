import Image from "next/image";
import { Hero } from "../../typography";

const ImageOverlay = ({ variant = "two", width, height, image = "bilde_1.jpg", text }) => {
  const variants = {
    one: {
      text: {
        rowStart: "row-start-1",
        rowSpan: "row-span-2",
        colStart: "col-start-4",
        colSpan: "col-span-17",
      },
      image: {
        rowStart: "row-start-2",
        rowSpan: "row-span-full",
        colStart: "col-start-5",
        colSpan: "col-span-16",
        imgwidth: "100vw",
        imgHeigth: "20px",
      },
    },
    two: {
      text: {
        rowStart: "row-start-1",
        rowSpan: "row-span-2",
        colStart: "col-start-1",
        colSpan: "col-span-20",
      },
      image: {
        rowStart: "row-start-3",
        rowSpan: "row-span-17",
        colStart: "col-start-1",
        colSpan: "col-span-20",
        imgwidth: "w-full",
        imgHeigth: "h-120",
      },
    },
  };

  const currentVariant = variants[variant] || variants.one;

  return (
    <div className={`grid grid-cols-20 grid-rows-20   ${currentVariant.image.imgwidth} ${currentVariant.image.imgHeigth}`}>
      <div className={`${currentVariant.text.rowStart} ${currentVariant.text.rowSpan} ${currentVariant.text.colStart} ${currentVariant.text.colSpan} z-10 text-center`}>
        <Hero text={text} color="accent" font="font-serif" />
      </div>
      <div className={`rounded-4xl overflow-hidden ${currentVariant.image.rowStart} ${currentVariant.image.rowSpan} ${currentVariant.image.colStart} ${currentVariant.image.colSpan} `}>
        <Image src={`/assets/images/${image}`} width={width} height={height} alt="terpsiimage" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ImageOverlay;
