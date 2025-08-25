import React from "react";

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      bio: "Digital strategist with 10+ years of experience in web development and business growth."
    },
    {
      name: "Sarah Williams",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      bio: "Award-winning designer specializing in brand identity and user experience."
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      bio: "Full-stack developer with expertise in modern web technologies and e-commerce solutions."
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      bio: "Digital marketing expert focused on driving growth through data-driven strategies."
    }
  ];

  // Stats data
  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
    { number: "8", label: "Years Experience" }
  ];

  // Values data
  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of industry trends to deliver cutting-edge solutions.",
      icon: "💡"
    },
    {
      title: "Quality",
      description: "We never compromise on quality and always strive for excellence.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs.",
      icon: "🤝"
    },
    {
      title: "Reliability",
      description: "We deliver on our promises with consistent, dependable service.",
      icon: "🛡️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Our Agency</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate creators, developers, and strategists dedicated to 
            helping businesses thrive in the digital landscape with innovative solutions.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
            alt="Our Team"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 text-lg">
                Founded in 2015, our agency began with a simple mission: to help businesses 
                navigate the digital world with confidence. What started as a small team of 
                three has grown into a full-service digital agency serving clients worldwide.
              </p>
              <p className="text-gray-700 text-lg">
                Over the years, we've evolved alongside technology, constantly learning and 
                adapting to deliver the best solutions for our clients. Our commitment to 
                excellence has remained unchanged, driving us to create meaningful digital 
                experiences that deliver real results.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Our Office"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden text-center transition-transform duration-300 hover:-translate-y-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Let's work together to create something amazing for your business.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;