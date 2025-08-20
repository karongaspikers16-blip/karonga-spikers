"use client";

import { useState, useEffect } from "react";

export function useResponsive() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({ width, height });
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
    windowSize,
  };
}

export function ResponsiveTest() {
  const { isMobile, isTablet, isDesktop, windowSize } = useResponsive();

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-3 rounded-lg text-xs z-50">
      <div>Width: {windowSize.width}px</div>
      <div>Height: {windowSize.height}px</div>
      <div className="mt-1">
        {isMobile && <span className="text-red-400">📱 Mobile</span>}
        {isTablet && <span className="text-yellow-400">📱 Tablet</span>}
        {isDesktop && <span className="text-green-400">💻 Desktop</span>}
      </div>
    </div>
  );
}
