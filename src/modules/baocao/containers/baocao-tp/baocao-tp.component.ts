import { Component, OnInit } from '@angular/core';
import { BaocaoService } from '@modules/baocao/services';
import { QLVbden } from '@modules/vanbanden/models';

@Component({
  selector: 'app-baocao-tp',
  templateUrl: './baocao-tp.component.html',
  styleUrls: ['./baocao-tp.component.scss']
})
export class BaocaoTpComponent implements OnInit {

  filter: any;
  Data: any = [];
  QlVbdenModel: QLVbden = new QLVbden()
  constructor(
    private apiUrl: BaocaoService,
  ) { }

  ngOnInit() {
    this.getBctp();
  }
  getBctp(){
    this.apiUrl.getBctp().subscribe(res=>{
      this.Data = res
    })
  }
  baocaotp(row:any){
    this.QlVbdenModel = row
    this.QlVbdenModel.BcBgh = true;
    this.QlVbdenModel.MessageBaocaotp = 'Trưởng Phòng Báo Cáo';
    this.apiUrl.updateVbden(this.QlVbdenModel).subscribe(()=>{
      alert("Báo Cáo Thành Công");
      this.getBctp();
    })
  }
  khongxacnhan(row:any){
    this.QlVbdenModel = row
    this.QlVbdenModel.BcBgh = false;
    this.QlVbdenModel.BcTruongphong = false;
    this.QlVbdenModel.MessageBaocaotp = '';
    this.QlVbdenModel.MessageBaocaonv = '';
    this.apiUrl.updateVbden(this.QlVbdenModel).subscribe(()=>{
      alert("Không Chấp Nhận Báo Cáo Từ Nhân Viên");
      this.getBctp();
    })
  }

}
