"use client";

import { useState } from "react";
import { RegularText } from "../../typography";
import Question from "./Question";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      text: "Hvilket nivå er danseklassen?",
      answer: "Danseklassen er åpen for alle som har lyst til å lære noe nytt",
    },
    {
      text: "Hvor lenge varer timen?",
      answer: "Timen varer i 60 minutter",
    },
    {
      text: "Må jeg ha erfaring?",
      answer: "Nei, nybegynnere er velkommen",
    },
  ];

  return (
    <div className="mr:0 md:mr-15">
      <div className="mt-7">
        <RegularText text="ofte stilte spørsmål" color="accent" />
      </div>

      <hr className="2px accent mb-3" />

      {questions.map((question, index) => (
        <Question key={index} text={question.text} answer={question.answer} open={openIndex === index} setOpen={() => setOpenIndex(openIndex === index ? null : index)} />
      ))}
    </div>
  );
};

export default Questions;
