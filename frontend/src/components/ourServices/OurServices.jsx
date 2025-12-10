// OurServicesStyled.jsx
import React from "react";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaPencilRuler } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { RiCodeSSlashLine, RiRobot3Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

const OurServices = () => {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-2">   {/* ↓ decreased more */}

        {/* Header */}
        <div className="flex items-center justify-between mb-12 px-1">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our 
            <span className="text-amber-400 ml-4">
              Services
            </span>
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

          {/* ROW TEMPLATE */}
          {/* Branding */}
          <div className="flex items-center justify-between px-0">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-none flex-1">
              Branding
            </h2>

            <p className="hidden md:block w-1/3 text-lg text-gray-300 pl-4">
              Branding Identity, Strategy & Consult, Positioning, Rebrand
            </p>

            <div className="w-8 flex justify-center text-xl text-gray-200">
              <IoMegaphoneOutline />
            </div>
          </div>

          {/* Design */}
          <div className="flex items-center justify-between px-0">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-none flex-1">
              Design
            </h2>

            <p className="hidden md:block w-1/3 text-lg text-gray-300 pl-4">
              Graphics, Illustration, Animation, Product, Architecture
            </p>

            <div className="w-8 flex justify-center text-xl text-gray-200">
              <FaPencilRuler />
            </div>
          </div>

          {/* Code */}
          <div className="flex items-center justify-between px-0">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-none flex-1">
              Code
            </h2>

            <p className="hidden md:block w-1/3 text-lg text-gray-300 pl-4">
              Mobile App, Web Development, AI, Robotics
            </p>

            <div className="w-8 flex justify-center text-xl text-gray-200">
              <RiCodeSSlashLine />
            </div>
          </div>

          {/* Growth — with border */}
          <div className="flex items-center justify-between px-0 border-b border-gray-700 pb-4">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-none flex-1">
              Growth
            </h2>

            <p className="hidden md:block w-1/3 text-lg text-gray-300 pl-4">
              Analytics, Strategy, SMM, SEO
            </p>

            <div className="w-8 flex justify-center text-xl text-gray-200">
              <IoRocketSharp />
            </div>
          </div>

          {/* Automate — with border */}
          <div className="flex items-center justify-between px-0 border-b border-gray-700 pb-4">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-none flex-1 text-amber-400">
              Automate
            </h2>

            <p className="hidden md:block w-1/3 text-lg text-gray-300 pl-4">
              AI Systems, Workflows, SaaS, Production, Tools
            </p>

            <div className="w-8 flex justify-center text-xl text-gray-200">
              <RiRobot3Line />
            </div>
          </div>

        </div>
      </div>
    </section>


  );
};

export default OurServices;
