import React, { PureComponent } from 'react';
import { Balloon, Icon, Dropdown } from '@icedesign/base';
import IceImg from '@icedesign/img';
import Layout from '@icedesign/layout';
import Menu from '@icedesign/menu';
import FoundationSymbol from 'foundation-symbol';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { headerMenuConfig } from '../../menuConfig';
import serverConfig from '../../serverConfig';
import { getCurrentCity, setCurrentCity } from '../../utils/base';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    const city = getCurrentCity();
    this.state = {
      cities: [],
      currentCity: city.name || '选择当前城市',
      selectedKeys: city.id ? [city.id] : [],
    }
  }

  onCitySelect = ({ selectedKeys, item, key, ...remainingProps }) => {
    const cityId = key;
    const cityName = item.props.children;
    setCurrentCity(cityId, cityName);

    setTimeout(() => {
      location.reload(true);
    }, 100);
    // this.setState({
    //   selectedKeys,
    //   currentCity: cityName,
    // });
  };

  componentDidMount() {
  }

  render() {
    const { width, theme, className, style, staffName, staffId } = this.props;

    return (
      <Layout.Header
        theme={theme}
        className={cx('ice-design-layout-header', className)}
        style={{ ...style, width }}
      >
        <div style={{ textAlign: 'left' }}>
          <FoundationSymbol type="location" size="large" /> <span style={{ fontSize: '16px' }}>{this.state.currentCity} </span>
          <Dropdown trigger={<a href="#" style={{ fontSize: '12px' }}>[切换]</a>} triggerType="click">
            <Menu
              onSelect={this.onCitySelect}
              selectMode="single"
              selectedKeys={this.state.selectedKeys}
              style={{ zIndex: '1' }}
            >
              { this.state.cities.map(it => <Menu.Item key={it.value}>{it.name}</Menu.Item>)}
            </Menu>
          </Dropdown>
        </div>
        <div
          className="ice-design-layout-header-menu"
          style={{ display: 'flex' }}
        >
          {/* Header 菜单项 begin */}
          {headerMenuConfig && headerMenuConfig.length > 0 ? (
            <Menu mode="horizontal" selectedKeys={[]}>
              {headerMenuConfig.map((nav, idx) => {
                const linkProps = {};
                if (nav.newWindow) {
                  linkProps.href = nav.to;
                  linkProps.target = '_blank';
                } else if (nav.external) {
                  linkProps.href = `${serverConfig.apiEndpoint}${nav.to}`;
                } else {
                  linkProps.to = nav.to;
                }
                return (
                  <Menu.Item key={idx}>
                    {linkProps.to ? (
                      <Link {...linkProps}>
                        {nav.icon ? (
                          <FoundationSymbol type={nav.icon} size="small" />
                        ) : null}
                        {nav.name}
                      </Link>
                    ) : (
                      <a {...linkProps}>
                        {nav.icon ? (
                          <FoundationSymbol type={nav.icon} size="small" />
                          ) : null}
                        {nav.name}
                      </a>
                      )}
                  </Menu.Item>
                );
              })}
            </Menu>
          ) : null}
          {/* Header 菜单项 end */}

          {/* Header 右侧内容块 */}

          <Balloon
            trigger={
              <div
                className="ice-design-header-userpannel"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 12,
                }}
              >
                <IceImg
                  height={40}
                  width={40}
                  src="https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png"
                  className="user-avatar"
                />
                <div className="user-profile">
                  <span className="user-name" style={{ fontSize: '13px' }}>
                    {staffName}
                  </span>
                  {/* <br />
                  <span
                    className="user-department"
                    style={{ fontSize: '12px', color: '#999' }}
                  >
                    技术部
                  </span> */}
                </div>
                <Icon
                  type="arrow-down-filling"
                  size="xxs"
                  className="icon-down"
                />
              </div>
            }
            closable={false}
            className="user-profile-menu"
          >
            <ul>
              {/* <li className="user-profile-menu-item">
                <Link to="/">
                  <FoundationSymbol type="person" size="small" />我的主页
                </Link>
              </li> */}
              <li className="user-profile-menu-item">
                <a href={`/#/staff/${staffId}`}>
                  <FoundationSymbol type="repair" size="small" />设置
                </a>
              </li>
              <li className="user-profile-menu-item">
                <a onClick={() => logout()}>
                  <FoundationSymbol type="compass" size="small" />退出
                </a>
              </li>
            </ul>
          </Balloon>
        </div>
      </Layout.Header>
    );
  }
}
