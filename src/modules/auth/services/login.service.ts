import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QLNguoidung } from '@modules/user/models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginForm !: FormGroup;

  Roles: any = ['']
  Role = ['Admin']
  APIUser = "http://localhost:57050/api/department";
  QlUser: QLNguoidung = new QLNguoidung()
  role: any;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  getUser() {
    return this.http.get<any>(this.APIUser);
  }
  getRoleAdmin() {
    return this.http.get<any>(this.APIUser + '/roleAdmin')
  }

  canActivate(url: any) {

    this.getRoleAdmin().subscribe(res => {
      this.Roles = res;
    })

    const page = url.toString().substr(1);
    // console.log('canActivate', this.Roles, url);
    if (this.Role.includes(page)) {
      return true
    }
    console.log('Ban khong the vao trang: ' + this.Roles);
    return false;
  }
}
