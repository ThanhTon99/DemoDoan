import { NgIf } from '@angular/common';
import { AuthGuard } from '@modules/auth/guards';
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
               // icon:'ban',
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
                icon: 'brain',
                text: 'Chức Năng',
                submenu: [
                    {
                        icon:'circle',
                        text: 'Quản Lý Phòng Ban',
                        link:'/chucnang/qlphongban',
                    },
                    {
                        icon:'circle',
                        text: 'Quản Lý Nhân Viên',
                        link:'/chucnang/qlnhanvien',
                    },
                    {
                        icon:'circle',
                        text:'Quản Lý Chức Vụ',
                        link: '/chucnang/qlchucvu',
                    },
                ],
            },
            {   
                icon:'user-friends',
                text: 'Người Dùng',
                submenu: [
                    {
                        icon:'circle',
                        text: 'Quản Lý Người Dùng',
                        link:'/user/qlnguoidung',
                        
                    },
                    {
                        icon:'circle',
                        text: 'Quản Lý Nhóm Người Dùng',
                        link:'/user/qlnhomnguoidung',
                    },
                ],
            },
            {   
                icon:'paper-plane',
                text: 'Văn Bản',
                submenu: [
                    {
                        icon:'circle',
                        text: 'Quản Lý Loại Văn Bản',
                        link:'/vanbanden/qlloaivb',
                    },
                    {
                        icon:'circle',
                        text: 'Quản Lý Nơi Đến',
                        link:'/vanbanden/qlnoiden',
                    },
                    {
                        icon:'circle',
                        text:'Quản Lý Văn Bản Đến',
                        link: '/vanbanden/qlvbden',
                    },
                    {
                        icon:'circle',
                        text:'Xử Lý Văn Bản Đến',
                        link: '/vanbanden/xulyvbden',
                    },
                ],
            },
            {
                icon:'pager',
                text: 'Công Việc',
                submenu: [
                    {
                        icon:'circle',
                        text: 'Phân Công Công Việc',
                        link:'/congviec/phancongcv',
                    },
                    {
                        icon:'circle',
                        text: 'Quản Lý Công Việc',
                        link:'/congviec/qlcv',
                    },
                    {
                        icon:'circle',
                        text:'Quản Lý Báo Cáo Công Việc',
                        link: '/congviec/qlbaocaocv',
                    },
                    {
                        icon:'circle',
                        text:'Lịch Sử Công Việc',
                        link: '/congviec/lscv',
                    },
                ],
            },
            {
                icon:'feather',
                text: 'Báo Cáo Xử Lý',
                submenu: [
                    {
                        icon:'circle',
                        text: 'Theo Dõi Văn Bản Quá Hạn',
                        link:'#',
                    },
                    {
                        icon:'circle',
                        text: 'Thiết Lập Thời Gian Xử Lý',
                        link:'#',
                    },
                    {
                        icon:'circle',
                        text: 'Báo Cáo Văn Bản Đến Của Nhân Viên',
                        link:'/baocao/baocaonv',
                    },
                    {
                        icon:'circle',
                        text: 'Báo Cáo Văn Bản Đến Của Trưởng Phòng',
                        link:'/baocao/baocaotp',
                    },
                    {
                        icon:'circle',
                        text: 'Báo Cáo Văn Bản Đến Của BGH',
                        link:'/baocao/baocaobgh',
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
