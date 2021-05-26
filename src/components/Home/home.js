import React, { useState } from 'react';
import './home-style.scss';

import {
  BiDownArrow,
  FaMouse,
  AiOutlinePlus,
  FaTrashAlt,
  AiOutlineEllipsis,
  BsPlay,
  BsPause,
  GiCrosshair,
  IoIosExpand,
  GrLineChart,
  GrUpdate,
  MdChat,
  BiMessageCheck,
} from 'react-icons/all';
import GraphModal from '../graph-modal/GraphModal';

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="grid-container">
      <div className="Header">
        <img className="header--image" src="/logo.png" />
      </div>
      <div className="Content-area">
        <div className="ActionColumn">
          <div className="ActionArea">
            <div className="ActionSelector">
              <div className="actions-list--item">
                <div className="action-list--number">1</div>
                <div className="action-list--name border first-two">left click</div>
              </div>
              <div className="actions-list--item">
                <div className="action-list--number">2</div>
                <div className="action-list--name border first-two">right click</div>
              </div>
              <div className="actions-list--item">
                <div className="action-list--number">3</div>
                <div className="action-list--name border">middle click</div>
              </div>
              <div className="actions-list--item">
                <div className="action-list--number">4</div>
                <div className="action-list--name border">left click</div>
              </div>
              <div className="actions-list--item">
                <div className="action-list--number">5</div>
                <div className="action-list--name border">middle click</div>
              </div>
              <div className="actions-list--item">
                <div className="action-list--number" />
                <div className="action-list--name border">forward</div>
              </div>
              <div className="actions-list--item">
                <div className="action-list--number" />
                <div className="action-list--name border">back</div>
              </div>
              <div className="actions-list--item">
                <div className="action-list--number" />
                <div className="action-list--name border">scroll up</div>
              </div>
              <div className="actions-list--item">
                <div className="action-list--number" />
                <div className="action-list--name border">scroll down</div>
              </div>
              <div className="actions-list--item">
                <div className="action-list--number" />
                <div className="action-list--name border">keyboard key</div>
              </div>
              <div className="actions-list--item">
                <div className="action-list--number" />
                <div className="action-list--name border">disable button</div>
              </div>
            </div>
            <div className="ProfileSelector">
              <div className="select-box border">
                <div className="select-box__current" tabIndex="1">
                  <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="0" value="1" name="Ben" />
                    <p className="select-box__input-text">Profile 01</p>
                  </div>
                  <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="1" value="2" name="Ben" checked="checked" />
                    <p className="select-box__input-text">Profile 02</p>
                  </div>
                  <BiDownArrow className="select-box__icon" />
                </div>
                <ul className="select-box__list">
                  <li>
                    <label className="select-box__option" htmlFor="0" aria-hidden="aria-hidden">
                      Profile 01
                    </label>
                  </li>
                  <li>
                    <label className="select-box__option" htmlFor="1" aria-hidden="aria-hidden">
                      Profile 02
                    </label>
                  </li>
                </ul>
              </div>
              <div className="profile-selector-buttons">
                <button className="button">
                  <AiOutlinePlus />
                </button>
                <button className="button">
                  <FaTrashAlt />
                </button>
                <button className="button">
                  <AiOutlineEllipsis />
                </button>
              </div>
            </div>
          </div>
          <div className="ThreeIndicatorArea">
            <div className="indicator mouse-icon">
              <FaMouse />
              <p>mouse</p>
            </div>
            <div className="indicator playPause-icon">
              <div className="play-pause">
                <BsPlay />
                <BsPause />
              </div>
              <p>media</p>
            </div>
            <div className="indicator crosshair">
              <GiCrosshair />
              <p>CPI</p>
            </div>
          </div>
        </div>
        <div className="MouseImage">
          <img src="/mouse.png" />
        </div>
        <div className="GraphArea">
          <div className="graph-area--title">Graph</div>
          <div className="graph-area--graph border">
            <div className="graph-expand-button">
              <IoIosExpand className="expand-button" onClick={() => setModal(true)} />
            </div>
            <div className="graph-section">
              <div className="title">
                <BiDownArrow className="down-arrow" />
                <p>GRAPH</p>
                <span>?</span>
              </div>
              <div className="graph"></div>
            </div>
            <div className="info">
              <div className="title">
                <BiDownArrow className="down-arrow" />
                <p>INFO</p>
              </div>
              <div className="info-content">
                <div className="info-row">
                  <div className="info-key">
                    <div className="blue-color"></div>
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
          </div>
        </div>
      </div>
      <div className="Footer">
        <img src="/endgame-gear.png" className="endgame-gear-icon" />

        <div className="version-info">
          <p>firmware version: ver:32323232323</p>
          <p>Software version: ver: 4343434344</p>
        </div>
        <div className="right-icons">
          <GrLineChart />
          <BiMessageCheck />
          <GrUpdate />
          <span>UPDATE</span>
        </div>
      </div>
      <GraphModal modal={modal} setModal={setModal} />
    </div>
  );
};

export default Home;
