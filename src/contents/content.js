
import {
    DashboardRounded,
    LocalShipping,
    ReceiptLong,
    ProductionQuantityLimits,
    Psychology,
    ManageHistory,
    AccountCircle,
    ExitToApp,
    Assessment,
    PersonOutline,
    NotificationsNone,
    SettingsApplications,
    LanguageOutlined,
    DarkModeOutlined,
    FullscreenExitOutlined,
    ListOutlined,
    MonetizationOnOutlined,
    AccountBalanceWalletOutlined,
} from '@mui/icons-material';

export const sidebarItem = [
    {
        title: 'Main', item: [
            { name: 'Dashboard', icon: <DashboardRounded /> },
        ]
    },
    {
        title: 'List', item: [
            { name: 'Users', icon: <PersonOutline /> },
            { name: 'Products', icon: <ProductionQuantityLimits /> },
            { name: 'Orders', icon: <ReceiptLong /> },
            { name: 'Delivery', icon: <LocalShipping /> },
        ]
    },
    {
        title: 'Useful', item: [
            { name: 'Stats', icon: <Assessment /> },
            { name: 'Notifications', icon: <NotificationsNone /> },
        ]
    },
    {
        title: 'Service', item: [
            { name: 'System Health', icon: <ManageHistory /> },
            { name: 'Logs', icon: <Psychology /> },
            { name: 'Settings', icon: <SettingsApplications /> },
        ]
    },
    {
        title: 'User', item: [
            { name: 'Profile', icon: <AccountCircle /> },
            { name: 'Logout', icon: <ExitToApp /> },
        ]
    },
];

export const colorOptions = [
    { id: '1', value: 'whitesmoke' },
    { id: '2', value: '#333' },
    // { id: '3', value: 'darkblue' },
];

export const navbarItems = [
    { id: 1, icon: <LanguageOutlined style={{ fontSize: "20px" }} /> },
    { id: 2, icon: <DarkModeOutlined style={{ fontSize: "20px" }} /> },
    { id: 3, icon: <FullscreenExitOutlined style={{ fontSize: "20px" }} /> },
    { id: 4, icon: <NotificationsNone style={{ fontSize: "20px" }} /> },
    // { id: 5, icon: <ChatBubbleOutlineOutlined style={{ fontSize: "20px" }} /> },
    { id: 6, icon: <ListOutlined style={{ fontSize: "20px" }} /> },
];

export const widgetItems = [
    {
        id: 1, title: 'users', isMoney: false, counter: 98, per: 18, link: 'See all users',
        icon: <PersonOutline className='icon' style={{ color: 'crimson', backgroundColor: 'rgba(255, 0, 0, 0.2)' }} />
    },
    {
        id: 2, title: 'orders', isMoney: false, counter: 1024, per: 14, link: 'View all orders',
        icon: <ProductionQuantityLimits className='icon' style={{ color: 'goldenrod', backgroundColor: 'rgba(218, 165, 32, 0.2)' }} />
    },
    {
        id: 3, title: 'earnings', isMoney: true, counter: 445000, per: 10, link: 'View net earnings',
        icon: <MonetizationOnOutlined className='icon' style={{ color: 'green', backgroundColor: 'rgba(0, 128, 0, 0.2)' }} />
    },
    {
        id: 4, title: 'balance', isMoney: true, counter: 542000, per: 12, link: 'See details',
        icon: < AccountBalanceWalletOutlined className='icon' style={{ color: 'purple', backgroundColor: 'rgba(128, 0, 128, 0.2)' }} />
    },
];