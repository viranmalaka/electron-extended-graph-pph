import React from 'react';

const VidTable = () => {
  return (
    <div className="vid-table">
      <div className="head">
        <div>NAME</div>
        <div>COLOR</div>
        <div>VALUE</div>
        <div>MIN</div>
        <div>MAX</div>
        <div>MOVING AVERAGE</div>
        <div>Y RESOLUTION</div>
        <div>X OFFSET</div>
      </div>
      <div className="body">
        <div className="row">
          <span>1</span>
          <span></span>
          <span>0.00</span>
          <span>-2.00</span>
          <span>1.00</span>
          <span>-0.00</span>
          <span>1/div</span>
          <span>-2.0</span>
        </div>
        <div className="row">
          <span>1</span>
          <span></span>
          <span>0.00</span>
          <span>-2.00</span>
          <span>1.00</span>
          <span>-0.00</span>
          <span>1/div</span>
          <span>-2.0</span>
        </div>
        <div className="row">
          <span>1</span>
          <span></span>
          <span>0.00</span>
          <span>-2.00</span>
          <span>1.00</span>
          <span>-0.00</span>
          <span>1/div</span>
          <span>-2.0</span>
        </div>
      </div>
    </div>
  );
};

export default VidTable;
