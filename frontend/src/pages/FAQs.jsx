import { useState } from "react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide end-to-end digital solutions including web and mobile app development, UI/UX design, backend development, and ongoing maintenance."
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on scope and complexity. Small projects usually take 2–4 weeks, while larger applications can take 2–3 months or more."
  },
  {
    question: "Do you work with startups or only established companies?",
    answer:
      "We work with startups, small businesses, and established companies. Our process is flexible and tailored to the client’s stage and goals."
  },
  {
    question: "What technologies do you use?",
    answer:
      "We primarily work with React, Node.js, Express, MongoDB, and Tailwind CSS, along with modern cloud and deployment tools."
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes. We offer ongoing maintenance, performance optimization, and feature updates after the project is launched."
  },
  {
    question: "How do we start a project with you?",
    answer:
      "You can start by visiting our Start Project page and sharing your project details. Our team will get back to you within 24–48 hours."
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24 min-h-screen w-full bg-gray-100 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Find answers to common questions about our services, process, and
            collaboration.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="text-2xl text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to us. We’re happy to help.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition mb-2">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQs;
