import React from 'react';
import { BsQuestion } from 'react-icons/all';

const VidGraph = () => {
  return (
    <div className="vid-graph">
      <div>
        <BsQuestion className="icon" />
        <h1>GRAPH :</h1>
      </div>
      <p>
        Displays various mouse information and communication data between the mouse and the connected device, such as
        clicks, motions data and polling rate. When pressing a button its corresponding name box will light up in yellow
      </p>
    </div>
  );
};

export default VidGraph;
