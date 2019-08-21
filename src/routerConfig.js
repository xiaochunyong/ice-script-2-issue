// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import AsyncComponent from './components/AsyncComponent';

const AsideLayout = AsyncComponent(() => import('./layouts/AsideLayout'));
const AppLayout = AsyncComponent(() => import('./layouts/AppLayout'));
const Home = AsyncComponent(() => import('./pages/Home'));
const Machine = AsyncComponent(() => import('./pages/Home'));
const MachineConfiguration = AsyncComponent(() => import('./pages/Home'));
const MachinePlacementPointBindTrace = AsyncComponent(() => import('./pages/Home'));
const Order = AsyncComponent(() => import('./pages/Home'));
const OrderDetail = AsyncComponent(() => import('./pages/Home'));
const ShopOrder = AsyncComponent(() => import('./pages/Home'));


const Malfunction = AsyncComponent(() => import('./pages/Home'));
const LogisticsBill = AsyncComponent(() => import('./pages/Home'));
const LogisticsBillOrderDetail = AsyncComponent(() => import('./pages/Home'));
const Staff = AsyncComponent(() => import('./pages/Home'));
const Dashboard = AsyncComponent(() => import('./pages/Dashboard'));
const Login = AsyncComponent(() => import('./pages/Home'));
const MalfunctionRecord = AsyncComponent(() => import('./pages/Home'));
const Authority = AsyncComponent(() => import('./pages/Home'));
const AuthorityGroup = AsyncComponent(() => import('./pages/Home'));
const Session = AsyncComponent(() => import('./pages/Home'));
const BlankLayout = AsyncComponent(() => import('./layouts/BlankLayout'));
const AuthorityGroupDetail = AsyncComponent(() => import('./pages/Home'));
const StaffDetail = AsyncComponent(() => import('./pages/Home'));
const AppMachine = AsyncComponent(() => import('./pages/Home'));
const AppLogisticsBill = AsyncComponent(() => import('./pages/Home'));
const AppPlacementPoint = AsyncComponent(() => import('./pages/Home'));
const AppPlacementPointDetail = AsyncComponent(() => import('./pages/Home'));
const AppHome = AsyncComponent(() => import('./pages/Home'));
const NotFound = AsyncComponent(() => import('./pages/NotFound'));
const AppLogisticsBillDetail = AsyncComponent(() => import('./pages/Home'));
const ScanRecord = AsyncComponent(() => import('./pages/Home'));
const AppFactoryTestRecord = AsyncComponent(() => import('./pages/Home'));
const PlacementPointBusinessType = AsyncComponent(() => import('./pages/Home'));
const AppInfo = AsyncComponent(() => import('./pages/Home'));
const AppGroup = AsyncComponent(() => import('./pages/Home'));
const BannerProject = AsyncComponent(() => import('./pages/Home'));

const AppMalfunctionRecord = AsyncComponent(() => import('./pages/Home'), 'AppMalfunctionRecord');
const AppMalfunctionRecordDetail = AsyncComponent(() => import('./pages/Home'), 'AppMalfunctionRecordDetail');
const ConfigurationTemplate = AsyncComponent(() => import('./pages/Home'), 'ConfigurationTemplate');
const ConfigurationTemplateEdit = AsyncComponent(() => import('./pages/Home'), 'ConfigurationTemplateEdit');
const AppAdInfo = AsyncComponent(() => import('./pages/Home'), 'AppAdInfo');
const AppAdInfoEdit = AsyncComponent(() => import('./pages/Home'), 'AppAdInfoEdit');
const PlacementPoint = AsyncComponent(() => import('./pages/Home'), 'PlacementPoint');
const PlacementPointMap = AsyncComponent(() => import('./pages/Home'), 'PlacementPointMap');
const PlacementPointBatchAdd = AsyncComponent(() => import('./pages/Home'), 'PlacementPointBatchAdd');
const PlacementPointDetail = AsyncComponent(() => import('./pages/Home'), 'PlacementPointDetail');
const ConfigurationItem = AsyncComponent(() => import('./pages/Home'), 'ConfigurationItem');
const ConfigurationItemEdit = AsyncComponent(() => import('./pages/Home'), 'ConfigurationItemEdit');
const AppOrder = AsyncComponent(() =>  import('./pages/Home'), 'AppOrder');
const AppOrderDetail = AsyncComponent(() => import('./pages/Home'), 'AppOrderDetail');
const AppAdmin = AsyncComponent(() => import('./pages/Home'), 'AppAdmin');


const AppCouponStyle = AsyncComponent(() => import('./pages/Home'), 'AppCouponStyle');
const AppCouponStyleEdit = AsyncComponent(() => import('./pages/Home'), 'AppCouponStyleEdit');

