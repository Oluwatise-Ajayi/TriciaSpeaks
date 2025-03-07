import React from "react";

const About = () => {
  return (
    <section id="Services" className="bg-gray-100 py-16 px-6 scroll-smooth">

      <div className="mt-12 flex flex-wrap justify-center gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md w-72 text-center">
          <h3 className="text-xl font-semibold">📱 Social Media Strategy</h3>
          <p className="text-gray-500 text-sm mt-2">Customized plans to grow and engage your audience.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md w-72 text-center">
          <h3 className="text-xl font-semibold">✍️ Content Creation</h3>
          <p className="text-gray-500 text-sm mt-2">Engaging visuals & copy that capture your brand’s voice.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md w-72 text-center">
          <h3 className="text-xl font-semibold">📊 Analytics & Growth</h3>
          <p className="text-gray-500 text-sm mt-2">Data-driven insights to optimize your social strategy.</p>
        </div>
      </div>

      <div className="text-center mt-10">
        <a href="#Contact" className="bg-indigo-600 text-white py-3 px-6 rounded-md font-medium shadow hover:bg-indigo-500">
          Let's Work Together
        </a>
      </div>
    </section>
  );
};

export default About;
