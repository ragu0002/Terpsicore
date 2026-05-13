import "./typography.css";

export const Hero = ({ text, color, font = "font-helvetica" }) => (
  <h1 style={{ fontSize: "var(--step-5)" }} className={`uppercase ${color} ${font}`}>
    {text}
  </h1>
);
export const XlargeText = ({ text, color, font = "font-serif" }) => (
  <h2 style={{ fontSize: "var(--step-4)" }} className={`uppercase  ${color} ${font}`}>
    {text}
  </h2>
);
export const LargeText = ({ text, color, font = "font-helvetica" }) => (
  <h3 style={{ fontSize: "var(--step-2)" }} className={`uppercase ${color} ${font}`}>
    {text}
  </h3>
);
export const RegularText = ({ text, color, font = "font-helvetica" }) => (
  <h4 style={{ fontSize: "var(--step-2)" }} className={`uppercase ${color} ${font}`}>
    {text}
  </h4>
);
export const Paragraph = ({ text, color, font = "font-helvetica" }) => (
  <p style={{ fontSize: "var(--step-1)" }} className={`  ${color} ${font}`}>
    {text}
  </p>
);
export const SmallParagraph = ({ text, color, font = "font-helvetica" }) => (
  <p style={{ fontSize: "var(--step-0)" }} className={` ${color} ${font}`}>
    {text}
  </p>
);
export const FooterText = ({ text, color, font = "font-helvetica" }) => (
  <p style={{ fontSize: "var(--step--1)" }} className={` ${color} ${font}`}>
    {text}
  </p>
);
export const NavigationText = ({ size = "var(--step-0)", text, color, font = "font-helvetica" }) => (
  <p style={{ fontSize: size }} className={`uppercase cursor-pointer list-none hover:opacity-70 ${color} ${font}`}>
    {text}
  </p>
);

const Typography = ({ children }) => <>{children}</>;

export default Typography;
