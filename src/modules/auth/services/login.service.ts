import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  APIUser = "http://localhost:57050/api/department";

  constructor(
    private http: HttpClient,
  ) { }

  getUser() {
    return this.http.get<any>(this.APIUser);
  }
}
