import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaocaoService {

  ApiVbden = 'http://localhost:57050/api/QLVbden';

  constructor(
    private http: HttpClient,
  ) { }

  getBcnv() {
    return this.http.get(this.ApiVbden + '/getBcnv')
  }
  getBctp(){
    return this.http.get(this.ApiVbden + '/getBctp')
  }
  getBcbgh(){
    return this.http.get(this.ApiVbden + '/getBcbgh')
  }
  updateVbden(data:any){
    return this.http.put(this.ApiVbden, data)
  }
}
