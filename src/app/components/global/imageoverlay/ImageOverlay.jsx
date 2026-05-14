import Image from "next/image";
import { Hero } from "../../typography";
import "./imageoverlay.css";

const ImageOverlay = ({ variant = "one", width, height, image = "bilde_1.jpg", text, color = "accent", containerH }) => {
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
        rowSpan: "row-span-full",
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
    four: {
      text: "text_variant_4",
      image: "image_variant_4",
    },
    five: {
      text: "text_variant_5",
      image: "image_variant_5",
    },
    six: {
      text: "text_variant_6",
      image: "image_variant_6",
    },
    seven: {
      text: "text_variant_7",
      image: "image_variant_7",
    },
    eight: {
      text: "text_variant_8",
      image: "image_variant_8",
    },
  };

  const currentVariant = variants[variant] || variants.one;

  return (
    <div className={`my-grid ${containerH}`}>
      <div className={`${currentVariant.text} ${currentVariant.text.rowStart} ${currentVariant.text.rowSpan} ${currentVariant.text.colStart} ${currentVariant.text.colSpan} z-10 text-center`}>
        <Hero text={text} color={color} font="font-serif" />
      </div>
      <div className={`rounded-4xl overflow-hidden h-full w-full ${currentVariant.image} ${currentVariant.image.rowStart} ${currentVariant.image.rowSpan} ${currentVariant.image.colStart} ${currentVariant.image.colSpan} `}>
        <Image src={`/assets/images/${image}`} width={width} height={height} alt="terpsiimage" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ImageOverlay;
