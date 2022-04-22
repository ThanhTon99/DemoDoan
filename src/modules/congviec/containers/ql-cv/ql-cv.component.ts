import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CongviecService } from '@modules/congviec/services';
import { QLVbden } from '@modules/vanbanden/models';

@Component({
  selector: 'app-ql-cv',
  templateUrl: './ql-cv.component.html',
  styleUrls: ['./ql-cv.component.scss']
})
export class QlCvComponent implements OnInit {

  filter: any;
  Data: any = [];
  QlVbdenModel: QLVbden = new QLVbden()
  @ViewChild('formValue') formValue !: FormGroup;

  constructor(
    private apiUrl: CongviecService,
  ) { }

  ngOnInit() {
    this.getTTPC();
  }
  getTTPC(){
    this.apiUrl.getTTPC().subscribe(res=>{
      this.Data = res;
     // console.log(res);
    })
  }
  thuchienCv(row:any){
    this.QlVbdenModel = row
    this.QlVbdenModel.MessageCv = 'Đã Hoàn Thành';
    this.QlVbdenModel.TrangthaiXuly = false;
    this.QlVbdenModel.TrangthaiPhancong = false;
    this.QlVbdenModel.BcNhanvien = true;
    // this.QlVbdenModel.MessageBaocaonv = ''
    this.apiUrl.updateVbden(this.QlVbdenModel).subscribe(() => {
      alert("Thực Hiện Công Việc Thành Công")
      this.getTTPC();
    })
  }
  huyCv(row:any){
    this.QlVbdenModel = row
    this.QlVbdenModel.TrangthaiXuly = false;
    this.QlVbdenModel.TrangthaiPhancong = false;
    this.QlVbdenModel.MessageCv = '';
    this.apiUrl.updateVbden(this.QlVbdenModel).subscribe(() => {
      alert("Hủy Thành Công");
      this.getTTPC();
    })
  }
}
