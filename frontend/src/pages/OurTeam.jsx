const OurTeam = () => {
  return (
    <div className="pt-24 min-h-screen w-full bg-gray-100 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are a group of passionate designers, developers, and strategists
            working together to build impactful digital products.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Team Member */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Photo</span>
            </div>
            <h3 className="text-xl font-semibold">Anuj Raj</h3>
            <p className="text-sm text-gray-500 mb-3">Project Manager & Full-Stack Developer</p>
            <p className="text-gray-600 text-sm">
              Leads product development and architecture with a focus on clean
              code, performance, and scalability.
            </p>
          </div>

          {/* Team Member */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Photo</span>
            </div>
            <h3 className="text-xl font-semibold">Rahul Kumar</h3>
            <p className="text-sm text-gray-500 mb-3">UI/UX Designer</p>
            <p className="text-gray-600 text-sm">
              Designs intuitive user experiences and modern interfaces that
              align with business goals.
            </p>
          </div>

          {/* Team Member */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Photo</span>
            </div>
            <h3 className="text-xl font-semibold">Priya Sharma</h3>
            <p className="text-sm text-gray-500 mb-3">Frontend Developer</p>
            <p className="text-gray-600 text-sm">
              Specializes in building responsive, accessible, and high-quality
              user interfaces using React.
            </p>
          </div>

          {/* Team Member */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Photo</span>
            </div>
            <h3 className="text-xl font-semibold">Amit Verma</h3>
            <p className="text-sm text-gray-500 mb-3">Backend Developer</p>
            <p className="text-gray-600 text-sm">
              Works on APIs, databases, and security to ensure reliable and
              scalable backend systems.
            </p>
          </div>

          {/* Team Member */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Photo</span>
            </div>
            <h3 className="text-xl font-semibold">Neha Singh</h3>
            <p className="text-sm text-gray-500 mb-3">Project Manager</p>
            <p className="text-gray-600 text-sm">
              Ensures smooth execution of projects, timelines, and communication
              between clients and the team.
            </p>
          </div>

          {/* Team Member */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Photo</span>
            </div>
            <h3 className="text-xl font-semibold">Karan Patel</h3>
            <p className="text-sm text-gray-500 mb-3">Marketing & Growth</p>
            <p className="text-gray-600 text-sm">
              Focuses on branding, digital marketing, and growth strategies to
              help products reach the right audience.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Want to join our team?
          </h2>
          <p className="text-gray-600 mb-6">
            We’re always looking for passionate people to work with us.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition mb-10">
            Careers
          </button>
        </div>

      </div>
    </div>
  );
};

export default OurTeam;
