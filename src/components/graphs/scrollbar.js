import React, { useEffect, useRef } from 'react';

import './override-scroll.scss';

const Scrollbar = ({ contentWidth, maxWidth, onScroll }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref) {
      ref.current.addEventListener('scroll', (e) => {
        onScroll(e.target.scrollLeft);
      });
    }
  }, [ref]);

  return (
    <div className="scrollbar sb_container" style={{ maxWidth }} ref={ref}>
      <div className="content" style={{ width: contentWidth }} />
    </div>
  );
};

export default Scrollbar;
