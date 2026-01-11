const blogs = [
  {
    title: "How We Build Scalable Web Applications",
    date: "January 10, 2026",
    excerpt:
      "Learn about our approach to building scalable, secure, and high-performance web applications using modern technologies.",
    tags: ["Web Development", "Scalability", "Best Practices"],
  },
  {
    title: "Why UI/UX Matters for Business Growth",
    date: "December 22, 2025",
    excerpt:
      "Good design is more than aesthetics. Discover how user experience impacts customer trust, engagement, and conversions.",
    tags: ["UI/UX", "Design", "Product"],
  },
  {
    title: "Choosing the Right Tech Stack for Your Startup",
    date: "November 30, 2025",
    excerpt:
      "Selecting the right technologies early can save time and money. Here’s how we help startups choose the best tech stack.",
    tags: ["Startups", "Tech Stack", "Strategy"],
  },
  {
    title: "Improving Website Performance in 2026",
    date: "November 5, 2025",
    excerpt:
      "Performance directly affects SEO and user experience. Learn simple techniques to speed up your website.",
    tags: ["Performance", "SEO", "Optimization"],
  },
];

const Blog = () => {
  return (
    <div className="pt-24 min-h-screen w-full bg-gray-100 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and stories from our team on technology,
            design, and building digital products.
          </p>
        </div>

        {/* Featured Blog */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-14">
          <span className="text-sm text-gray-500">Featured Article</span>
          <h2 className="text-2xl font-bold mt-2 mb-4">
            The Future of Web Development
          </h2>
          <p className="text-gray-600 mb-6">
            Web development continues to evolve rapidly. In this article, we
            explore trends like AI-powered tools, performance-first design, and
            modern frameworks shaping the future of the web.
          </p>
          <button className="text-black font-medium hover:underline">
            Read Full Article →
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <span className="text-xs text-gray-500">{blog.date}</span>
              <h3 className="text-xl font-semibold mt-2 mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {blog.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="text-sm font-medium text-black hover:underline">
                Read More →
              </button>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Want to learn more from us?
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our blog and get the latest updates directly in your inbox.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>

      </div>
    </div>
  );
};

export default Blog;
