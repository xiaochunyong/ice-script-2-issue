// 菜单配置
// headerMenuConfig：头部导航配置

const headerMenuConfig = [
  {
    name: '首页',
    to: '/',
    icon: 'home',
  },
];

// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '#/',
    icon: 'chart',
  },
  {
    name: '订单管理',
    icon: 'item',
    path: '/order',
    children: [
      {
        name: '订单列表',
        path: '#/order',
      },
      {
        name: '手机店订单列表',
        path: '#/shop-order',
      },
    ],
  },
  {
    name: '员工管理',
    icon: 'fans',
    path: '#/staff',
    selectedPaths: [
      // 当遇到selectedPaths里面的路由时, 左侧菜单选中当前节点
      '#/staff/:id',
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
