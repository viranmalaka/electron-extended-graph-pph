import React from 'react';
import RealTimeChart from '../../graphs/test-graph';

const FullWidthGraph = ({ graphRef }) => {
  return (
    <div className="graph-border">
      <RealTimeChart width={1080} height={400} ref={graphRef} />
    </div>
  );
};

export default FullWidthGraph;
