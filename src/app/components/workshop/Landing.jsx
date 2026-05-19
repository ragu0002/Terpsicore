import { SmallParagraph } from "../typography";
import Image from "next/image";
import ImageOverlay from "../global/imageoverlay/ImageOverlay";
import "./landing.css";
const Landing = () => {
  return (
    <section className="wrapper">
      <div className="mobileHero">
        <ImageOverlay width="200" height="200" text="workshops" image="bilde_1.jpg" variant="one" containerH="h-140" />
      </div>

      <div className="hero_image">
        <ImageOverlay width="200" height="200" text="workshops" image="bilde_1.jpg" variant="three" containerH="h-150" />
      </div>

      <div className="image_1 rounded-4xl overflow-hidden">
        <Image width={2000} height={2000} alt="gallery image" src="/assets/images/workshop_2.jpg" className="w-full h-full object-cover" loading="eager" />
      </div>

      <div className="image_2 rounded-4xl overflow-hidden">
        <Image width={2000} height={2000} alt="gallery image" src="/assets/images/workshop_1.jpg" className="w-full h-full object-cover" loading="eager" />
      </div>

      <div className="text_1">
        <SmallParagraph text="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt" />
      </div>
    </section>
  );
};

export default Landing;
