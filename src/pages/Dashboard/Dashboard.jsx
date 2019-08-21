import React, { Component } from 'react';
import MainData from './components/MainData';
import RealTimeStatistics from './components/RealTimeStatistics';
import OverviewBoard from './components/OverviewBoard';
import OverviewChart from './components/OverviewChart';
import CircleProgress from './components/CircleProgress';
import RealTimeOverview from './components/RealTimeOverview';

export default class Dashboard extends Component {
  static displayName = 'Dashboard';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dashboard-page">
        <MainData />
        <RealTimeStatistics />
        <OverviewBoard />
        <OverviewChart />
        <CircleProgress />
        <RealTimeOverview />
      </div>
    );
  }
}
