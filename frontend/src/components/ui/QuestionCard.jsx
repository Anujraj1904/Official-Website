import React from "react";

const QuestionCard = ({ id, question, answer, open, toggle }) => {
  return (
    <div className="
    bg-[#2a2929] rounded-xl p-4 shadow-md
      w-[90%] mx-auto         
      sm:w-[90%]               
      md:w-[90%]                
      lg:w-full
    ">

      <div
        onClick={() => toggle(id)}
        className="flex justify-between items-start cursor-pointer text-xl"
      >
        <h1>{question}</h1>
        <span className="text-2xl">{open ? "-" : "+"}</span>
      </div>

      <p
        className={`text-lg opacity-75 transition-all duration-300 overflow-hidden 
          ${open ? "max-h-[200px] mt-3" : "max-h-0"}
        `}
      >
        {answer}
      </p>
    </div>
  );
};

export default QuestionCard;
