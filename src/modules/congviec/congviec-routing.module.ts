import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import { CongviecModule } from './congviec.module';

import * as congviecContainers from './containers';

export const ROUTES: Routes = [
    {
        path: 'phancongcv',
        canActivate: [],
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
            ],
        } as SBRouteData,
    },
    {
        path: 'qlcv',
        canActivate: [],
        component: congviecContainers.QlCvComponent,
        data: {
            title: 'Quản Lý Công Việc',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
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
        canActivate: [],
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
];

@NgModule({
    imports: [CongviecModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CongviecRoutingModule { }