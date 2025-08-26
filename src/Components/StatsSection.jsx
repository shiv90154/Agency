import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaProjectDiagram, 
  FaSmile, 
  FaUsers, 
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedStat, setExpandedStat] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { 
      number: "150+", 
      label: "Projects Completed",
      icon: <FaProjectDiagram />,
      description: "From small business websites to complex enterprise applications",
      color: "from-blue-400 to-cyan-400"
    },
    { 
      number: "95%", 
      label: "Client Satisfaction",
      icon: <FaSmile />,
      description: "Consistently high ratings from our satisfied clients",
      color: "from-teal-400 to-green-400"
    },
    { 
      number: "50+", 
      label: "Happy Clients",
      icon: <FaUsers />,
      description: "Businesses that trust us with their digital presence",
      color: "from-indigo-400 to-purple-400"
    },
    { 
      number: "5+", 
      label: "Years Experience",
      icon: <FaCalendarAlt />,
      description: "Delivering excellence since 2018",
      color: "from-purple-400 to-pink-400"
    }
  ];

  const toggleExpand = (index) => {
    if (expandedStat === index) {
      setExpandedStat(null);
    } else {
      setExpandedStat(index);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Impact in Numbers
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 ${expandedStat === index ? 'h-auto' : 'h-48'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleExpand(index)}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-full bg-gradient-to-r ${stat.color} text-2xl mb-4`}>
                  {stat.icon}
                </div>
                
                <motion.h3 
                  className="text-4xl md:text-5xl font-bold mb-2"
                  key={isVisible ? 'animate' : 'initial'}
                  initial={{ scale: 0.8 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.h3>
                
                <p className="text-blue-100 font-medium mb-3">{stat.label}</p>
                
                <div className="mt-2 text-blue-100 text-sm">
                  {expandedStat === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                
                {expandedStat === index && (
                  <motion.p 
                    className="text-blue-100 mt-4 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.description}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            View Our Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;