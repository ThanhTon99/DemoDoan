import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QLNguoidung } from '@modules/user/models';
import { UserService } from '@modules/user/services';
import { ChucnangService } from '@modules/chucnang/services';

@Component({
  selector: 'app-ql-nguoidung',
  templateUrl: './ql-nguoidung.component.html',
  styleUrls: ['./ql-nguoidung.component.scss']
})
export class QlNguoidungComponent implements OnInit {

  filter: any;
  Data: any = [];
  DataUserteam : any = [];
  DataTenNguoidung : any;
  DataChucvu: any;
  DataPhongban: any;
  @ViewChild('formValue') formValue !: FormGroup;
  showAdd !: boolean;
  showUpdate!: boolean;
  QlUser : QLNguoidung = new QLNguoidung()

  constructor(
    private ApiUser : UserService,
    private ApiChucnang : ChucnangService,
  ) { }

  ngOnInit() {
    this.getUser();
    this.getUserteam();
    this.getNhanvien();
    this.getChucvu();
    this.getPhongban();
  }
  getNhanvien(){
    this.ApiChucnang.getNhanvien().subscribe(res=>{
      this.DataTenNguoidung = res;
    })
  }
  getChucvu(){
    this.ApiChucnang.getChucvu().subscribe(res=>{
      this.DataChucvu = res;
    })
  }
  getPhongban(){
    this.ApiChucnang.getPhongban().subscribe(res=>{
      this.DataPhongban = res;
    })
  }
  getUser(){
    this.ApiUser.getUser().subscribe(res=>{
      this.Data = res;      
    })
  }
  getUserteam(){
    this.ApiUser.getUserteam().subscribe(res=>{
      this.DataUserteam = res;
    })
  }
  clickAdd(){
    this.formValue.reset()
    this.showAdd = true;
    this.showUpdate = false;
  }
  onedit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.QlUser = row
  }
  deleteUser(row:any){
    this.ApiUser.deleteUser(row.UserId).subscribe(()=>{
      alert("Xóa Thành Công");
      this.getUser();
    })
  }
  postUser(){
    this.ApiUser.postUser(this.QlUser).subscribe(res => {
      console.log(res);
      alert("Thêm Mới Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getUser()
    }, () => {
      alert("Something Wrong")
    })
  }
  updateUser(){
    this.ApiUser.updateUser(this.QlUser).subscribe(res => {
      console.log(res);
      alert("Sửa Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getUser()
    }, () => {
      alert("Something Wrong")
    })
  }
}
