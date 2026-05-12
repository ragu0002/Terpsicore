import Image from "next/image";
import { Hero } from "../../typography";
import "./imageoverlay.css";

const ImageOverlay = ({ variant = "one", width, height, image = "bilde_1.jpg", text }) => {
  const variants = {
    one: {
      text: "text_variant_1",
      image: "image_variant_1",
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
    three: {
      text: "text_variant_3",
      image: "image_variant_3",
    },
  };

  const currentVariant = variants[variant] || variants.one;

  return (
    <div className={`my-grid ${currentVariant.image.imgwidth} ${currentVariant.image.imgHeigth}`}>
      <div className={`${currentVariant.text} ${currentVariant.text.rowStart} ${currentVariant.text.rowSpan} ${currentVariant.text.colStart} ${currentVariant.text.colSpan} z-10 text-center`}>
        <Hero text={text} color="accent" font="font-serif" />
      </div>
      <div className={`rounded-4xl overflow-hidden ${currentVariant.image} ${currentVariant.image.rowStart} ${currentVariant.image.rowSpan} ${currentVariant.image.colStart} ${currentVariant.image.colSpan} `}>
        <Image src={`/assets/images/${image}`} width={width} height={height} alt="terpsiimage" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ImageOverlay;
