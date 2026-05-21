import { SmallParagraph } from "../typography";

const ErrorMessage = ({ text, style }) => {
  return (
    <div className={`col-(--content-col) border h-50 p-10 ${style}`}>
      <SmallParagraph text={text} color="accent" />
    </div>
  );
};

export default ErrorMessage;
