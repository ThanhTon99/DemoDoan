import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import { VanbandenModule } from './vanbanden.module';

import * as vanbandenContainers from './containers';

export const ROUTES: Routes = [
    {
        path: 'qlloaivb',
        canActivate: [],
        component: vanbandenContainers.QlLoaivbComponent,
        data: {
            title: 'Quản Lý Loại Văn Bản',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Quản Lý Loại Văn Bản',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'qlnoiden',
        canActivate: [],
        component: vanbandenContainers.QlNoidenComponent,
        data: {
            title: 'Quản Lý Nơi Đến',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Quản Lý Nơi Đến',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'qlvbden',
        canActivate: [],
        component: vanbandenContainers.QlVbdenComponent,
        data: {
            title: 'Quản Lý Văn Bản Đến',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Quản Lý Văn Bản Đến',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'xulyvbden',
        canActivate: [],
        component: vanbandenContainers.XulyVbdenComponent,
        data: {
            title: 'Xử Lý Văn Bản Đến',
            breadcrumbs: [
                {
                    text: 'Phân Công Công Việc',
                    link: '/congviec/phancongcv',
                },
                {
                    text: 'Xử Lý Văn Bản Đến',
                    active: true,
                },
            ],
        } as SBRouteData,
    },

];

@NgModule({
    imports: [VanbandenModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class VanbandenRoutingModule { }