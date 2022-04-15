import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChucnangService {

  ApiPhongban = "http://localhost:57050/api/QLPhongban";
  ApiChucvu = "http://localhost:57050/api/QLChucvu";
  ApiNhanvien = "http://localhost:57050/api/QLNhanvien";

  constructor(
    private http: HttpClient,
  ) { }

  // Quản Lý Phòng Ban
  getPhongban(): Observable<any> {
    return this.http.get(this.ApiPhongban);
  }
  postPhongban(data: any) {
    return this.http.post(this.ApiPhongban, data);
  }
  updatePhongban(data: any) {
    return this.http.put(this.ApiPhongban, data);
  }
  deletePhongban(idPhongban:number) {
    return this.http.delete(`${this.ApiPhongban}/${idPhongban}`);
  }

  // Quản Lý Chức Vụ
  getChucvu(): Observable<any>{
    return this.http.get(this.ApiChucvu);
  }
  postChucvu(data:any){
    return this.http.post(this.ApiChucvu, data);
  }
  updataChucvu(data:any){
    return this.http.put(this.ApiChucvu, data);
  }
  deletaChucvu(IdChucvu:number){
    return this.http.delete(`${this.ApiChucvu}/${IdChucvu}`)
  }

  // Quản Lý Nhân Viên
  getNhanvien(): Observable<any>{
    return this.http.get(this.ApiNhanvien);
  }
  postNhanvien(data:any){
    return this.http.post(this.ApiNhanvien, data);
  }
  updataNhanvien(data:any){
    return this.http.put(this.ApiNhanvien, data);
  }
  deletaNhanvien(IdNhanvien:number){
    return this.http.delete(`${this.ApiNhanvien}/${IdNhanvien}`)
  }
}
