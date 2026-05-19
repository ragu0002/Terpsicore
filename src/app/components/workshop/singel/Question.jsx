import { SmallParagraph } from "../../typography";
import { IoMdArrowDropdown } from "react-icons/io";

const Question = ({ text, answer, open, setOpen }) => {
  return (
    <button onClick={setOpen} className="grid w-full cursor-pointer">
      <div className="flex justify-between w-full">
        <SmallParagraph text={text} />
        <IoMdArrowDropdown size={40} className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`} />
      </div>

      {open && (
        <div className="w-full grid text-start pb-3">
          <SmallParagraph text={answer} color="accent" />
        </div>
      )}
    </button>
  );
};

export default Question;
