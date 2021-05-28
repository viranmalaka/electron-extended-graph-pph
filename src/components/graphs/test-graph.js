import React, { Component } from 'react';
import { Line } from '@nivo/line';
import * as time from 'd3-time';
import GraphDataGenerator from '../../service/graph-data-generator';

class RealTimeChart extends Component {
  dataGenerator = null;

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

    let graphData;
    if (startIndex + length < dataA.length) {
      graphData = dataA.slice(startIndex, startIndex + length);
    } else {
      if (dataA.length < length) {
        graphData = dataA;
      } else {
        graphData = dataA.slice(dataA.length - length);
      }
    }

    return (
      <div>
        <Line
          {...this.props}
          data={[{ id: 'A', data: graphData, color: '#fac41a' }]}
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
