import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './graph-modal-style.scss';

const GraphModal = ({ modal, setModal }) => {
  return (
    <div>
      <ReactModal
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(34, 34, 34, 0.75)',
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #fac41a',
            background: '#272727',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            padding: '20px',
          },
        }}
        isOpen={modal}
        contentLabel="Minimal Modal Example"
        className="react-modal"
      >
        <button onClick={() => setModal(false)}>Close Modal</button>
      </ReactModal>
    </div>
  );
};

export default GraphModal;
