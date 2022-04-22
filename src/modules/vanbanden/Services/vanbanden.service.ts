import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VanbandenService {

  ApiLoaivb = 'http://localhost:57050/api/QLLoaivb';
  ApiNoiden = "http://localhost:57050/api/QLNoiden";
  ApiVbden = 'http://localhost:57050/api/QLVbden';

  constructor(
    private http: HttpClient,
  ) { }

  // Quản Lý Loại Văn Bản
  getLoaivb(): Observable<any> {
    return this.http.get(this.ApiLoaivb);
  }
  postLoaivb(data: any) {
    return this.http.post(this.ApiLoaivb, data);
  }
  updateLoaivb(data: any) {
    return this.http.put(this.ApiLoaivb, data);
  }
  deleteLoaivb(IdLoaivb:number) {
    return this.http.delete(`${this.ApiLoaivb}/${IdLoaivb}`);
  }

  // Quản Lý Nơi Đến
  getNoiden(): Observable<any> {
    return this.http.get(this.ApiNoiden);
  }
  postNoiden(data: any) {
    return this.http.post(this.ApiNoiden, data);
  }
  updateNoiden(data: any) {
    return this.http.put(this.ApiNoiden, data);
  }
  deleteNoiden(IdNoiden:number) {
    return this.http.delete(`${this.ApiNoiden}/${IdNoiden}`);
  }

  //Quản Lý Văn Bản Đến
  getPheduyet(){
    return this.http.get(this.ApiVbden + '/getTTPD')
  }
  getVbden(): Observable<any> {
    return this.http.get(this.ApiVbden);
  }
  postVbden(data: any) {
    return this.http.post(this.ApiVbden, data);
  }
  updateVbden(data: any) {
    return this.http.put(this.ApiVbden, data);
  }
  deleteVbden(IdVbden: number) {
    return this.http.delete(`${this.ApiVbden}/${IdVbden}`);
  }
}
