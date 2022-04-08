import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['dashboard'],
    },
    {
        text: 'INTERFACE',
        items: ['layouts', 'pages'],
    },
    {
        text: 'ADDONS',
        items: ['charts', 'tables'],
    },
   
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    // link: '/dashboard/static',
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                    {
                        text: 'Manage User',
                        link:'/auth/manageUser'
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                    
                ],
            },
            {   
                icon: 'asterisk',
                text: 'Chức Năng',
                submenu: [
                    {
                        text: 'Quản Lý Phòng Ban',
                        link:'#',
                    },
                    {
                        text: 'Quản Lý Nhân Viên',
                        link:'#',
                    },
                    {
                        text:'Quản Lý Chức Vụ',
                        link: '',
                    },
                ],
            },
            {
                text: 'Người Dùng',
                submenu: [
                    {
                        text: 'Quản Lý Người Dùng',
                        link:'#',
                    },
                    {
                        text: 'Quản Lý Nhóm Người Dùng',
                        link:'#',
                    },
                ],
            },
            {
                text: 'Văn Bản',
                submenu: [
                    {
                        text: 'Quản Lý Loại Văn Bản',
                        link:'#',
                    },
                    {
                        text: 'Quản Lý Nơi Đến',
                        link:'#',
                    },
                    {
                        text:'Quản Lý Văn Bản Đến',
                        link: '',
                    },
                ],
            },
            {
                text: 'Công Việc',
                submenu: [
                    {
                        text: 'Phân Công Công Việc',
                        link:'#',
                    },
                    {
                        text: 'Quản Lý Công Việc',
                        link:'#',
                    },
                    {
                        text:'Quản Lý Báo Cáo Công Việc',
                        link: '',
                    },
                ],
            },
            {
                text: 'Báo Cáo Xử Lý',
                submenu: [
                    {
                        text: 'Theo Dõi Văn Bản Quá Hạn',
                        link:'#',
                    },
                    {
                        text: 'Báo Cáo Văn Bản Đến',
                        link:'#',
                    },
                ],
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Charts',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Tables',
        link: '/tables',
    },
    
};
