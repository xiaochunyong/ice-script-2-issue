import React, { Component } from 'react';

import ReviewDetailInfo from './components/ReviewDetailInfo';
import ReviewOverview from './components/ReviewOverview';
import CircleProgress from './components/CircleProgress';
import RealTimeOverview from './components/RealTimeOverview';
import OverviewChartCard from './components/OverviewChartCard';
import MainData from './components/MainData';
import RealTimeStatistics from './components/RealTimeStatistics';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-page">
        <MainData />
        <RealTimeStatistics />
        {/* <ReviewDetailInfo />
        <CircleProgress />
        <RealTimeOverview />
        <OverviewChartCard /> */}
      </div>
    );
  }
}
