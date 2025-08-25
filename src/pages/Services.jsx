import React, { useState } from "react";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const servicesData = [
    {
      category: "Web & App Development",
      services: [
        "Custom Website Development (HTML, React, PHP, etc.)",
        "WordPress Website Design & Development",
        "Shopify Store Setup & Customization",
        "E-commerce Website Development",
        "Mobile App Development (Android / iOS)",
        "Web Application Development",
        "Website Maintenance & Support"
      ],
      icon: "💻",
      color: "from-blue-500 to-blue-700"
    },
    {
      category: "Branding & Graphic Design",
      services: [
        "Logo Design & Brand Identity",
        "Business Cards & Stationery Design",
        "Social Media Post Design",
        "YouTube Thumbnails & Channel Art",
        "Banner Design (Web & Print)",
        "Brochures, Flyers & Catalogs",
        "UI/UX Design (Web & Mobile Interfaces)"
      ],
      icon: "🎨",
      color: "from-purple-500 to-purple-700"
    },
    {
      category: "Digital Marketing & Advertising",
      services: [
        "Google Ads (Search, Display, Shopping)",
        "Meta Ads (Facebook & Instagram)",
        "LinkedIn Ads",
        "YouTube Ads & Promotions",
        "SEO (Search Engine Optimization)",
        "Social Media Marketing (SMM)",
        "Email Marketing Campaigns",
        "Content Marketing & Copywriting"
      ],
      icon: "📈",
      color: "from-green-500 to-green-700"
    },
    {
      category: "E-Commerce & Marketplace Management",
      services: [
        "Product Listing Services (Amazon, Flipkart, Meesho, Myntra, etc.)",
        "Bulk Product Uploads (via Excel/CSV)",
        "Optimized Titles, Descriptions & Keywords",
        "Category & Attribute Selection",
        "Product Image Editing & Optimization",
        "Catalog Management & Inventory Updates",
        "Order & Store Management Support",
        "Competitor Research & Pricing Strategy"
      ],
      icon: "🛒",
      color: "from-orange-500 to-orange-700"
    },
    {
      category: "Content Creation",
      services: [
        "Professional Video Editing (YouTube, Reels, Ads)",
        "Motion Graphics & Animations",
        "Product Photography & Editing",
        "Explainer & Promo Videos",
        "Voiceover & Script Writing"
      ],
      icon: "🎥",
      color: "from-red-500 to-red-700"
    },
    {
      category: "IT & Business Support",
      services: [
        "Domain & Hosting Setup",
        "Business Email Setup",
        "CRM & ERP Solutions",
        "Data Entry & Virtual Assistance",
        "Business Consulting (Online Growth & Strategy)"
      ],
      icon: "🔧",
      color: "from-indigo-500 to-indigo-700"
    }
  ];

  // Get all unique service items for the "All Services" view
  const allServices = servicesData.flatMap(category => 
    category.services.map(service => ({
      name: service,
      category: category.category,
      icon: category.icon,
      color: category.color
    }))
  );

  const filteredServices = activeCategory === "all" 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow and thrive in the digital landscape.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
            }`}
          >
            All Services
          </button>
          {servicesData.map(category => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              {category.icon} {category.category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {activeCategory === "all" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${category.color} h-2 w-full`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {category.services.map((service, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-3">{service.icon}</span>
                  <div>
                    <h4 className="font-medium text-gray-900">{service.name}</h4>
                    <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-10 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;