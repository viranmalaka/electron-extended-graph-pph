import React from 'react';
import RealTimeChart from '../../graphs/test-graph';

const FullWidthGraph = () => {
  return (
    <div className="graph-border">
      <RealTimeChart width={1080} height={400} />
    </div>
  );
};

export default FullWidthGraph;
