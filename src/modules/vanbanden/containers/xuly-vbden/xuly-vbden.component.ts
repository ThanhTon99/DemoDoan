import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QLVbden } from '@modules/vanbanden/models';
import { VanbandenService } from '@modules/vanbanden/Services';
import { ApiService } from '@app/Service/api.service';

@Component({
  selector: 'app-xuly-vbden',
  templateUrl: './xuly-vbden.component.html',
  styleUrls: ['./xuly-vbden.component.scss']
})
export class XulyVbdenComponent implements OnInit {

  filter: any;
  Data: any = [];
  DataVbden: any = [];
  message: any;
  @ViewChild('formValue') formValue !: FormGroup;
  QlVbdenModel: QLVbden = new QLVbden()

  constructor(
    private apiUrl: VanbandenService,
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.getXulyVbden();
    this.api.currentMessage.subscribe(message => this.message = message)
  }
  Pheduyet(event: any){
    event.target.disabled = true; 
    this.QlVbdenModel.MessageXuly = 'Đã Phê Duyệt'
    this.QlVbdenModel.MessageCv = 'Đã Phê Duyệt'
    this.QlVbdenModel.TrangthaiXuly = true;
    this.QlVbdenModel.TenNhanvien='';
    this.QlVbdenModel.Note ='';
    this.apiUrl.updateVbden(this.QlVbdenModel).subscribe(() => {
      alert("Phê Duyệt Văn Bản Thành Công")
    })
  }
  NotPheDuyet(row:any){
    this.QlVbdenModel = row
    this.QlVbdenModel.TrangthaiXuly = false;
    this.QlVbdenModel.TrangthaiPheduyet = false;
    this.QlVbdenModel.BcNhanvien = false;
    this.QlVbdenModel.MessageCv = '';
    this.apiUrl.updateVbden(this.QlVbdenModel).subscribe(() => {
      alert("Văn Bản Không Được Phê Duyệt")
      this.getXulyVbden();
    })
  }
  getXulyVbden() {
    this.apiUrl.getPheduyet().subscribe(res => {
      this.Data = res;
    })
  }
  handle(row: any) {
    this.QlVbdenModel = row
  }
  DuyetVbden() {
    this.apiUrl.updateVbden(this.QlVbdenModel).subscribe(res => {
      console.log(res);
      alert("Sửa Thành Công")
      let ref = document.getElementById('close')
      ref?.click()
      this.getXulyVbden();
    })
  }

  KduyetVbden() {
    this.QlVbdenModel.TrangthaiXuly = false;
  //  this.QlVbdenModel.TrangthaiPheduyet = false;
    this.apiUrl.updateVbden(this.QlVbdenModel).subscribe(res => {
      console.log(res);
      alert("Xác Nhận")
      let ref = document.getElementById('close')
      ref?.click()
      this.getXulyVbden();
    })
  }

}
