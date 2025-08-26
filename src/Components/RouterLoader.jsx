import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './components/Loader';

function RouterLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader when route changes
    setIsLoading(true);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading && <Loader type="progress" text="Loading page..." />}
      {/* Your router components go here */}
    </>
  );
}

export default RouterLoader;