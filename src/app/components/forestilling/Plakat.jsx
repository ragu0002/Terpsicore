import Image from "next/image";
import { Paragraph, RegularText } from "../typography";

const Plakat = ({ image = "bilde_1.jpg", text, year }) => {
  return (
    <div className="grid text-center w-full h-auto hover:scale-97 cursor-pointer mt-15">
      <div className="rounded-4xl overflow-hidden">
        <Image src={`/assets/images/${image}`} width={800} height={800} alt="plakat" className="w-full h-full object-cover" />
      </div>
      <div className="py-5">
        <RegularText text={text} />
        <Paragraph text={year} />
      </div>
    </div>
  );
};

export default Plakat;
