import { RegularText } from "../typography";

const Underline = ({ text }) => {
  return (
    <div>
      <RegularText text={text} color="accent" />
      <hr className="2px accent" />
    </div>
  );
};

export default Underline;
