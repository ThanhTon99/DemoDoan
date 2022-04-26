import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '@modules/auth/services';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class BaocaoGuard implements CanActivate {
  //baocaonv, baocaotp, baocaobgh
  Roles:any
  loginForm !: FormGroup;
  manager  = false; 
  member = false ;
  staff  = true;
  constructor(
    private ApiLogin: LoginService,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.manager = state.url.includes('baocaobgh') 
      this.member = state.url.includes('baocaonv')  
      let Staff = state.url.includes('baocaotp') 

      // if (this.member) {
      //   alert("Khong co quyen truy cap")
      //   return false
      // }
      // if (this.manager) {
      //   alert("Khong co quyen truy cap")
      //   return false;
      // }
      // if (Staff) {
      //   alert("Khong co quyen truy cap")
      //   return false;
      // }
    return true;
  }

}
