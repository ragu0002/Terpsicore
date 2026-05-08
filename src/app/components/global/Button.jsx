import { RegularText, SmallParagraph } from "../typography";

const Button = ({ variant, text }) => {
  return (
    <button className={`border rounded-4xl px-5 py-2 cursor-pointer hover:rounded-none ${variant === "dark" ? "" : "bg-foreground text-background"}`}>
      <SmallParagraph text={text} color="uppercase" />
    </button>
  );
};

export default Button;
