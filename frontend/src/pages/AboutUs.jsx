const AboutUs = () => {
  return (
    <div className="pt-24 min-h-screen w-full bg-gray-100 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are a digital-first studio focused on building high-quality web
            and software products that solve real-world problems and help
            businesses grow.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

          {/* Left Content */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              Founded by passionate developers and designers, our team believes
              in clean code, thoughtful design, and scalable solutions. We work
              closely with clients to understand their vision and turn it into
              reliable digital products.
            </p>
            <p className="text-gray-600">
              From startups to established businesses, we help teams build
              modern applications that are fast, secure, and user-friendly.
            </p>
          </div>

          {/* Right Content */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">
              What We Do
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>✅ Custom Web & Mobile Application Development</li>
              <li>✅ UI/UX Design & Product Strategy</li>
              <li>✅ Backend Systems & API Development</li>
              <li>✅ Cloud Deployment & Performance Optimization</li>
              <li>✅ Ongoing Maintenance & Support</li>
            </ul>
          </div>

        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

          {/* Mission */}
          <div className="bg-black text-white rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300">
              To empower businesses and individuals by creating innovative,
              scalable, and user-centric digital products that deliver real
              value.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a trusted technology partner known for quality,
              reliability, and long-term collaboration across industries.
            </p>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 text-center">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-3xl font-bold">20+</h4>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-3xl font-bold">10+</h4>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-3xl font-bold">3+</h4>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-3xl font-bold">100%</h4>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Let’s build something great together
          </h2>
          <p className="text-gray-600 mb-6">
            Have an idea or a project in mind? We’d love to hear from you.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition mb-10">
            Start a Project
          </button>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
