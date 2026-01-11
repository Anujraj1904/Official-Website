const StartProject = () => {
  return (
    <div className="pt-24 min-h-screen w-full bg-gray-100 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Start Your Project
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have an idea or a project in mind? Tell us about your goals and we’ll
            help you turn it into a scalable, high-quality product.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left: Info */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Why Work With Us?
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>✅ Experienced full-stack development team</li>
              <li>✅ Clean UI/UX & performance-focused code</li>
              <li>✅ Transparent pricing & timelines</li>
              <li>✅ Ongoing support after project delivery</li>
            </ul>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">
                What We Build
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">
                  Web Apps
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">
                  Mobile Apps
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">
                  Company Websites
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">
                  Admin Dashboards
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">
                  SaaS Products
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Project Details
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="text"
                placeholder="Project Type (Web App, Website, etc.)"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <textarea
                rows="4"
                placeholder="Briefly describe your project idea..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>

              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black">
                <option>Estimated Budget</option>
                <option>Below ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000 – ₹3,00,000</option>
                <option>Above ₹3,00,000</option>
              </select>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Submit Project Request
              </button>
            </form>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center text-gray-600 mb-10">
          <p>
            We usually respond within <span className="font-medium">24–48 hours</span>.
          </p>
        </div>

      </div>
    </div>
  );
};

export default StartProject;
