import React, { Component } from 'react';
import { ResponsiveLine, Line, LineDefaultProps } from '@nivo/line';
import * as time from 'd3-time';

const generateFakeTimeSeries = (offset = 0) => {
  return {
    x: time.timeSecond.offset(Date.now(), offset * 30),
    y: 10 + Math.round(Math.random() * 100),
  };
};

const commonProperties = {
  animate: false,
  enableSlices: 'x',
};

class RealTimeChart extends Component {
  constructor(props) {
    super(props);

    const date = new Date();
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    this.state = {
      dataA: Array(100)
        .fill({})
        .map((_, i) => generateFakeTimeSeries(i - 100)),
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.next, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  next = () => {
    const dataA = this.state.dataA.slice(1);
    dataA.push(generateFakeTimeSeries());

    this.setState({ dataA });
  };

  render() {
    const { dataA } = this.state;

    return (
      <div>
        <Line
          {...this.props}
          {...commonProperties}
          data={[{ id: 'A', data: dataA, color: '#fac41a' }]}
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
          enableSlices={false}
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
