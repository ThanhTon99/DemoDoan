import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ApiUserteam = 'http://localhost:57050/api/Userteam';
  APIUser = "http://localhost:57050/api/department";

  constructor(
    private http: HttpClient,
  ) { }

  // Nhóm Người Dùng
  getUserteam() {
    return this.http.get(this.ApiUserteam);
  }
  updateUserteam(data: any){
    return this.http.put(this.ApiUserteam, data);
  }
  postUserteam(data:any){
    return this.http.post(this.ApiUserteam, data);
  }
  deleteUserteam(UserteamId: number){
    return this.http.delete(`${this.ApiUserteam}/${UserteamId}`);
  }

  //Người Dùng
  getUser() {
    return this.http.get(this.APIUser);
  }
  postUser(data: any) {
    return this.http.post(this.APIUser, data);
  }
  updateUser(data:any) {
    return this.http.put(this.APIUser, data);
  }
  deleteUser(UserId:number) {
    return this.http.delete(`${this.APIUser}/${UserId}`);
  }
  getAdmin(){
    return this.http.get(this.APIUser+ '/rolesAdmin')
  }
  getMember(){
    return this.http.get(this.APIUser+ '/rolesMember')
  }
}
