import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@modules/auth/services';
import { SideNavSection } from '@modules/navigation/models';
import { SideNavItem } from '@modules/navigation/models';
import { BaocaoGuard } from '@modules/baocao/guards';
import { QLNguoidung } from '@modules/user/models';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {

    login_success = false;
    loginForm !: FormGroup;
    Data: any = [];
    Roles = ['']
    sidenavitems: SideNavItem | undefined;
    sidenavsection: SideNavSection | undefined;
    QlUser : QLNguoidung = new QLNguoidung()
    role : any = [];
    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router,
        private ApiLogin: LoginService,
        private baocaoGuard : BaocaoGuard,

    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            Username: [''],
            Password: [''],
        })
        this.ApiLogin.getRoleAdmin().subscribe(res=>{
            this.Data = res;
        })
    }
    login() {
        this.ApiLogin.getUser().subscribe(res => {
            const Admin = res.find((a: any) => {
                return a.Username === this.loginForm.value.Username && a.Password === this.loginForm.value.Password 
                && a.Roles == 'Admin'
            })
            const Manager = res.find((a: any) => {
                return a.Username === this.loginForm.value.Username && a.Password === this.loginForm.value.Password 
                && a.Roles == 'Manager'
            })
            const Staff = res.find((a: any) => {
                return a.Username === this.loginForm.value.Username && a.Password === this.loginForm.value.Password 
                && a.Roles == 'Staff'
            })
            const Member = res.find((a: any) => {
                return a.Username === this.loginForm.value.Username && a.Password === this.loginForm.value.Password 
                && a.Roles == 'Member'
            })

            if (Admin) {

                this.loginForm.reset();
                console.log(Admin);
                this.router.navigate(['dashboard']);
                this.login_success=true;
            } else if (Manager){
                this.loginForm.reset();
                this.router.navigate(['dashboard']);
            }
            else if (Staff){
                this.loginForm.reset();
                this.router.navigate(['dashboard']);
            }
            else if (Member){
                this.loginForm.reset();
                this.router.navigate(['dashboard']);
            }
             else {
                alert("Tài Khoản Hoặc Mật Khẩu Không Chính Xác")
            }
        }, () => {
            alert("Something Wrong")
        })
    }
    isAuthenticated(){
        // return true if the user enter correct user name and password
        return this.login_success
      }
}
