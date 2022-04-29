import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import { VanbandiModule } from './vanbandi.module';

import * as vanbandiContainer from './containers'

export const ROUTES: Routes = [
    {
        path: 'qlnoidi',
        canActivate: [],
        component: vanbandiContainer.QlNoidiComponent,
        data: {
            title: 'Quản Lý Nơi Đi',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Quản Lý Nơi Đi',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'qlvbdi',
        canActivate: [],
        component: vanbandiContainer.QlVbdiComponent,
        data: {
            title: 'Quản Lý Văn Bản Đi',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Quản Lý Văn Bản Đi',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
]
@NgModule({
    imports: [VanbandiModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class VanbandiRoutingModule { }