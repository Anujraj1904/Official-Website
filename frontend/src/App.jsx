import React from "react";
import { motion } from "framer-motion";

// Layout components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Page sections
import Hero from "./components/hero/Hero";
import Featured from "./components/featured/featured";
import ServicesPlan from "./components/servicesPlan/ServicesPlan";
import PricingCards from "./components/pricing/PricingSection";
import FaqAccordion from "./components/faq/FaqAccordion";
import ArticlesPreview from "./components/articles/ArticlesPreview";
import Testimonials from "./components/testimonials/Testimonials";
import OurServices from "./components/ourServices/OurServices";


const App = () => {
  return (
    // <div className="font-sans bg-black text-white overflow-x-hidden">
    <div className="overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      {/* <Hero /> */}

      {/* Featured Work Section */}
      <Featured />

      {/* Our Services Section */}
      <OurServices />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Services Section */}
      <ServicesPlan />

      {/* Pricing / Subscription Section */}
      <PricingCards />

      {/* FAQ Section */}
      <FaqAccordion />

      {/* Articles / Blog Section */}
      <ArticlesPreview />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
