import React, { useEffect, useState } from 'react';

// Simple wrapper that adds entrance animation on mount and exit animation
// on unmount using CSS classes defined in `index.css`.
export const PageTransition = ({ children }) => {
  const [stage, setStage] = useState('entering');

  useEffect(() => {
    const enterTimeout = setTimeout(() => setStage('entered'), 400);
    return () => clearTimeout(enterTimeout);
  }, []);

  return (
    <div className={`page-transition page-${stage}`}>
      {children}
    </div>
  );
};

export default PageTransition;
