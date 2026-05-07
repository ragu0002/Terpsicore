import Image from "next/image";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { SmallParagraph, RegularText } from "../typography";
const Footer = () => {
  return (
    <footer className="grid col-(--full-col) grid-cols-subgrid grid-rows-5">
      <div className="grid col-(--content-col) justify-items-center row-start-1 row-span-2 z-10">
        <Image src="/assets/Logo_Original.svg" width={200} height={200} alt="Logo" />
      </div>

      <section className="grid col-(--full-col) bg-foreground rounded-t-[4vw] row-start-2 row-span-4 z-0"></section>
      <div className="text-background col-(--content-col) row-start-3 row-span-3 grid grid-cols-subgrid justify-items-start  z-3">
        <div>
          <RegularText text="Kontakt oss" />
          <SmallParagraph text="teprsicore.dans@gmail.com" />
        </div>
        <div>
          <RegularText text="følg med" />
          <div className="flex gap-2">
            <FaInstagram size={30} />
            <FaFacebookSquare size={30} />
            <FaTiktok size={30} />
          </div>
        </div>
        <div>
          <RegularText text="styret 2025-2026" />
          <div className="flex justify-between">
            <SmallParagraph text="teprsicore.dans@gmail.com" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
