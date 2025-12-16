import React from "react";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaPencilRuler } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { RiCodeSSlashLine, RiRobot3Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

const OurServices = () => {
  // Styles applied to every row wrapper
  const rowBaseClass = "flex items-end px-0 mb-8";
  
  // Styles for the H2 (Cut effect)
  const headerClass = "text-8xl md:text-6xl font-semibold leading-none overflow-hidden h-[0.75em] md:h-[0.8em]";
  
  // Styles for the Right Column (Paragraph + Icon)
  // justify-between: pushes Text to left, Icon to right
  // pl-10: Creates the consistent gap between H2 and Paragraph
  const rightColClass = "w-1/2 flex items-center justify-between pl-10 pb-2";

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12 px-1 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="text-amber-400 ml-4">Services</span>
          </h1>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-amber-400 text-amber-400 px-3 py-1.5 rounded-full hover:bg-amber-400 hover:text-black transition text-lg font-bold"
          >
            See our Approach <IoIosArrowForward />
          </a>
        </div>

        {/* SERVICE ROWS */}
        <div className="space-y-8">

          {/* Branding */}
          <div className={rowBaseClass}>
            {/* Left Side: Title (50%) */}
            <div className="w-1/2">
              <h2 className={headerClass}>Branding</h2>
            </div>

            {/* Right Side: Description + Icon (50%) */}
            <div className={rightColClass}>
              <p className="hidden md:block text-lg text-gray-300 text-left">
                Branding Identity, Strategy & Consult, Positioning, Rebrand
              </p>
              <div className="w-8 flex justify-center text-xl text-gray-200 ml-4">
                <IoMegaphoneOutline />
              </div>
            </div>
          </div>

          {/* Design */}
          <div className={rowBaseClass}>
            <div className="w-1/2">
              <h2 className={headerClass}>Design</h2>
            </div>
            <div className={rightColClass}>
              <p className="hidden md:block text-lg text-gray-300 text-left">
                Graphics, Illustration, Animation, Product, Architecture
              </p>
              <div className="w-8 flex justify-center text-xl text-gray-200 ml-4">
                <FaPencilRuler />
              </div>
            </div>
          </div>

          {/* Code */}
          <div className={rowBaseClass}>
            <div className="w-1/2">
              <h2 className={headerClass}>Code</h2>
            </div>
            <div className={rightColClass}>
              <p className="hidden md:block text-lg text-gray-300 text-left">
                Mobile App, Web Development, AI, Robotics
              </p>
              <div className="w-8 flex justify-center text-xl text-gray-200 ml-4">
                <RiCodeSSlashLine />
              </div>
            </div>
          </div>

          {/* Growth — with border touching the text */}
          <div className="flex items-end px-0 border-b border-gray-700 pb-0 mb-8">
            <div className="w-1/2">
              <h2 className={headerClass}>Growth</h2>
            </div>
            <div className={rightColClass}>
              <p className="hidden md:block text-lg text-gray-300 text-left">
                Analytics, Strategy, SMM, SEO
              </p>
              <div className="w-8 flex justify-center text-xl text-gray-200 ml-4">
                <IoRocketSharp />
              </div>
            </div>
          </div>

          {/* Automate */}
          <div className="flex items-end px-0 border-b border-gray-800 pb-12">
            <div className="w-1/2">
              <h2 className="text-[clamp(3rem,12vw,5rem)] font-semibold leading-none text-amber-400">
                Automate
              </h2>
            </div>
            <div className={rightColClass}>
              <p className="hidden md:block text-lg text-gray-300 text-left">
                AI Systems, Workflows, SaaS, Production, Tools
              </p>
              <div className="w-8 flex justify-center text-xl text-gray-200 ml-4">
                <RiRobot3Line />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurServices;