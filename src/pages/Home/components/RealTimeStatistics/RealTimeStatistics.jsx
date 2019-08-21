import React, { Component } from 'react';
import { Grid, Feedback } from '@icedesign/base';
import Axios from 'axios';
import serverConfig from '../../../../serverConfig';
import { Link } from 'react-router-dom';
const Toast = Feedback.toast;

const { Row, Col } = Grid;

Date.prototype.format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

const createEndDt = new Date(Date.parse(new Date().toLocaleDateString()) - 4 * 3600 * 24 * 1000).format('yyyy-MM-dd hh:mm:ss')


export default class RealTimeStatistics extends Component {
  static displayName = 'RealTimeStatistics';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      tobeAssigned: 0,
      tobePickedUp: 0,
      transporting: 0,
      // tobeAssignedRate: 0,
      // tobePickedUpRate: 0,
      // transportingRate: 0,
      incompleteAfter5Days: 0
    }
  }

  componentDidMount() {
  }


  render() {
    const { tobeAssigned, tobePickedUp, transporting, incompleteAfter5Days } = this.state;

    return (
      <div className="real-time-statistics">
        <Row type="wrap" gutter="20" style={styles.items}>
          <Col xxs="24" s="12" l="6">
            <Link to='/logistics-bill?status=999'>
              <div style={{ ...styles.itemBody, ...styles.green }}>
                <div style={styles.itemTitle}>
                  <p style={styles.titleText}>待分配的取货单</p>
                  <span style={styles.tag}>实时</span>
                </div>
                <div style={styles.itemContent}>
                  <h2 style={styles.itemNum}>{tobeAssigned}</h2>
                  <div style={styles.itemMeta}>
                    <p style={styles.total}>{tobeAssigned}</p>
                    <p style={styles.desc}>当前总记录数</p>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col xxs="24" s="12" l="6">
            <Link to='/logistics-bill?status=100'>
              <div style={{ ...styles.itemBody, ...styles.lightBlue }}>
                <div style={styles.itemTitle}>
                  <p style={styles.titleText}>待取货的取货单</p>
                  <span style={styles.tag}>实时</span>
                </div>
                <div style={styles.itemContent}>
                  <h2 style={styles.itemNum}>{tobePickedUp}</h2>
                  <div style={styles.itemMeta}>
                    <p style={styles.total}>{tobePickedUp}</p>
                    <p style={styles.desc}>当前总记录数</p>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col xxs="24" s="12" l="6">
            <Link to='/logistics-bill?status=200'>
              <div style={{ ...styles.itemBody, ...styles.darkBlue }}>
                <div style={styles.itemTitle}>
                  <p style={styles.titleText}>运送中的取货单</p>
                  <span style={styles.tag}>实时</span>
                </div>
                <div style={styles.itemContent}>
                  <h2 style={styles.itemNum}>{transporting}</h2>
                  <div style={styles.itemMeta}>
                    <p style={styles.total}>{transporting}</p>
                    <p style={styles.desc}>当前总记录数</p>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col xxs="24" s="12" l="6">
            <Link to={`/logistics-bill?status=100&createEndDt=${encodeURI(createEndDt)}`}>
              <div style={{ ...styles.itemBody, ...styles.navyBlue }}>
                <div style={styles.itemTitle}>
                  <p style={styles.titleText}>5天还未取货的取货单</p>
                  <span style={styles.tag}>实时</span>
                </div>
                <div style={styles.itemContent}>
                  <h2 style={styles.itemNum}>{incompleteAfter5Days}</h2>
                  <div style={styles.itemMeta}>
                    <p style={styles.total}>{incompleteAfter5Days}</p>
                    <p style={styles.desc}>当前总记录数</p>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

const styles = {
  item: {
    marginBottom: '20px',
  },
  itemBody: {
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '4px',
    color: '#fff',
    height: '158px',
  },
  itemRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    position: 'relative',
  },
  titleText: {
    margin: 0,
    fontSize: '14px',
  },
  tag: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '2px 4px',
    borderRadius: '4px',
    fontSize: '12px',
    background: 'rgba(255, 255, 255, 0.3)',
  },
  itemNum: {
    margin: '16px 0',
    fontSize: '32px',
  },
  total: {
    margin: 0,
    fontSize: '12px',
  },
  desc: {
    margin: 0,
    fontSize: '12px',
  },
  green: {
    background: '#31B48D',
  },
  lightBlue: {
    background: '#38A1F2',
  },
  darkBlue: {
    background: '#7538C7',
  },
  navyBlue: {
    background: '#3B67A4',
  },
};
