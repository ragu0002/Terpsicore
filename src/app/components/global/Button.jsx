import { SmallParagraph } from "../typography";

const variants = {
  dark: "bg-foreground text-background border-background",
  light: "bg-background text-foreground border-foreground",
  accent: "bg-(--accent) text-background border-(--accent)",
};

const Button = ({ variant = "light", text }) => {
  return (
    <button
      className={`
        border
        rounded-4xl
        px-4
        py-1
        cursor-pointer
        transition-all
        duration-300
        hover:rounded-none
        ${variants[variant]}
      `}
    >
      <SmallParagraph text={text} color="uppercase" />
    </button>
  );
};

export default Button;
