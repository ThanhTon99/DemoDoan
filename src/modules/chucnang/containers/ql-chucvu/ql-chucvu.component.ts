import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { QlChucvu } from '@modules/chucnang/models';
import {ChucnangService} from '@modules/chucnang/services';

@Component({
  selector: 'app-ql-chucvu',
  templateUrl: './ql-chucvu.component.html',
  styleUrls: ['./ql-chucvu.component.scss']
})
export class QlChucvuComponent implements OnInit {

  filter: any;
  Data: any = [];
  @ViewChild('formValue') formValue !: FormGroup;
  showAdd !: boolean;
  showUpdate!: boolean;
  QlChucvuModel: QlChucvu = new QlChucvu();

  constructor(
    private apiUrl: ChucnangService,
  ) { }

  ngOnInit() {
    this.getChucvu();
  }
  getChucvu(){
    this.apiUrl.getChucvu().subscribe(res =>{
      this.Data = res;
    })
  }
  onedit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.QlChucvuModel = row
  }
  clickAdd(){
    this.formValue.reset()
    this.showAdd = true;
    this.showUpdate = false;
  }
  postChucvu(){
    this.apiUrl.postChucvu(this.QlChucvuModel).subscribe(res => {
      console.log(res);
      alert("Thêm Mới Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getChucvu()
    }, () => {
      alert("Something Wrong")
    })
  }
  updateChucvu(){
    this.apiUrl.updataChucvu(this.QlChucvuModel).subscribe(res => {
      console.log(res);
      alert("Sửa Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getChucvu()
    }, () => {
      alert("Something Wrong")
    })
  }
  deleteChucvu(row:any){
    this.apiUrl.deletaChucvu(row.IdChucvu).subscribe(()=>{
      alert("Xóa Thành Công");
      this.getChucvu();
    })
  }
}
