import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import { UserModule } from "./user.module";

import * as userContainers from './containers';

import { UserGuard } from './guards';

export const ROUTES: Routes = [
    {
        path: 'qlnguoidung',
        canActivate: [UserGuard],
        component: userContainers.QlNguoidungComponent,
        data: {
            title: 'Quản Lý Người Dùng',
            breadcrumbs: [
                {
                    text: 'Quản Lý Người Dùng',
                    active: true,
                },
                {
                    text: 'Quản Lý Nhóm Người Dùng',
                    link :'/user/qlnhomnguoidung',
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'qlnhomnguoidung',
        canActivate: [UserGuard],
        component: userContainers.QlNhomnguoidungComponent,
        data: {
            title: 'Quản Lý Nhóm Người Dùng',
            breadcrumbs: [
                {
                    text: 'Quản Lý Người Dùng',
                    link: '/user/qlnguoidung',
                },
                {
                    text: 'Quản Lý Nhóm Người Dùng',
                    active: true,
                },
            ],
        } as SBRouteData,
    },


];
@NgModule({
    imports: [UserModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UserRoutingModule { }