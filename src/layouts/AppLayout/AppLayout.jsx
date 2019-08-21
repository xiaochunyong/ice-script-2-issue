import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Tab, TabBar, TabBarItem, TabBody} from 'react-weui';
//import styles
import 'weui';
import IconHome from '../../assets/images/icon_nav_home.png';
import IconOrder from '../../assets/images/icon_nav_order.png';
import IconActive from '../../assets/images/icon_nav_active.png';
import IconPackage from '../../assets/images/icon_nav_package.png';


@withRouter
export default class AppLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      staffContext: {},
      count: 0,
    }
  }

  changeUrl(url) {
    this.props.history.push(url)
  }

  componentDidMount() {
  }

  render() {
    const { staffContext } = this.state;

    // console.log(staffContext)
    // console.log(this.props);
    return (
      <StaffContext.Provider value={staffContext}>
        <div style={{ height: '100%' }}>
          <Tab>
            <TabBody>
              { React.cloneElement(this.props.children, { staffContext }) }
              {/*<StaffContext.Consumer>*/}
              {/*  {ctx =>*/}
              {/*    { React.cloneElement(this.props.children, { staffContext }) }*/}
              {/*  }*/}
              {/*</StaffContext.Consumer>*/}
            </TabBody>
            <TabBar>
              {/*{ asideAppMenuConfig.map(it => (*/}
              {/*  <TabBarItem*/}
              {/*    active={it.path === this.props.match.path}*/}
              {/*    key={it.path}*/}
              {/*    icon={<img alt="" src={IconButton} />}*/}
              {/*    label={it.name}*/}
              {/*    onClick={(e, item) => {*/}
              {/*      this.props.history.push('/app/machine')*/}
              {/*    }}*/}
              {/*  />*/}
              {/*))}*/}



              <TabBarItem
                active={this.props.match.path === '/app'}
                key="/app"
                icon={<img alt="" src={IconHome} />}
                label="首页"
                onClick={e => this.changeUrl('/app')}
              />
              <TabBarItem
                active={this.props.match.path === '/app/logistics-bill'}
                key="/app/logistics-bill"
                icon={<img alt="" src={IconPackage} />}
                label="我要取货"
                onClick={e => this.changeUrl('/app/logistics-bill')}
              />
                {/*<span className="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>*/}
                {/*<span style="display: inline-block;position: relative;">*/}
                {/*    <img src="../../assets/images/icon_nav_package.png" alt="" className="weui-tabbar__icon">*/}
                {/*    */}
                {/*</span>*/}
                {/*<Badge preset="header">8</Badge>*/}
              <TabBarItem
                active={this.props.match.path === '/app/machine'}
                key="/app/machine"
                icon={<img alt="" src={IconActive} />}
                label="激活回收机"
                onClick={e => this.changeUrl('/app/machine')}
              />
              <TabBarItem
                active={this.props.match.path === '/app/order'}
                key="/app/order"
                icon={<img alt="" src={IconOrder} />}
                label="订单列表"
                onClick={e => this.changeUrl('/app/order')}
              />
            </TabBar>
          </Tab>
        </div>
      </StaffContext.Provider>
    )
  }
}
