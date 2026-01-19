import { useState } from "react";

const faqs = [
  {
    question: "What is Tavcorp?",
    answer:
      "Tavcorp is a creative studio and technology hub based in Abuja, Nigeria. We combine branding, design, and software development to help businesses build strong identities and create functional, high-performing digital products.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of services including branding and brand identity design, website design and development, automation and workflow solutions, custom software development, 3D design and visual experiences, digital product development, and business and design consulting.",
  },
  {
    question: "Who do you work with?",
    answer:
      "We work with all types of businesses including startups, small and medium enterprises, and established brands, both locally in Nigeria and internationally.",
  },
  {
    question: "How do you work with clients?",
    answer:
      "Our process typically includes discovery, strategy, design and development, review and refinement, and delivery. We prioritize collaboration and clear communication throughout the process.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary depending on scope and complexity. Simple projects may take a week or two, while larger branding or software projects can take several weeks or months. We provide clear timelines before starting any work.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes. While our studio is based in Abuja, we work with clients anywhere in the world.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the project type, scope, and level of customization required. We offer tailored quotes after an initial consultation.",
  },
  {
    question: "Do you build websites from scratch?",
    answer:
      "Yes. We design and develop custom websites tailored to your brand, business goals, and audience, with a strong focus on usability and performance.",
  },
  {
    question: "What makes Tavcorp different?",
    answer:
      "At Tavcorp, our focus is not just making sales, it’s building lasting relationships with our clients. We solve real business problems through thoughtful design and smart technology.",
  },
  {
    question: "How can I work with Tavcorp?",
    answer:
      "You can contact us through the website’s contact page to book a consultation or discuss your project.",
  },
  {
    question: "What industries do you work with?",
    answer: "We work across every industry—tech, retail, crypto, finance, beauty, fashion, hospitality, health, creators, and more. Our design approach adapts to your business model, audience psychology, and market trends so your visuals feel native to your space."
  },
  {
    question: "How many revisions do I get?",
    answer: "We offer unlimited revisions within the scope of your request. We don’t stop until your design matches your vision—refined, precise, and aligned with your brand direction."
  },
  {
    question: "Do you help with brand strategy or just design?",
    answer: "Yes, we also provide strategy. We help you clarify your message, positioning, tone, and visual direction before designing, so your brand feels intentional—not accidental."
  },
  {
    question: "Can TavCorp work with my in-house team?",
    answer: "Absolutely. We collaborate seamlessly with founders, marketing teams, content teams, and developers. We integrate into your workflow as your external design powerhouse."
  },
  {
    question: "How fast is your delivery?",
    answer: "Most requests are completed within 24–72 hours, depending on complexity. Urgent tasks can be prioritized when needed."
  },
  {
    question: "Do you create content templates and full systems?",
    answer: "Yes. We build complete systems: brand guidelines, social templates, pitch decks, icon sets, UI components, marketing assets, and your full design library."
  },
  {
    question: "Can you manage all my brand visuals long-term?",
    answer: "Yes. We offer subscription-based design support for brands that want continuous creative execution, updates, and maintenance."
  },
  {
    question: "Do you handle video design, motion, or editing?",
    answer: "Yes, we provide motion graphics, animated ads, reels, explainer videos, and clean editing that match your visual brand language."
  },
  {
    question: "What if I need something outside your listed services?",
    answer: "Just ask. If it’s design-related, we can usually execute it or guide you to the best solution."
  },
  {
    question: "How do payments work?",
    answer: "Payments are made securely through your preferred gateway. For subscriptions, billing is monthly or quarterly. For one-off services, payment is made before work begins."
  },
  {
    question: "Do I own all the files after delivery?",
    answer: "Yes. You get full ownership of all design files—source files included. Your brand assets are fully yours with no restrictions."
  },
  {
    question: "Can you help me refresh an old brand instead of creating a new one?",
    answer: "Of course. We specialize in modernizing existing brands while preserving the emotional essence your audience already knows."
  },
  {
    question: "Do you handle printing or production?",
    answer: "We don’t print in-house, but we prep your files in the exact specifications for any print vendor worldwide."
  },
  {
    question: "What if I don’t know what I want yet?",
    answer: "That’s perfectly fine. We guide you through questions, references, brand positioning, and visual discovery until we lock onto a direction that feels right."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes. If your project requires confidentiality, we are happy to sign an NDA before work begins."
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
