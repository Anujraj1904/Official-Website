import React, { useState } from "react";
import { faqs } from "../../data/faqData";
import QuestionCard from "../ui/QuestionCard";

const FaqAccordion = () => {
  const [showSelection, setShowSelection] = useState(null);

  const toggleAnswer = (id) => {
    setShowSelection(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen py-16 px-36 bg-neutral-950 text-slate-50">
    {/* <div className="min-h-screen p-36 bg-neutral-950 text-slate-50"> */}
      <div className="space-y-12 max-w-3xl mx-auto">
        {/* Center Heading */}
        <div>
          <h1 className="text-4xl font-bold text-center">
            Ask us
            &nbsp; 
            <span className="text-amber-400">
              Anything
            </span> 
          </h1>

        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <QuestionCard
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              open={showSelection === item.id}
              toggle={toggleAnswer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
