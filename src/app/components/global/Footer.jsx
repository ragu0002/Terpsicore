import Image from "next/image";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { RegularText, FooterText } from "../typography";
const Footer = () => {
  return (
    <footer className="grid col-(--full-col) grid-cols-subgrid grid-rows-5">
      <div className="grid col-(--content-col) justify-items-center row-start-1 row-span-2 z-10">
        <Image src="/assets/Logo_Original.svg" width={200} height={200} alt="Logo" loading="eager"  />
      </div>

      <section className="grid col-(--full-col) bg-foreground rounded-t-[4vw] row-start-2 row-span-4 z-0"></section>
      <div className="text-background col-(--content-col) row-start-3 row-span-3 grid grid-cols-subgrid justify-items-start gap-8 z-3 pb-10 md:grid-cols-5 md:pt-5">
        <div className="md:col-5 md:row-1">
          <RegularText text="Kontakt oss" />
          <div className="md:pt-3">
            <FooterText text="teprsicore.dans@gmail.com" />
          </div>
        </div>
        <div className="md:col-4 md:row-1">
          <RegularText text="følg med" />
          <div className="flex gap-2 md:gap-5 md:pt-3">
            <FaInstagram size={30} />
            <FaFacebookSquare size={30} />
            <FaTiktok size={30} />
          </div>
        </div>
        <div className="md:col-span-2 md:row-1">
          <RegularText text="styret 2025-2026" />
          <div className="grid grid-cols-2 gap-1 md:pt-3">
            <FooterText text="Johanne Gulbraar" />
            <FooterText text="Styreleder" />
            <FooterText text="Silje Villa" />
            <FooterText text="Leder av kunstnerisk gruppe" />
            <FooterText text="Anine Glenne Arnesen" />
            <FooterText text="Leder av sosialgruppen" />
            <FooterText text="Maren Mork" />
            <FooterText text="Leder av økonomigruppen" />
            <FooterText text="Iben Brurok" />
            <FooterText text="Leder av arrangement - og markedsføringsgruppen" />
            <FooterText text="Sophie Myra Hauge" />
            <FooterText text="Tillitsvalgt" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
