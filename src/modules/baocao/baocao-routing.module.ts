import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import { BaocaoModule } from './baocao.module';

import * as baocaoContainer from './containers'

import { BaocaoGuard } from './guards';

export const ROUTES: Routes = [
    {
        path: 'baocaonv',
        canActivate: [BaocaoGuard],
        component: baocaoContainer.BaocaoNvComponent,
        data: {
            title: 'Báo Cáo Của Nhân Viên',
            breadcrumbs: [
                {
                    text: 'Báo Cáo Của BGH',
                    link: '/baocao/baocaobgh',
                },
                {
                    text: 'Báo Cáo Của Trường Phòng',
                    link: '/baocao/baocaotp',
                },
                {
                    text: 'Báo Cáo Của Nhân Viên',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'baocaotp',
        canActivate: [BaocaoGuard],
        component: baocaoContainer.BaocaoTpComponent,
        data: {
            title: 'Báo Cáo Của Trưởng Phòng',
            breadcrumbs: [
                {
                    text: 'Báo Cáo Của BGH',
                    link: '/baocao/baocaobgh',
                },
                {
                    text: 'Báo Cáo Của Trường Phòng',
                    active: true,
                },
                {
                    text: 'Báo Cáo Của Nhân Viên',
                    link: '/baocao/baocaonv',
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'baocaobgh',
        canActivate: [BaocaoGuard],
        component: baocaoContainer.BaocaoBghComponent,
        data: {
            title: 'Báo Cáo Của BGH',
            breadcrumbs: [
                {
                    text: 'Báo Cáo Của BGH',
                    active: true,
                },
                {
                    text: 'Báo Cáo Của Trường Phòng',
                    link: '/baocao/baocaotp',
                },
                {
                    text: 'Báo Cáo Của Nhân Viên',
                    link: '/baocao/baocaonv',
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [BaocaoModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})

export class BaocaoRoutingModule { }