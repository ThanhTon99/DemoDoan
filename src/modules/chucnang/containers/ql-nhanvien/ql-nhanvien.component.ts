import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QlChucvu } from '@modules/chucnang/models';
import { ChucnangService } from '@modules/chucnang/services';
import { QlNhanvien}from '@modules/chucnang/models';

@Component({
  selector: 'app-ql-nhanvien',
  templateUrl: './ql-nhanvien.component.html',
  styleUrls: ['./ql-nhanvien.component.scss']
})
export class QlNhanvienComponent implements OnInit {

  filter: any;
  Data: any = [];
  DataChucvu : any = [];
  showAdd !: boolean;
  showUpdate!: boolean;
  @ViewChild('formValue') formValue !: FormGroup;
  QlNhanvienModel: QlNhanvien = new QlNhanvien();
  QlChucvuModel : QlChucvu = new QlChucvu();

  constructor(
    private apiUrl : ChucnangService
  ) { }

  ngOnInit():void {
    this.getChucvu();
    this.getNhanvien();
  }

  getChucvu(){
    this.apiUrl.getChucvu().subscribe(res=>{
      this.DataChucvu = res;
    })
  }
  getNhanvien(){
    this.apiUrl.getNhanvien().subscribe(res=>{
      this.Data = res;
    })
  }
  onedit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.QlNhanvienModel = row
  }
  clickAdd(){
    this.formValue.reset()
    this.showAdd = true;
    this.showUpdate = false;
  }
  postNhanvien(){
    this.apiUrl.postNhanvien(this.QlNhanvienModel).subscribe(res => {
      console.log(res);
      alert("Thêm Mới Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getNhanvien()
    }, () => {
      alert("Something Wrong")
    })
  }
  updateNhanvien(){
    this.apiUrl.updataNhanvien(this.QlNhanvienModel).subscribe(res => {
      console.log(res);
      alert("Sửa Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getNhanvien()
    }, () => {
      alert("Something Wrong")
    })
  }
  deleteNhanvien(row:any){
    this.apiUrl.deletaNhanvien(row.IdNhanvien).subscribe(()=>{
      alert("Xóa Thành Công");
      this.getNhanvien();
    })
  }
}
