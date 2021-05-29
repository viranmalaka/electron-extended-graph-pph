import React, { useState } from 'react';
import RealTimeChart from '../../graphs/test-graph';
import ReactSlider from 'react-slider';

import './slider.scss';

const FullWidthGraph = ({ graphRef }) => {
  const [tLine, setTLine] = useState(80);

  return (
    <div style={{ display: 'flex' }}>
      <ReactSlider
        onChange={(value) => {
          setTLine(value);
        }}
        value={tLine}
        className="vertical-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        ariaLabel={['Lowest thumb', 'Middle thumb', 'Top thumb']}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        orientation="vertical"
        invert
        pearling
        minDistance={10}
        min={2}
        max={97}
      />
      <div className="graph-border">
        <RealTimeChart width={1080} height={400} ref={graphRef} threshold thresholdValue={tLine} />
      </div>
    </div>
  );
};

export default FullWidthGraph;
