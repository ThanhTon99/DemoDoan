import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@modules/auth/guards';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/auth/login',
    },
    {
        path: 'charts',
        loadChildren: () =>
            import('modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'chucnang',
        loadChildren: () =>
            import('modules/chucnang/chucnang-routing.module').then(m => m.ChucnangRoutingModule),
    },
    {
        path: 'vanbanden',
        loadChildren: () =>
            import('modules/vanbanden/vanbanden-routing.module').then(m => m.VanbandenRoutingModule),
    },
    {
        path: 'vanbandi',
        loadChildren: () =>
            import('modules/vanbandi/vanbandi-routing.module').then(m => m.VanbandiRoutingModule),
    },
    {
        path: 'congviec',
        loadChildren: () =>
            import('modules/congviec/congviec-routing.module').then(m => m.CongviecRoutingModule),
    },
    {
        path: 'baocao',
        loadChildren: () =>
            import('modules/baocao/baocao-routing.module').then(m => m.BaocaoRoutingModule),
    },
    {
        path: 'user',
        loadChildren: () =>
            import('modules/user/user-routing.module').then(m => m.UserRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: 'tables',
        loadChildren: () =>
            import('modules/tables/tables-routing.module').then(m => m.TablesRoutingModule),
    },
    {
        path: 'version',
        loadChildren: () =>
            import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
        
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
