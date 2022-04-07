import React, { useState } from 'react';

const ScrollButton = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const position = window.innerHeight;
    if (scrolled > 0) {
      setVisible(false);
    } else if (scrolled <= 0) {
      setVisible(true);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button className="button buttonPos" onClick={scrollToBottom}>
      Scroll {visible ? <strong>On</strong> : <strong>Off</strong>}
    </button>
  );
};

export default ScrollButton;
