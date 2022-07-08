import { useEffect, useState } from 'react';

export const useScreenWidth = () => {
  const [isTabletResolution, setIsTabletResolution] = useState(window.screen.width <= 980);
  const [isMobileResolution, setIsMobileResolution] = useState(window.screen.width <= 400);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsTabletResolution(window.innerWidth >= 450 && window.innerWidth <= 980);
      setIsMobileResolution(window.innerWidth <= 450);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setIsTabletResolution(undefined);
      });
    };
  });

  return [isTabletResolution, isMobileResolution];
};
