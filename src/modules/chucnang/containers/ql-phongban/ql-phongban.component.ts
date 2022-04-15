import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { QlPhongban } from '@modules/chucnang/models';
import { QlChucvu } from '@modules/chucnang/models';
import { ChucnangService } from '@modules/chucnang/services';

@Component({
  selector: 'app-ql-phongban',
  templateUrl: './ql-phongban.component.html',
  styleUrls: ['./ql-phongban.component.scss']
})
export class QlPhongbanComponent implements OnInit {

  filter: any;
  Data: any = [];
  DataChucvu : any = [];
  @ViewChild('formValue') formValue !: FormGroup;
  QlPhongbanModel : QlPhongban = new QlPhongban();
  QlChucvuModel : QlChucvu = new QlChucvu();
  showAdd !: boolean;
  showUpdate!: boolean;
  
  constructor(
    private apiUrl : ChucnangService,
    private http: HttpClient,
  ) { }

  ngOnInit():void {
    this.getPhongban();
    this.getChucvu();
  }
  getPhongban(){
    this.apiUrl.getPhongban().subscribe(res =>{
      this.Data = res;
    })
  }
  getChucvu(){
    this.apiUrl.getChucvu().subscribe(res=>{
      this.DataChucvu = res;
    })
  }
  onedit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.QlPhongbanModel = row
  }
  clickAdd(){
    this.formValue.reset()
    this.showAdd = true;
    this.showUpdate = false;
  }
  postPhongban(){
    this.apiUrl.postPhongban(this.QlPhongbanModel).subscribe(res => {
      console.log(res);
      alert("Thêm Mới Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getPhongban()
    }, () => {
      alert("Something Wrong")
    })
  }
  updatePhongban(){
    this.apiUrl.updatePhongban(this.QlPhongbanModel).subscribe(res => {
      console.log(res);
      alert("Sửa Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getPhongban()
    }, () => {
      alert("Something Wrong")
    })
  }
  deletePhongban(row:any){
    this.apiUrl.deletePhongban(row.IdPhongban).subscribe(()=>{
      alert("Xóa Phòng Ban Thành Công");
      this.getPhongban();
    })
  }
}

