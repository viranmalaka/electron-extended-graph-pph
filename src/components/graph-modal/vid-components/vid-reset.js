import React from 'react';
import { IoMdRefresh } from 'react-icons/all';

const VidReset = () => {
  return (
    <div className="vid-reset">
      <div>
        <IoMdRefresh className="red-reset-button icon" />
        <h1>RESET :</h1>
      </div>
      <p>
        Use this button to reset mouse to its default settings. If mouse does not respond to input actions such as
        clicks use the keyboard combination "CTRL + LSHIFT + X" to reset mouse.
      </p>
    </div>
  );
};

export default VidReset;
