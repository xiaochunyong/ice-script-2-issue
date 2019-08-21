import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Progress, Grid, Feedback } from '@icedesign/base';
import Axios from 'axios';
import serverConfig from '../../../../serverConfig';

const { Row, Col } = Grid;

const Toast = Feedback.toast;


export default class CircleProgress extends Component {
  static displayName = 'CircleProgress';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      tobeAssigned: 0,
      tobePickedUp: 0,
      transporting: 0,
      tobeAssignedRate: 0,
      tobePickedUpRate: 0,
      transportingRate: 0,
    }
  }

  componentDidMount() {
    Axios.request({
      url: `/dashboard/logistics-bill-statistics`,
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
          var sum = d.tobeAssignedCount + d.tobePickedUpCount + d.transportingCount;
          this.setState({
            tobeAssigned: d.tobeAssignedCount,
            tobePickedUp: d.tobePickedUpCount,
            transporting: d.transportingCount,
            tobeAssignedRate: d.tobeAssignedCount / sum * 100,
            tobePickedUpRate: d.tobePickedUpCount / sum * 100,
            transportingRate: d.transportingCount / sum * 100
          })
        }
      }
    })
  }

  render() {
    const { tobeAssigned, tobePickedUp, transporting, tobeAssignedRate, tobePickedUpRate, transportingRate } = this.state;

    return (
      <IceContainer title="未完成取货单">
        <Row type="wrap">
          <Col xxs="18" s="8" l="8">
            <div style={styles.item}>
              <a href={`${serverConfig.apiDomain}/logistics-bill?status=999`} target="_blank">
                <Progress
                  percent={tobeAssignedRate}
                  style={styles.progress}
                  shape="circle"
                  state="error"
                  size="large"
                  suffix={<span>{tobeAssigned}</span>}
                />
              </a>
              <h6 style={styles.title}>待分配</h6>
            </div>
          </Col>
          <Col xxs="18" s="8" l="8">
            <div style={styles.item}>
              <a href={`${serverConfig.apiDomain}/logistics-bill?status=100`} target="_blank">

                <Progress percent={tobePickedUpRate} shape="circle" size="large" state="error"
                  suffix={<span>{tobePickedUp}</span>}
                />
              </a>
              <h6 style={styles.title}>待取件</h6>
            </div>
          </Col>
          <Col xxs="18" s="8" l="8">
            <div style={styles.item}>
              <a href={`${serverConfig.apiDomain}/logistics-bill?status=200`} target="_blank">
                <Progress percent={transportingRate} shape="circle" size="large"
                  suffix={<span>{transporting}</span>}
                />
              </a>
              <h6 style={styles.title}>运送中</h6>
            </div>
          </Col>
          {/* <Col xxs="12" s="6" l="6">
            <div style={styles.item}>
              <Progress
                percent={100}
                shape="circle"
                state="success"
                size="large"
              />
              <h6 style={styles.title}>已送达</h6>
            </div>
          </Col> */}
        </Row>
      </IceContainer>
    );
  }
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    marginTop: 20,
  },
  progress: {
    cursor: 'pointer'
  }
};
