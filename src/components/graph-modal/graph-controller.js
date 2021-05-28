import React, { useEffect, useState } from 'react';
import {
  FaPlay,
  GrPowerReset,
  ImZoomIn,
  ImZoomOut,
  IoMdRefresh,
  IoPauseSharp,
  MdTrendingDown,
  MdTrendingUp,
} from 'react-icons/all';
import VidGraph from './vid-components/vid-graph';
import VidReset from './vid-components/vid-reset';
import VidTable from './vid-components/vid-table';

const GraphController = ({ setGraphMode, mode, graphRef }) => {
  const [vidMode, setVidMode] = useState('graph');

  useEffect(() => {
    setVidMode(mode ? 'table' : 'graph');
  }, [mode]);

  return (
    <div className="graph-controller">
      <div className="buttons">
        <FaPlay />
        <IoPauseSharp />
        <div />
        <ImZoomIn onClick={() => graphRef.current.zoomIn()} />
        <ImZoomOut onClick={() => graphRef.current.zoomOut()} />
        <div />
        <MdTrendingUp onClick={() => setGraphMode(!mode)} />
        <MdTrendingDown onClick={() => setGraphMode(!mode)} />
        <IoMdRefresh
          className="red-reset-button"
          onMouseEnter={() => setVidMode('reset')}
          onMouseLeave={() => setVidMode('graph')}
        />
      </div>
      <div className="vid">
        {vidMode === 'graph' && <VidGraph />}
        {vidMode === 'reset' && <VidReset />}
        {vidMode === 'table' && <VidTable />}
      </div>
      <div className="info-container">
        <div className="info-row">
          <div className="info-key">
            <div className="blue-color" />
          </div>
          <div className="info-value">Signal that reaches the PC</div>
        </div>
        <div className="info-row">
          <div className="info-key">
            <div className="yellow-color" />
          </div>
          <div className="info-value">Analog signal at switch/button</div>
        </div>
        <div className="info-row">
          <div className="info-key">
            <div className="pink-color" />
          </div>
          <div className="info-value">User set threshold</div>
        </div>
        <div className="info-row">
          <div className="info-key">Y</div>
          <div className="info-value">Signal strength</div>
        </div>
        <div className="info-row">
          <div className="info-key">X</div>
          <div className="info-value">Time</div>
        </div>
      </div>
    </div>
  );
};

export default GraphController;
