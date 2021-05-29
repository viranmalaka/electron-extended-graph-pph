import React, { Component } from 'react';
import { Line } from '@nivo/line';
import * as time from 'd3-time';
import GraphDataGenerator from '../../service/graph-data-generator';
import { Scrollbars } from 'react-custom-scrollbars';

class RealTimeChart extends Component {
  dataGenerator = null;
  scrollRef = null;
  tempScrollData = {};

  constructor(props) {
    super(props);
    this.dataGenerator = GraphDataGenerator.getInstance();
    this.state = {
      dataA: this.dataGenerator.getData(),
      startIndex: 0,
      length: 100,
    };
  }

  componentDidMount() {
    this.dataGenerator.startGenerateStream(100);
    this.dataGenerator.subscribe((data) => {
      this.setState({ dataA: data, startIndex: this.state.startIndex + 1 });
    });
  }

  componentWillUnmount() {
    this.dataGenerator.stopStream();
  }

  zoomIn = () => {
    const { length } = this.state;
    console.log(length);
    if (length > 19) {
      this.setState({ length: length - 10 });
    }
  };
  zoomOut = () => {
    const { length } = this.state;
    console.log(length);
    if (length < 441) {
      this.setState({ length: length + 10 });
    }
  };

  render() {
    const { dataA, startIndex, length } = this.state;
    const containerWidth = 1076;

    let graphData, a, b;
    if (startIndex + length < dataA.length) {
      a = startIndex;
      b = startIndex + length;
    } else {
      if (dataA.length < length) {
        a = 0;
        b = dataA.length;
      } else {
        a = dataA.length - length;
        b = dataA.length;
      }
    }
    graphData = dataA.slice(a, b);

    if (this.scrollRef) {
      this.scrollRef.scrollLeft((a * containerWidth) / length);
    }

    const data = [{ id: 'A', data: graphData, color: '#fac41a' }];
    if (this.props.threshold) {
      data.push({
        id: 'B',
        data: [
          { x: graphData[0].x, y: this.props.thresholdValue },
          { x: graphData[graphData.length - 1].x, y: this.props.thresholdValue },
        ],
        color: '#ff00ff',
      });
    }

    return (
      <div>
        <Line
          {...this.props}
          data={data}
          xScale={{ type: 'time' }}
          yScale={{ type: 'linear', max: 100 }}
          axisBottom={{
            format: '',
          }}
          enablePoints={false}
          enableGridX={true}
          curve="linear"
          animate={false}
          motionStiffness={120}
          motionDamping={50}
          isInteractive={false}
          enableSlices="x"
          useMesh={true}
          colors={(d) => d.color}
          theme={{
            grid: {
              line: {
                stroke: '#ffffff',
                strokeWidth: 1,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default RealTimeChart;
