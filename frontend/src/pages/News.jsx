const News = () => {
  return (
    <div className="pt-24 min-h-screen w-full bg-gray-100 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest announcements, product updates,
            achievements, and insights from our team.
          </p>
        </div>

        {/* Featured News */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
          <div className="h-56 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-lg">Featured Image</span>
          </div>
          <div className="p-8">
            <span className="text-sm text-gray-500">January 2026</span>
            <h2 className="text-2xl font-bold mt-2 mb-4">
              We’ve Launched Our New Platform 🚀
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is excited to announce the launch of our new platform
              designed to deliver faster performance, better user experience,
              and improved scalability.
            </p>
            <button className="text-black font-medium hover:underline">
              Read Full Story →
            </button>
          </div>
        </div>

        {/* News List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* News Item */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-xs text-gray-500">December 2025</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">
              Partnership with Tech Communities
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We partnered with leading tech communities to support open-source
              projects and encourage innovation.
            </p>
            <button className="text-sm font-medium text-black hover:underline">
              Read More →
            </button>
          </div>

          {/* News Item */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-xs text-gray-500">November 2025</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">
              Employee Task Manager v2.0 Released
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              The latest update introduces real-time task tracking, performance
              analytics, and improved team collaboration features.
            </p>
            <button className="text-sm font-medium text-black hover:underline">
              Read More →
            </button>
          </div>

          {/* News Item */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-xs text-gray-500">October 2025</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">
              Awarded for Innovation in Web Development
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Our studio was recognized for building scalable and impactful web
              solutions across multiple industries.
            </p>
            <button className="text-sm font-medium text-black hover:underline">
              Read More →
            </button>
          </div>

          {/* News Item */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-xs text-gray-500">September 2025</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">
              Expanding Our Team 🎉
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We welcomed new developers and designers to strengthen our product
              and innovation efforts.
            </p>
            <button className="text-sm font-medium text-black hover:underline">
              Read More →
            </button>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Never miss an update
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to get the latest news delivered directly to your inbox.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition mb-10">
            Subscribe Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default News;
