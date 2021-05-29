import React from 'react';
import RealTimeChart from '../../graphs/test-graph';

const SplitGraph = () => {
  return (
    <div className="split-graphs">
      <div className="graph-1 graph-border">
        <RealTimeChart width={400} height={400} />
      </div>
      <img src="up-down-sign.png" />
      <div className="graph-2 graph-border">
        <RealTimeChart width={400} height={400} />
      </div>
    </div>
  );
};

export default SplitGraph;
