import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@modules/auth/guards';
import { SBRouteData } from '@modules/navigation/models';

import { CongviecModule } from './congviec.module';

import * as congviecContainers from './containers';

import { CongviecGuard } from './guards';

export const ROUTES: Routes = [
    {
        path: 'phancongcv',
        canActivate: [CongviecGuard],
        component: congviecContainers.PhancongCvComponent,
        data: {
            title: 'Phân Công Công Việc',
            breadcrumbs: [
                {
                    
                    text: 'Xử Lý Công Việc',
                    link: '/vanbanden/xulyvbden',
                },
                {
                    text: 'Phân Công Công Việc',
                    active: true,
                },
                {
                    text: 'Quản Lý Công Việc',
                    link: '/congviec/qlcv',
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'qlcv',
        canActivate: [CongviecGuard],
        component: congviecContainers.QlCvComponent,
        data: {
            title: 'Quản Lý Công Việc',
            breadcrumbs: [
                {
                    text: 'Xử Lý Văn Bản Đến',
                    link: '/vanbanden/xulyvbden',
                },
                {
                    text: 'Quản Lý Công Việc',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'qlbaocaocv',
        canActivate: [CongviecGuard],
        component: congviecContainers.QlbaocaoCvComponent,
        data: {
            title: 'Quản Lý Báo Cáo Công Việc',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Quản Lý Báo Cáo Công Việc',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'lscv',
        canActivate: [CongviecGuard],
        component: congviecContainers.LsCvComponent,
        data: {
            title: 'Quản Lý Lịch Sử Công Việc',
            breadcrumbs: [
                {
                    text: 'Quản Lý Văn Bản Đến',
                    link: '/vanbanden/qlvbden',
                },
                {
                    text: 'Lịch sử công việc',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [CongviecModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CongviecRoutingModule { }