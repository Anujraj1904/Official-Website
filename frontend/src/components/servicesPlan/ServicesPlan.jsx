import { IoIosArrowForward } from "react-icons/io";

const Services = () => {
  return (
    <div className="bg-black text-white py-12 px-6">

      {/* Header Row */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Services{" "}
          <span className="text-yellow-400">Plans</span>
        </h1>

        <a
          href="#"
          className="flex items-center gap-1 text-yellow-400 border border-yellow-400 px-3 py-1 rounded-xl hover:bg-yellow-400 hover:text-black transition"
        >
          Our Subscription <IoIosArrowForward />
        </a>
      </div>

      {/* Subtitle */}
      <div className="max-w-lg">
        <p className="text-gray-300">
          Clear, straightforward plans tailored to your needs.
          <br />
          Choose a plan and kick-start now
        </p>
      </div>

    </div>
  );
};

export default Services;
