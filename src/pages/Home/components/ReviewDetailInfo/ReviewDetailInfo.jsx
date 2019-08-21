import React, { Component } from 'react';
import { Grid, Progress, Icon, Feedback } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import Axios from 'axios';

const { Row, Col } = Grid;

const Toast = Feedback.toast;

export default class ReviewDetailInfo extends Component {
  static displayName = 'ReviewDetailInfo';

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
    Axios.request({
      url: `/dashboard/order-statistics`,
      withCredentials: true
    }).then(t => {
      if (t.status == 302) {
        location.href = t.headers['location'];
      } else {
        var rsp = t.data;
        if (rsp.code != 0) {
          Toast.error("数据获取失败");
        } else {
          var d = rsp.data;
          this.setState({
            submit: d.submitCount,
            deliver: d.deliverCount,
            success: d.successCount,
            deliverRate: d.deliverCount / d.submitCount * 100,
            successRate: d.successCount / d.submitCount * 100
          })
        }
      }
    })
  }

  onClick = () => {
    alert();
  }

  render() {
    const { submit, deliver, success, deliverRate, successRate } = this.state;
    return (
      <Row type="wrap" gutter="20">
        <Col s="8" xxs="24">
          <IceContainer style={styles.container} title="今日提交订单">
            <div style={styles.reviewTargetProgressWrapper}>
              <Progress
                style={styles.reviewTargetProgress}
                percent={100}
                size="large"
                shape="circle"
                suffix={<span>{submit}</span>}
              />
            </div>
          </IceContainer>
        </Col>
        <Col s="8" xxs="24">
          <IceContainer style={styles.container} title="今日发货订单">
            <div style={styles.reviewTargetProgressWrapper}>
              <Progress
                style={styles.reviewTargetProgress}
                percent={deliverRate}
                size="large"
                shape="circle"
                suffix={<span>{deliver}</span>}
              />
            </div>
          </IceContainer>
        </Col>
        <Col s="8" xxs="24">
          <IceContainer style={styles.container} title="今日成交订单">
            <div style={styles.reviewTargetProgressWrapper}>
              <Progress
                style={styles.reviewTargetProgress}
                percent={successRate}
                size="large"
                shape="circle"
                suffix={<span>{success}</span>}
              />
            </div>
          </IceContainer>
        </Col>
      </Row>
    );
  }
}

const styles = {
  container: {
    height: 316,
  },
  reviewRatingWrapper: {
    padding: '20px 0',
  },
  reviewRatingDesc: {
    color: '#999',
    textAlign: 'center',
  },
  reviewRating: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewRatingScore: {
    fontSize: 36,
    position: 'absolute',
    right: 'calc(100% + 20px)',
  },
  reviewRatingIcon: {
    position: 'relative',
    margin: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewRatingRatePositive: {
    fontSize: 26,
    color: '#2ecc71',
    position: 'absolute',
    left: 'calc(100% + 20px)',
  },
  reviewRatingRateNegative: {
    fontSize: 26,
    color: '#e74c3c',
    position: 'absolute',
    left: 'calc(100% + 20px)',
  },
  reviewRatingIconPositive: {
    color: '#2ecc71',
  },
  reviewRatingIconNegative: {
    color: '#e74c3c',
  },
  reviewRatingDivideLine: {
    borderTop: '1px solid #eee',
    width: 100,
    margin: '0 auto',
  },
  reviewTargetProgressWrapper: {
    padding: '30px 0 20px 0',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  reviewRatingGoalDesc: {
    textAlign: 'center',
  },
  reviewLeaderboardItem: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-between',
  },
  reviewLeaderboardItemAvatar: {
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'inline-block',
    marginRight: 15,
  },
  reviewLeaderboardItemAvatarImg: {
    display: 'block',
  },
  reviewLeaderboardItemName: {
    flex: 1,
  }
};
