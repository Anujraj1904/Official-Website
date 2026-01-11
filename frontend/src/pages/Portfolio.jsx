const projects = [
  {
    title: "NGO Helper Platform",
    category: "Web Application",
    description:
      "A full-stack platform that helps NGOs manage donations, volunteers, and campaigns with secure authentication and payments.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Employee Task Manager",
    category: "SaaS Product",
    description:
      "An internal productivity tool for assigning tasks, tracking progress, and improving team collaboration.",
    tech: ["MERN Stack", "JWT", "Tailwind CSS"],
  },
  {
    title: "Corporate Website",
    category: "Website",
    description:
      "A modern, responsive company website designed to improve brand presence and customer engagement.",
    tech: ["React", "SEO", "Performance"],
  },
  {
    title: "E-commerce Dashboard",
    category: "Admin Panel",
    description:
      "A powerful admin dashboard for managing products, orders, and analytics in real time.",
    tech: ["React", "Charts", "REST API"],
  },
  {
    title: "Startup Landing Page",
    category: "Landing Page",
    description:
      "A conversion-focused landing page built for startups to validate ideas and attract early users.",
    tech: ["Tailwind", "UX Design", "Speed"],
  },
  {
    title: "Learning Management System",
    category: "EdTech",
    description:
      "An LMS platform with course management, user roles, and progress tracking features.",
    tech: ["React", "Node.js", "MongoDB"],
  },
];

const Portfolio = () => {
  return (
    <div className="pt-24 min-h-screen w-full bg-gray-100 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A selection of projects we’ve worked on, showcasing our expertise
            in design, development, and product strategy.
          </p>
        </div>

        {/* Category Filters (UI only) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Web Application", "Website", "SaaS Product", "Admin Panel"].map(
            (cat, i) => (
              <button
                key={i}
                className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:bg-black hover:text-white transition"
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>

              <span className="text-xs text-gray-500">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button className="text-sm font-medium text-black hover:underline">
                View Project →
              </button>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-gray-600 mb-6">
            Let’s collaborate and build something impactful together.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
            Start a Project
          </button>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
