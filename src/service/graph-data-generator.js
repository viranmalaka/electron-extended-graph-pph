import * as time from 'd3-time';

const FAKE_STARTING_POINT = new Date();

const generateFakeTimeSeries = (offset = 0) => {
  return {
    x: time.timeSecond.offset(FAKE_STARTING_POINT, offset * 30),
    y: 10 + Math.round(Math.random() * 100),
  };
};

export default class GraphDataGenerator {
  dataStream = [];
  subscribers = [];
  intervalRef = null;
  static instance = null;

  constructor() {
    this.dataStream = Array(100)
      .fill({})
      .map((_, i) => generateFakeTimeSeries(i));
  }

  static getInstance = () => {
    if (!GraphDataGenerator.instance) {
      GraphDataGenerator.instance = new GraphDataGenerator();
    }
    return GraphDataGenerator.instance;
  };

  startGenerateStream = (int = 100) => {
    this.intervalRef = setInterval(() => {
      this.dataStream.push(generateFakeTimeSeries(this.dataStream.length - 1));
      this.publish();
    }, int);
  };

  stopStream = () => {
    clearInterval(this.intervalRef);
  };

  publish = () => {
    this.subscribers.forEach((sub) => sub && sub(this.dataStream));
  };

  subscribe = (fn) => {
    this.subscribers.push(fn);
  };

  getData = () => this.dataStream;
}
