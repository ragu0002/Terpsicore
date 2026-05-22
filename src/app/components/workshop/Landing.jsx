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
        <SmallParagraph text="Vi inviterer til inspirerende workshops med fokus på danseglede, fellesskap og kreativ utfoldelse. Gjennom ulike dansestiler får deltakerne utforske bevegelse, rytme og uttrykk i et sosialt og inkluderende miljø. Workshopene passer for både nybegynnere og erfarne dansere, og skaper en arena hvor man kan møte nye mennesker, dele erfaringer og oppleve gleden ved dans sammen." />
      </div>
    </section>
  );
};

export default Landing;
