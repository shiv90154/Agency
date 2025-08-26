import React from "react";
import TextScroll from "../Components/TextScroll";
// import BackgroundCursorTrail from "../Components/BackgroundCursorTrail";
// Your image array
// const backgroundImages = [
//   "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
//   // Add more images as needed
// ];
import SectionCursorTrail from "../Components/SectionCursorTrail";
 const images = [
    "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
    "https://images.unsplash.com/photo-1644141655284-2961181d5a02?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
const Home = () => {
  return (
    <div className="w-full overflow-hidden mt-25">
       {/* <BackgroundCursorTrail images={backgroundImages} maxImages={10} /> */}

      {/* Hero Section */}
     
  <SectionCursorTrail 
          images={images} 
          maxImages={6}
          className="min-h-[500px]  p-8 mb-16 flex items-center justify-center"
          imgClass="w-28 h-36 sm:w-36 sm:h-44"
        >
           <section className=" text-gray-700 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            We create stunning websites, powerful brands, and digital experiences that drive growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-gray-600 font-semibold rounded-xl hover:bg-white/10 transition">
              View Our Work
            </button>
          </div>
        </div>
      </section>

        </SectionCursorTrail>
     
        <section>
        
          <TextScroll 
            text="This text scrolls faster" 
            default_velocity={10}
            className="text-4xl font-extrabold text-gray-700"
          />
        </section>


     

      {/* Clients Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-gray-500 text-sm uppercase font-semibold mb-8">Trusted by industry leaders</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60">
            {["Client 1", "Client 2", "Client 3", "Client 4", "Client 5"].map((client, index) => (
              <div key={index} className="h-10 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional results for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Fast Development", 
                desc: "We deliver projects quickly without compromising quality.",
                icon: "🚀"
              },
              { 
                title: "Responsive Design", 
                desc: "Our designs look great on all devices.",
                icon: "📱"
              },
              { 
                title: "SEO Optimized", 
                desc: "We help your site rank better in search engines.",
                icon: "🔍"
              },
              { 
                title: "E-Commerce Solutions", 
                desc: "Build your online store with our expertise.",
                icon: "🛒"
              },
              { 
                title: "Brand Strategy", 
                desc: "We help define and amplify your brand identity.",
                icon: "🎯"
              },
              { 
                title: "Ongoing Support", 
                desc: "We're here for you even after project completion.",
                icon: "🛠️"
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the modern landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                desc: "Custom websites and web applications built with modern technologies.",
                items: ["Frontend Development", "Backend Development", "E-commerce", "CMS Integration"]
              },
              {
                title: "UI/UX Design",
                desc: "User-centered designs that enhance engagement and conversion.",
                items: ["User Research", "Wireframing", "Prototyping", "UI Design"]
              },
              {
                title: "Digital Marketing",
                desc: "Strategies to increase your online visibility and reach.",
                items: ["SEO", "Content Marketing", "Social Media", "PPC Campaigns"]
              },
              {
                title: "Branding",
                desc: "Create a memorable brand identity that resonates with your audience.",
                items: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
              },
              {
                title: "Mobile Apps",
                desc: "Native and cross-platform mobile applications for iOS and Android.",
                items: ["iOS Development", "Android Development", "React Native", "App Design"]
              },
              {
                title: "Consulting",
                desc: "Expert advice to optimize your digital strategy and operations.",
                items: ["Tech Stack Selection", "Process Optimization", "Digital Transformation", "Analytics"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="text-sm text-gray-600">
                  {service.items.map((item, i) => (
                    <li key={i} className="mb-2 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out some of our recent projects that demonstrate our capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-xl aspect-video bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer">
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Project {item}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "They delivered an outstanding website that exceeded our expectations. The team was professional and communicative throughout the process.",
                author: "Sarah Johnson",
                role: "Marketing Director"
              },
              {
                text: "Our online sales increased by 150% after launching the new e-commerce platform they developed for us. Absolutely remarkable results!",
                author: "Michael Chen",
                role: "E-commerce Manager"
              },
              {
                text: "The branding work they did completely transformed our company's image. We're now standing out in a crowded marketplace.",
                author: "Jessica Williams",
                role: "CEO, Tech Startup"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure quality and timely delivery.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {[
              { number: "01", title: "Discovery", desc: "We learn about your business, goals, and requirements." },
              { number: "02", title: "Planning", desc: "We create a detailed project plan and strategy." },
              { number: "03", title: "Design", desc: "We craft visually appealing and user-friendly designs." },
              { number: "04", title: "Development", desc: "We build your solution with clean, efficient code." },
              { number: "05", title: "Testing", desc: "We thoroughly test everything to ensure quality." },
              { number: "06", title: "Launch", desc: "We deploy your project and provide ongoing support." }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-xs mx-auto">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index}>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-3xl mx-auto text-center rounded-2xl bg-white p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to start your project?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Let's discuss how we can help your business grow with our digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
              Contact Us
            </button>
            <button className="px-8 py-3 bg-white border border-gray-300 text-gray-800 font-semibold rounded-xl hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;