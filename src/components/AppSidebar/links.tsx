import { Link } from 'react-router-dom';
import {
    AuditOutlined,
    PieChartOutlined,
    ReconciliationOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: <Link to='/dashboard'>Главная</Link>,
        icon: <PieChartOutlined />,
        key: 'dashboard',
    },
    {
        label: <Link to='/dashboard/waybills'>Накладные</Link>,
        icon: <AuditOutlined />,
        key: 'waybills',
    },
    {
        label: <Link to='/dashboard/balances'>Остатки</Link>,
        icon: <ReconciliationOutlined />,
        key: 'balances',
    },
    {
        label: <Link to='/dashboard/settings'>Настройки</Link>,
        icon: <SettingOutlined />,
        key: 'settings',
        children: [
            {
                key: 'categories',
                label: (
                    <Link to='/dashboard/settings/categories'>Категории</Link>
                ),
            },
            {
                key: 'products',
                label: <Link to='/dashboard/settings/products'>Продукты</Link>,
            },
            {
                key: 'holders',
                label: (
                    <Link to='/dashboard/settings/holders'>
                        Склады и Оптовики
                    </Link>
                ),
            },
            {
                key: 'users',
                label: <Link to='/dashboard/settings/users'>Пользователи</Link>,
            },
        ],
    },
];

export default items;
