import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { QLNguoidung } from '@modules/user/models';
import { Observable } from 'rxjs';
import { LoginService } from '../services';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    QlUser: QLNguoidung = new QLNguoidung()

    constructor(
        private ApiLogin: LoginService,
        private router: Router,
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean | UrlTree {
        // if (state.url.includes('manageUser')) {
        //     alert("Khong co quyen truy cap")
        //     return false
        // }
        return true;
        // if (this.ApiLogin.canActivate(this.QlUser.Roles)) {
        //     return true;
        // }
        // return false;

    }
}
