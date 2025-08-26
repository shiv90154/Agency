import React from "react";
import TextScroll from "../Components/TextScroll";
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Our Agency</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate creators, developers, and strategists dedicated to 
            helping businesses thrive in the digital landscape with innovative solutions.
          </p>
        </section>

        {/* Hero Image Section */}
        <section className="mb-16 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-96 w-full">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="Our Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-2xl font-bold mb-2">Collaboration & Innovation</h2>
                <p className="max-w-xl">Our team works together to create exceptional digital experiences for our clients.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center transition-transform duration-300 hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Founded in 2015, our agency began with a simple mission: to help businesses 
                  navigate the digital world with confidence. What started as a small team of 
                  three has grown into a full-service digital agency serving clients worldwide.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Over the years, we've evolved alongside technology, constantly learning and 
                  adapting to deliver the best solutions for our clients. Our commitment to 
                  excellence has remained unchanged, driving us to create meaningful digital 
                  experiences that deliver real results.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Our Office"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="text-white">
                      <a href="#" className="mx-2 inline-block">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="mx-2 inline-block">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-3 font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-10 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing for your business.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Get in Touch
          </button>
        </section>
      </div>


      <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="space-y-20">
        {/* <section>
          <h2 className="text-2xl font-bold mb-4">Default Scrolling Text</h2>
          <TextScroll 
            text="This text scrolls at the default speed" 
            className="text-4xl font-bold text-blue-400"
          />
        </section> */}
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Faster Scrolling Text</h2>
          <TextScroll 
            text="This text scrolls faster" 
            default_velocity={10}
            className="text-3xl font-extrabold text-purple-400"
          />
        </section>
        
        {/* <section>
          <h2 className="text-2xl font-bold mb-4">Reverse Direction</h2>
          <TextScroll 
            text="This text scrolls in reverse direction" 
            reverse={true}
            className="text-5xl font-bold text-green-400"
          />
        </section> */}
        
        <section className="h-screen flex items-center justify-center">
          <h2 className="text-3xl">Scroll down to see the effect</h2>
        </section>
      </div>
    </div>

    </div>
  );
};

export default About;