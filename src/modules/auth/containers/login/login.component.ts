import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@modules/auth/services';
import { SideNavSection } from '@modules/navigation/models';
import { SideNavItem } from '@modules/navigation/models';
@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {

    loginForm !: FormGroup;
    Data: any = [];
    sidenavitems: SideNavItem | undefined;
    sidenavsection: SideNavSection | undefined;
    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router,
        private ApiLogin: LoginService,
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            Username: [''],
            Password: [''],
            Roles: [''],
        })
    }
    login() {
        this.ApiLogin.getUser().subscribe(res => {
            const user = res.find((a: any) => {
                return a.Username === this.loginForm.value.Username && a.Password === this.loginForm.value.Password
            })
            if (user) {
                this.loginForm.reset();
                this.router.navigate(['dashboard'])
            } else {
                alert("Tài Khoản Hoặc Mật Khẩu Không Chính Xác")
            }
        }, () => {
            alert("Something Wrong")
        })
    }
}
