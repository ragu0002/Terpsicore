import Image from "next/image";
import { Paragraph, RegularText } from "../typography";

const Plakat = ({ image = "bilde_1.jpg", text, year }) => {
  return (
    <>
      <div className="rounded-4xl overflow-hidden">
        <Image src={image} width={800} height={800} alt="plakat" className="w-full h-full object-cover" loading="eager" />
      </div>
      <div className="py-5">
        <RegularText text={text} />
        <Paragraph text={year} />
      </div>
    </>
  );
};

export default Plakat;
