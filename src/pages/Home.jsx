import React from "react";

const Home = () => {
  return (
    <div className="mt-20 p-6 text-center">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          We help businesses grow by offering top-notch web development,
          branding, and digital solutions.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Fast Development", desc: "We deliver projects quickly without compromising quality." },
            { title: "Responsive Design", desc: "Our designs look great on all devices." },
            { title: "SEO Optimized", desc: "We help your site rank better in search engines." },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 bg-gray-100 py-10 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to start your project?
        </h2>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;
