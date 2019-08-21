import React, { Component } from 'react';
import { Grid, Progress, Icon, Feedback } from '@icedesign/base';

const Toast = Feedback.toast;


export default class MainData extends Component {
  static displayName = 'MainData';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      submit: 0,
      deliver: 0,
      success: 0,
      deliverRate: 0,
      successRate: 0
    }
  }

  componentDidMount() {
  }

  render() {
    const { submit, deliver, success } = this.state;
    console.log(submit)
    return (
      <div style={styles.wrapper}>
        <div style={styles.content}>
          <div style={styles.contentItem}>
            <div style={styles.contentNum}>
              <span style={styles.bigNum}>{submit}</span>
              {/* <span style={styles.symbol}>+</span> */}
            </div>
            <div style={styles.contentDesc}>— 提交订单数 —</div>
          </div>
          <div style={styles.contentItem}>
            <div style={styles.contentNum}>
              <span style={styles.bigNum}>{deliver}</span>
              {/* <span style={styles.symbol}>+</span> */}
            </div>
            <div style={styles.contentDesc}>— 发货订单数 —</div>
          </div>
          <div style={styles.contentItem}>
            <div style={styles.contentNum}>
              <span style={styles.bigNum}>{success}</span>
              {/* <span style={styles.symbol}>+</span> */}
            </div>
            <div style={styles.contentDesc}>— 成交订单数 —</div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    background: '#F4F4F4',
  },
  content: {
    width: '100%',
    height: 220,
    maxWidth: 1024,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0 auto',
  },
  contentItem: {},
  contentNum: {
    display: 'flex',
    alignItems: 'center',
  },
  bigNum: {
    color: '#333',
    fontSize: 68,
  },
  symbol: {
    color: '#333',
    fontSize: 40,
    marginLeft: 10,
  },
  contentDesc: {
    color: '#666666',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 6,
  },
};
