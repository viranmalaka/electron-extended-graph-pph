import React, { useRef, useState } from 'react';
import ReactModal from 'react-modal';
import './graph-modal-style.scss';
import { BiCollapse } from 'react-icons/all';
import FullWidthGraph from './graph-area/full-width-graph';
import SplitGraph from './graph-area/split-graph';
import GraphController from './graph-controller';

const GraphModal = ({ modal, setModal }) => {
  const [isSplitMode, setSplitMode] = useState(false);

  const graphRef = useRef();

  return (
    <div>
      <ReactModal
        style={{
          overlay: {
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(34, 34, 34, 0.75)',
          },
          content: {
            border: '1px solid #fac41a',
            background: '#272727',
            overflow: 'auto',
            padding: '5px',
            outline: 'none',
            maxWidth: '1200px',
            width: '88vw',
            height: '72vh',
          },
        }}
        isOpen={modal}
        contentLabel="Minimal Modal Example"
        className="react-modal"
      >
        <BiCollapse className="close-icon" onClick={() => setModal(false)} />
        <div className="graph-container">{!isSplitMode ? <FullWidthGraph graphRef={graphRef} /> : <SplitGraph />}</div>
        <GraphController setGraphMode={setSplitMode} mode={isSplitMode} graphRef={graphRef} />
      </ReactModal>
    </div>
  );
};

export default GraphModal;
