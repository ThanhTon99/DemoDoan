import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  APIurl = "http://localhost:57050/api/notify";
  PhotoUrl = "http://localhost:57050/Photos";
  APIUser = "http://localhost:57050/api/department"

  private messageSource = new BehaviorSubject('Trạng Thái Chờ...');
  currentMessage = this.messageSource.asObservable();

  // SharingData = new Subject();

  constructor(
    private http: HttpClient,
  ) { }

  changeMessage(IdVbden: string) {
    this.messageSource.next(IdVbden);
  }

  //Notify
  getImage(): Observable<any> {
    return this.http.get(this.APIurl + '/getslide')
  }
  getMessage(): Observable<any> {
    return this.http.get(this.APIurl + '/getmessage')
  }
  getNotify(): Observable<any> {
    return this.http.get(this.APIurl).pipe(map((res: any) => {
      return res
    }))
  }
  getNotifyByActivate(): Observable<any> {
    return this.http.get(this.APIurl + '/gettruoc')
  }
  getNotifyByActivate1(): Observable<any> {
    return this.http.get(this.APIurl + '/getsau')
  }
  postNotify(data: any) {
    return this.http.post(this.APIurl, data).pipe(map((res: any) => {
      return res
    }))
  }
  updateNotify(data: any) {
    return this.http.put(this.APIurl, data).pipe(map((res: any) => {
      return res
    }))
  }
  deleteNotify(NotifyId: number) {
    return this.http.delete(`${this.APIurl}/${NotifyId}`).pipe(map((res: any) => {
      return res
    }))
  }
  UploadPhoto(data: any) {
    return this.http.post(this.APIurl + '/Savefile', data)
  }

  // User
  getUser(): Observable<any> {
    return this.http.get(this.APIUser).pipe(map((res: any) => {
      return res
    }))
  }
  postUser(data: any):Observable<any> {
    return this.http.post(this.APIUser, data).pipe(map((res: any) => {
      return res
    }))
  }
  updateUser(data:any) {
    return this.http.put(this.APIUser, data)
  }
  deleteUser(UserId:number) {
    return this.http.delete(`${this.APIUser}/${UserId}`)
  }
  getPermission(){
    return this.http.get(this.APIUser+ '/permission')
  }
  getPermission1(){
    return this.http.get(this.APIUser+ '/permission1')
  }

  // updateNotify(data: any, id: number){
  //   return this.http.put(`${this.APIurl}/${id}`,data).pipe(map((res:any)=>{
  //     return res
  //   }))
  // }
}