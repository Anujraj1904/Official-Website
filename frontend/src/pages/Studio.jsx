const Studio = () => {
  return (
    <div className="pt-24 min-h-screen w-full bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-8 sm:p-12">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Welcome to Our Studio
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-8">
          Where creativity meets technology. We design, build, and scale
          digital products that make an impact.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🎨 Design</h3>
            <p className="text-gray-600 text-sm">
              UI/UX design, branding, and visual storytelling tailored to your
              business needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">💻 Development</h3>
            <p className="text-gray-600 text-sm">
              Full-stack web & app development using modern, scalable
              technologies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🚀 Growth</h3>
            <p className="text-gray-600 text-sm">
              Performance optimization, SEO, and product growth strategies.
            </p>
          </div>

        </div>

        {/* BUTTON */}
        <div className="mt-10">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Explore Our Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Studio;
