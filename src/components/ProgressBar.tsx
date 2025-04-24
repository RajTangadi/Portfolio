'use client';

import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-[64px] left-0 w-full h-1 z-[9999]">
      <div
        className="h-full transition-all duration-300 ease-out"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: '#22D3EE',
          boxShadow: '0 0 10px #22D3EE',
        }}
      />
    </div>
  );
};

export default ProgressBar; 