import { Component, OnInit } from '@angular/core';
import { BaocaoService } from '@modules/baocao/services';
import { QLVbden } from '@modules/vanbanden/models';

@Component({
  selector: 'app-baocao-bgh',
  templateUrl: './baocao-bgh.component.html',
  styleUrls: ['./baocao-bgh.component.scss']
})
export class BaocaoBghComponent implements OnInit {

  filter: any;
  Data: any = [];
  QlVbdenModel: QLVbden = new QLVbden()
  constructor(
    private apiUrl: BaocaoService,
  ) { }

  ngOnInit() {
    this.getBcbgh();
  }
  getBcbgh(){
    this.apiUrl.getBcbgh().subscribe(res=>{
      this.Data = res
    })
  }
  Bghxacnhan(row:any){
    this.QlVbdenModel = row;
    this.QlVbdenModel.BcBgh = true;
    this.QlVbdenModel.MessageBaocaobgh = 'Hoàn Tất Báo Cáo';
    this.apiUrl.updateVbden(this.QlVbdenModel).subscribe(()=>{
      alert("Xác Nhận Thành Công");
      this.getBcbgh();
    })
  }
  khongxacnhan(row:any){
    this.QlVbdenModel = row;
    this.QlVbdenModel.BcBgh = false;
    this.QlVbdenModel.BcTruongphong = false;
    this.QlVbdenModel.MessageBaocaobgh = '';
    this.QlVbdenModel.MessageBaocaonv = '';
    this.QlVbdenModel.MessageBaocaotp = '';
    this.apiUrl.updateVbden(this.QlVbdenModel).subscribe(()=>{
      alert("Không Xác Nhận");
      this.getBcbgh();
    })
  }
}
