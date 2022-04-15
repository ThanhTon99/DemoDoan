import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import { ChucnangModule } from './chucnang.module';

import * as chucnangContainers from './containers';

export const ROUTES: Routes = [
    {
        path:'qlchucvu',
        canActivate:[],
        component: chucnangContainers.QlChucvuComponent,
        data: {
            title: 'Quản Lý Chức Vụ',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Quản Lý Chức Vụ',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path:'qlnhanvien',
        canActivate:[],
        component: chucnangContainers.QlNhanvienComponent,
        data: {
            title: 'Quản Lý Nhân Viên',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Quản Lý Nhân Viên',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path:'qlphongban',
        canActivate:[],
        component: chucnangContainers.QlPhongbanComponent,
        data: {
            title: 'Quản Lý Phòng Ban',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Quản Lý Phòng Ban',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [ChucnangModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})  
export class ChucnangRoutingModule { }