import React, { PureComponent } from 'react';
import { Balloon, Icon } from '@icedesign/base';
import IceImg from '@icedesign/img';
import Layout from '@icedesign/layout';
import Menu from '@icedesign/menu';
import FoundationSymbol from 'foundation-symbol';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { headerMenuConfig } from '../../menuConfig';

export default class Header extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const { width, theme, className, style, staffName, staffId } = this.props;

    return (
      <Layout.Header
        theme={theme}
        className={cx('ice-design-layout-header', className)}
        style={{ ...style, width, justifyContent:'flex-end' }}
      >
        <div
          className="ice-design-layout-header-menu"
          style={{ display: 'flex' }}
        >
          {/* Header 菜单项 begin */}
          {false && headerMenuConfig && headerMenuConfig.length > 0 ? (
            <Menu mode="horizontal" selectedKeys={[]}>
              {headerMenuConfig.map((nav, idx) => {
                const linkProps = {};
                if (nav.newWindow) {
                  linkProps.href = nav.to;
                  linkProps.target = '_blank';
                } else if (nav.external) {
                  linkProps.href = nav.to;
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
            className="app-user-profile-menu"
          >
            <ul>
              {/* <li className="user-profile-menu-item">
                <Link to="/">
                  <FoundationSymbol type="person" size="small" />我的主页
                </Link>
              </li> */}
              {/* <li className="user-profile-menu-item">
                <a href={`${serverConfig.apiEndpoint}/staff/${staffId}`}>
                  <FoundationSymbol type="repair" size="small" />设置
                </a>
              </li> */}
              {/* <li className="user-profile-menu-item">
                <a href={`${serverConfig.apiEndpoint}/session/logout?redirect_uri=${encodeURIComponent(serverConfig.domain)}`}>
                  <FoundationSymbol type="compass" size="small" />退出
                </a>
              </li> */}
            </ul>
          </Balloon>
        </div>
      </Layout.Header>
    );
  }
}
