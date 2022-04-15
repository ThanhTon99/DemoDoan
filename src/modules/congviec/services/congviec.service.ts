import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CongviecService {

  ApiPhancongCv = 'http://localhost:57050/api/PhancongCv';
  ApiNhanvien = "http://localhost:57050/api/QLNhanvien";
  ApiVbden = 'http://localhost:57050/api/QLVbden';

constructor(
  private http: HttpClient,
) { }

  //Phân Công Công Việc
  getPhancongCv() {
    return this.http.get(this.ApiPhancongCv);
  }
  postPhancongCv(data: any) {
    return this.http.post(this.ApiPhancongCv, data);
  }
  updatePhancongCv(data: any) {
    return this.http.put(this.ApiPhancongCv, data);
  }
  deletePhancongCv(idPhancongCv:number) {
    return this.http.delete(`${this.ApiPhancongCv}/${idPhancongCv}`);
  }
  getVbden(){
    return this.http.get(this.ApiVbden);
  }
  getNhanvien(){
    return this.http.get(this.ApiNhanvien);
  }
  updateVbden(data: any) {
    return this.http.put(this.ApiVbden, data);
  }
}
