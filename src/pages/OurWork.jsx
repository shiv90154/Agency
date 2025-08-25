import React, { useState } from "react";

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Sample work data organized by categories
  const workItems = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "logos",
      description: "Complete brand identity package for a tech startup",
      image: "https://picsum.photos/400/300?random=1"
    },
    {
      id: 2,
      title: "Website Redesign",
      category: "web",
      description: "Modern responsive website for a financial services company",
      image: "https://picsum.photos/400/300?random=2"
    },
    {
      id: 3,
      title: "Product Photography",
      category: "photos",
      description: "Professional product shots for an e-commerce brand",
      image: "https://picsum.photos/400/300?random=3"
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "videos",
      description: "30-day social media video campaign for a fitness brand",
      image: "https://picsum.photos/400/300?random=4"
    },
    {
      id: 5,
      title: "Mobile App UI",
      category: "ui",
      description: "User interface design for a food delivery application",
      image: "https://picsum.photos/400/300?random=5"
    },
    {
      id: 6,
      title: "Packaging Design",
      category: "print",
      description: "Sustainable packaging solution for a skincare line",
      image: "https://picsum.photos/400/300?random=6"
    },
    {
      id: 7,
      title: "Corporate Logo Suite",
      category: "logos",
      description: "Logo family for a multinational corporation",
      image: "https://picsum.photos/400/300?random=7"
    },
    {
      id: 8,
      title: "Explainer Video",
      category: "videos",
      description: "Animated explainer video for a SaaS product",
      image: "https://picsum.photos/400/300?random=8"
    },
    {
      id: 9,
      title: "E-commerce Website",
      category: "web",
      description: "High-converting online store for fashion retailer",
      image: "https://picsum.photos/400/300?random=9"
    }
  ];

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Work" },
    { id: "logos", name: "Logos & Branding" },
    { id: "web", name: "Web Design" },
    { id: "videos", name: "Video Editing" },
    { id: "photos", name: "Photography" },
    { id: "ui", name: "UI/UX Design" },
    { id: "print", name: "Print Design" }
  ];

  // Filter work items based on active category
  const filteredWork = activeCategory === "all" 
    ? workItems 
    : workItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Creative Work</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of exceptional design projects, from brand identities to digital experiences that deliver real results.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWork.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full mb-3">
                  {categories.find(cat => cat.id === item.category)?.name}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-10 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to create something amazing together?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our creative expertise.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurWork;