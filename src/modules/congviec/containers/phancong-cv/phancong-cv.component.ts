import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QlNhanvien } from '@modules/chucnang/models';
import { QLVbden } from '@modules/vanbanden/models';
import { PhancongCv } from '@modules/congviec/models';

import { CongviecService } from '@modules/congviec/services';
import { ApiService } from '@app/Service/api.service';

@Component({
  selector: 'app-phancong-cv',
  templateUrl: './phancong-cv.component.html',
  styleUrls: ['./phancong-cv.component.scss']
})
export class PhancongCvComponent implements OnInit {

  filter: any;
  Data: any = [];
  DataNhanvien: any = [];
  DataPhancong: any = [];
  showAdd !: boolean;
  showUpdate!: boolean;
  message: any;
  @ViewChild('formValue') formValue !: FormGroup;
  QlNhanvienModel: QlNhanvien = new QlNhanvien();
  QlVbdenModel: QLVbden = new QLVbden();
  PhancongCvModle: PhancongCv = new PhancongCv();

  constructor(
    private apiUrl: CongviecService,
    private api :ApiService,
  ) { }

  ngOnInit(): void {
     this.getPhancongCv();
     this.getNhanvien();
    // this.getVbden();
    this.getstatusVbden();
    this.api.currentMessage.subscribe(message => this.message = message)
  }
  getstatusVbden(){
    this.apiUrl.getstatusVbden().subscribe(res=>{
      this.Data = res;
    })
  }
  getPhancongCv() {
    this.apiUrl.getPhancongCv().subscribe(res => {
      this.DataPhancong = res
    })
  }
  getNhanvien() {
    this.apiUrl.getNhanvien().subscribe(res => {
      this.DataNhanvien = res
    })
  }
  getVbden() {
    this.apiUrl.getVbden().subscribe(res => {
      this.Data = res
    })
  }
  onedit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.QlVbdenModel = row;
    this.PhancongCvModle = row;
  }
  // clickAdd() {
  //   this.formValue.reset()
  //   this.showAdd = true;
  //   this.showUpdate = false;
  // }
  // postPhancongCv() {
  //   this.apiUrl.postPhancongCv(this.QlVbdenModel).subscribe(res => {
  //     console.log(res);
  //     alert("Thêm Mới Thành Công")
  //     let ref = document.getElementById('cancel')
  //     ref?.click()
  //     this.getPhancongCv()
  //   }, () => {
  //     alert("Something Wrong")
  //   })
  // }
  // updatePhancongCv() {
  //   this.apiUrl.updatePhancongCv(this.QlVbdenModel).subscribe(res => {
  //     console.log(res);
  //     alert("Sửa Thành Công")
  //     let ref = document.getElementById('cancel')
  //     ref?.click()
  //     // this.getPhancongCv()
  //   }, () => {
  //     alert("Something Wrong")
  //   })
  // }
  updateNv() {
    this.QlVbdenModel.TrangthaiPhancong = true;
    this.QlVbdenModel.TrangthaiXuly = false;
    this.QlVbdenModel.MessageCv = 'Đã Phân Công';
    this.apiUrl.updateVbden(this.QlVbdenModel).subscribe(res => {
        console.log(res);
      alert("Đã Phân Công");
      let ref = document.getElementById('cancel1');
      ref?.click();
      this.getstatusVbden();
    }, () => {
      alert("Something Wrong")
    })
  }
  updateGhichu() {
    this.apiUrl.updatePhancongCv(this.PhancongCvModle).subscribe(res => {
      console.log(res);
      alert("Sửa Thành Công");
      let ref = document.getElementById('cancel1');
      ref?.click();
      //this.getPhancongCv();
    }, () => {
      alert("Something Wrong")
    })
  }
  deletePhancongCv(row: any) {
    this.apiUrl.deletePhancongCv(row.IdCongviec).subscribe(() => {
      alert("Xóa Thành Công");
      this.getPhancongCv();
    })
  }

}
