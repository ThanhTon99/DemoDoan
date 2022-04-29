/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDashboardComponent } from '@modules/navigation/layouts';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { AuthModule } from './auth.module';

/* Containers */
import * as authContainers from './containers';

/* Guards */
import * as authGuards from './guards';
import { AuthGuard } from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
    },
    {
        path: 'login',
        canActivate: [AuthGuard],
        component: authContainers.LoginComponent,
        data: {
            title: 'Pages Login - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'register',
        canActivate: [AuthGuard],
        component: authContainers.RegisterComponent,
        data: {
            title: 'Pages Register - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'forgot-password',
        canActivate: [AuthGuard],
        component: authContainers.ForgotPasswordComponent,
        data: {
            title: 'Pages Forgot Password - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Forgot Password',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path:'manageUser',      
        data:{
            title: 'Pages Manage User',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'ManageUser',
                    active: true,
                },
            ],
        } as SBRouteData,            
        canActivate: [AuthGuard],
        component: authContainers.MangeUserComponent,
    },
];

@NgModule({
    imports: [AuthModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
    providers:[LayoutDashboardComponent]
})
export class AuthRoutingModule {}
