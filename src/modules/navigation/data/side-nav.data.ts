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
                submenu:[
                    {
                        text: 'Static',
                        link: '/dashboard/static',
                    },
                    {
                        text: 'Static1',
                        link: '/dashboard/mangedocument',
                    },
                    {
                        text: 'Static2',
                        link: '#',
                    },
                ]
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
                        text: 'Ingame',
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