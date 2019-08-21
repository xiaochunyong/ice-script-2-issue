/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import React, { Component } from 'react';
import cx from 'classnames';
import Layout from '@icedesign/layout';
import { Feedback } from '@icedesign/base';
import Menu, { SubMenu, Item as MenuItem } from '@icedesign/menu';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import FoundationSymbol from 'foundation-symbol';
import pathToRegexp from 'path-to-regexp';
import { Header, Footer, Logo } from './../../components';
import { asideMenuConfig } from './../../menuConfig';
import './scss/light.scss';
import serverConfig from '../../serverConfig';


@withRouter
export default class HeaderAsideFooterResponsiveLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);

    const openKeys = this.getOpenKeys();
    this.state = {
      openKeys,
      staffContext: {},
    };
    this.openKeysCache = openKeys;

    this.paths = [];
    asideMenuConfig.forEach(item => {
      if (item.children && item.children.length) {
        item.children.forEach(it => {
          // this.paths.push({ path: it.path, selectedKey: it.selectedKey || it.path });
          this.unfoldMenuConfig(it)
        });
      } else {
        this.unfoldMenuConfig(item)
        // this.paths.push({ path: item.path, selectedKey: item.selectedKey || item.path });
      }
    });
  }

  unfoldMenuConfig = (item) => {
    this.paths.push({ path: item.path, selectedKey: item.path });
    if (item.selectedPaths) {
      item.selectedPaths.forEach(selectedPath => {
        this.paths.push({ path: selectedPath, selectedKey: item.path })
      });
    }
  }

  componentDidMount() {
  }

  /**
   * 当前展开的菜单项
   */
  onOpenChange = (openKeys) => {
    this.setState({
      openKeys,
    });
    this.openKeysCache = openKeys;
  };

  /**
   * 获取当前展开的菜单项
   */
  getOpenKeys = () => {
    const { match } = this.props;
    const matched = match.url;
    let openKeys = [];

    Array.isArray(asideMenuConfig) &&
      asideMenuConfig.forEach((item, index) => {
        if (matched.startsWith(item.path)) {
          openKeys = [`${index}`];
        }
      });

    return openKeys;
  };

  getSelectedKey = (pathname) => {
    const pathname3 = `#${pathname}`
    for (let i = 0; i < this.paths.length; i++) {
      const it = this.paths[i];
      if (it.path === pathname3) {
        return it.path;
      }
      if (pathToRegexp(it.path).exec(pathname3)) {
        // return it.path.substring(0, it.path.lastIndexOf("/"));
        return it.selectedKey;
      }
    }
    return '';
  };

  render() {
    const { location } = this.props;
    const { pathname } = location;
    const { staffContext } = this.state;
    const selectedKey = this.getSelectedKey(pathname);

    return (
      <Layout
        fixable
        style={{ minHeight: '100vh' }}
        className={cx(
          'ice-design-header-aside-footer-responsive-layout-light',
          {
            'ice-design-layout': true,
          }
        )}
      >
        <Layout.Aside
          width="auto"
          theme="light"
          className={cx('ice-design-layout-aside')}
        >
          <div style={styles.logo}>
            <Logo style={styles.logoText} />
          </div>
          <Menu
            style={{ width: 240 }}
            mode="inline"
            selectedKeys={[selectedKey]}
            openKeys={this.state.openKeys}
            defaultSelectedKeys={[pathname]}
            onOpenChange={this.onOpenChange}
          >
            {Array.isArray(asideMenuConfig) &&
              asideMenuConfig.length > 0 &&
              asideMenuConfig.map((nav, index) => {
                if (nav.children && nav.children.length > 0) {
                  return (
                    <SubMenu
                      key={index}
                      title={
                        <span>
                          {nav.icon ? (
                            <FoundationSymbol size="small" type={nav.icon} />
                          ) : null}
                          <span className="ice-menu-collapse-hide">
                            {nav.name}
                          </span>
                        </span>
                      }
                    >
                      {nav.children.map((item) => {
                        const linkProps = {};
                        if (item.newWindow) {
                          linkProps.href = item.path;
                          linkProps.target = '_blank';
                        } else if (item.external) {
                          linkProps.href = item.path;
                        } else {
                          linkProps.to = item.path;
                        }
                        // 目前全都是to
                        if (linkProps.to.startsWith('#')) {
                          linkProps.to = linkProps.to.substring(1);
                          return (
                            <MenuItem key={item.path}>
                              <Link {...linkProps}>{item.name}</Link>
                            </MenuItem>
                          );
                        }
                          linkProps.href = `${serverConfig.apiEndpoint}${linkProps.to}`;
                          return (
                            <MenuItem key={item.path}>
                              <a {...linkProps}>{item.name}</a>
                            </MenuItem>
                          );
                      })}
                    </SubMenu>
                  );
                }
                const linkProps = {};
                if (nav.newWindow) {
                  linkProps.href = nav.path;
                  linkProps.target = '_blank';
                } else if (nav.external) {
                  linkProps.href = nav.path;
                } else {
                  linkProps.to = nav.path;
                }

                // 目前全都是to
                if (linkProps.to.startsWith('#')) {
                  linkProps.to = linkProps.to.substring(1);
                  return (
                    <MenuItem key={nav.path}>
                      <Link {...linkProps}>
                        <span>
                          {nav.icon ? (
                            <FoundationSymbol size="small" type={nav.icon} />
                          ) : null}
                          <span className="ice-menu-collapse-hide">
                            {nav.name}
                          </span>
                        </span>
                      </Link>
                    </MenuItem>
                  );
                }
                  linkProps.href = `${serverConfig.apiEndpoint}${linkProps.to}`;
                  return (
                    <MenuItem key={nav.path}>
                      <a {...linkProps}>
                        <span>
                          {nav.icon ? (
                            <FoundationSymbol size="small" type={nav.icon} />
                          ) : null}
                          <span className="ice-menu-collapse-hide">
                            {nav.name}
                          </span>
                        </span>
                      </a>
                    </MenuItem>
                  );
              })}
          </Menu>
          {/* 侧边菜单项 end */}
        </Layout.Aside>
        <Layout.Section>
          <Header theme="light" staffName="张三" staffId="1" />
          {/* 主体内容 */}
          <Layout.Main scrollable style={{ paddingRight: 20, paddingTop: 20 }}>
            {React.cloneElement(this.props.children, { staffContext: { id: 1, name: '张三'} })}
            <Footer />
          </Layout.Main>
        </Layout.Section>
      </Layout>
    );
  }
}

const styles = {
  logo: {
    padding: '10px 15px',
    background: '#002140',
  },
  logoText: {
    textAlign: 'center',
  },
  copyrightLink: {
    marginLeft: 5,
  },
};