const routerConfig = [
  {
    path: '/order/:orderNo',
    layout: AsideLayout,
    component: OrderDetail,
  },
  {
    path: '/malfunction',
    layout: AsideLayout,
    component: Malfunction,
  },
  {
    path: '/authority',
    layout: AsideLayout,
    component: Authority,
  },
  {
    path: '/dashboard',
    layout: AsideLayout,
    component: Dashboard,
  },
  {
    path: '/login',
    layout: AsideLayout,
    component: Login,
  },
  {
    path: '/machine/configuration',
    layout: AsideLayout,
    component: MachineConfiguration,
  },
  {
    path: '/configuration/template',
    layout: AsideLayout,
    component: ConfigurationTemplate,
  },
  {
    path: '/configuration/template/:id',
    layout: AsideLayout,
    component: ConfigurationTemplateEdit,
  },
  {
    path: '/configuration/item',
    layout: AsideLayout,
    component: ConfigurationItem,
  },
  {
    path: '/configuration/item/:id',
    layout: AsideLayout,
    component: ConfigurationItemEdit,
  },
  {
    path: '/configuration/ad',
    layout: AsideLayout,
    component: AppAdInfo,
  },
  {
    path: '/configuration/ad/:id',
    layout: AsideLayout,
    component: AppAdInfoEdit,
  },
  {
    path: '/configuration/project',
    layout: AsideLayout,
    component: BannerProject,
  },
  {
    path: '/machine/placement-point-bind-trace',
    layout: AsideLayout,
    component: MachinePlacementPointBindTrace,
  },
  {
    path: '/machine',
    layout: AsideLayout,
    component: Machine,
  },
  {
    path: '/placement-point',
    layout: AsideLayout,
    component: PlacementPoint,
  },
  {
    path: '/placement-point/batch-add',
    layout: AsideLayout,
    component: PlacementPointBatchAdd,
  },
  {
    path: '/placement-point/:id',
    layout: AsideLayout,
    component: PlacementPointDetail,
  },
  {
    path: '/',
    layout: AsideLayout,
    component: Home,
  },
  {
    path: '/placement-point-map',
    layout: AsideLayout,
    component: PlacementPointMap,
  },
  {
    path: '/order',
    layout: AsideLayout,
    component: Order,
  },
  {
    path: '/shop-order',
    layout: AsideLayout,
    component: ShopOrder,
  },
  {
    path: '/logistics-bill',
    layout: AsideLayout,
    component: LogisticsBill,
  },
  {
    path: '/logistics-bill/order-detail',
    layout: AsideLayout,
    component: LogisticsBillOrderDetail,
  },
  {
    path: '/dashboard',
    layout: AsideLayout,
    component: Dashboard,
  },
  {
    path: '/staff',
    layout: AsideLayout,
    component: Staff,
  },
  {
    path: '/authority-group',
    layout: AsideLayout,
    component: AuthorityGroup,
  },
  {
    path: '/malfunction',
    layout: AsideLayout,
    component: Malfunction,
  },
  {
    path: '/dashboard',
    layout: AsideLayout,
    component: Dashboard,
  },
  {
    path: '/malfunction-record',
    layout: AsideLayout,
    component: MalfunctionRecord,
  },
  {
    path: '/session',
    layout: BlankLayout,
    component: Session,
  },
  {
    path: '/authority-group/:id',
    layout: AsideLayout,
    component: AuthorityGroupDetail,
  },
  {
    path: '/staff/:id',
    layout: AsideLayout,
    component: StaffDetail,
  },
  {
    path: '/machine/scan-record',
    layout: AsideLayout,
    component: ScanRecord,
  },
  {
    path: '/machine-app/app-info',
    layout: AsideLayout,
    component: AppInfo,
  },
  {
    path: '/machine-app/app-group',
    layout: AsideLayout,
    component: AppGroup,
  },
  {
    path: '/placement-point-business-type',
    layout: AsideLayout,
    component: PlacementPointBusinessType,
  },
  {
    path: '/app/machine',
    layout: AppLayout,
    component: AppMachine,
  },
  {
    path: '/app/malfunction-record',
    layout: AppLayout,
    component: AppMalfunctionRecord,
  },
  {
    path: '/app/logistics-bill',
    layout: AppLayout,
    component: AppLogisticsBill,
  },
  {
    path: '/app/placement-point',
    layout: AppLayout,
    component: AppPlacementPoint,
  },
  {
    path: '/app/placement-point/:id',
    layout: AppLayout,
    component: AppPlacementPointDetail,
  },
  {
    path: '/app/malfunction-record/:id',
    layout: AppLayout,
    component: AppMalfunctionRecordDetail,
  },
  {
    path: '/app',
    layout: AppLayout,
    component: AppHome,
  },
  {
    path: '/app/logistics-bill/:billNo',
    layout: AppLayout,
    component: AppLogisticsBillDetail,
  },
  {
    path: '/app/factory-test-record',
    layout: AppLayout,
    component: AppFactoryTestRecord,
  },
  {
    path: '/app/order',
    layout: AppLayout,
    component: AppOrder,
  },
  {
    path: '/app/order/:orderNo',
    layout: AppLayout,
    component: AppOrderDetail,
  },
  {
    path: '/app/admin',
    layout: AppLayout,
    component: AppAdmin,
  },

  {
    path: '/configuration/couponStyle',
    layout: AsideLayout,
    component: AppCouponStyle,
  },
  {
    path: '/configuration/couponStyle/:id',
    layout: AsideLayout,
    component: AppCouponStyleEdit,
  },
  {
    path: '*',
    layout: AsideLayout,
    component: NotFound,
  },
];

export default routerConfig;
