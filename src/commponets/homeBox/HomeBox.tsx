import React, { useEffect } from 'react';
import './HomeBox.css';

export const HomeBox: React.FC = () => {
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const position = window.innerHeight;
    console.log(scrolled + 'Home');
    console.log(position + 'Home  All');
  };

  return (
    <>
      <div className="block1">1</div>
      <div className="block2">2</div>
      <div className="block3">3</div>
    </>
  );
};
