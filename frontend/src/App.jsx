import React from "react";
import { motion } from "framer-motion";
// import { heroData } from "./data/homeData";

// Layout components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Page sections
import Hero from "./components/hero/Hero";
// import FeaturedWorksGrid from "./components/works/FeaturedWorksGrid";
// import Services from "./components/services/Services";
// import PricingCards from "./components/pricing/PricingCards";
import FaqAccordion from "./components/faq/FaqAccordion";
import ArticlesPreview from "./components/articles/ArticlesPreview";
// import ContactCta from "./components/contact/ContactCta";

// Sample data (can later come from API)
// import { worksData, servicesData, pricingPlans, faqs, articles } from "./data/homeData";

const App = () => {
  return (
    // <div className="font-sans bg-black text-white overflow-x-hidden">
    <div className="overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />
      
      {/* Featured Works */}
      {/* <section id="featured" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Featured <span className="text-yellow-400 italic">Works</span>
          </h2>
          <FeaturedWorksGrid items={worksData} />
        </div>
      </section> */}

      {/* Services Section */}
      {/* <section id="services" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Our <span className="text-yellow-400 italic">Services</span>
          </h2>
          <Services items={servicesData} />
        </div>
      </section> */}

      {/* Pricing / Subscription Section */}
      {/* <section id="pricing" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Service <span className="text-yellow-400 italic">Plans</span>
          </h2>
          <PricingCards plans={pricingPlans} />
        </div>
      </section> */}

      {/* FAQ Section */}
      <FaqAccordion />

      {/* Articles / Blog Section */}
      <ArticlesPreview />

      {/* Final Call-to-Action */}
      {/* <motion.section
        id="contact"
        className="py-24 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ContactCta
          title="Have a Cool Idea?"
          subtitle="Let’s collaborate and craft something extraordinary together."
          buttonText="Start a Project"
        />
      </motion.section> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
