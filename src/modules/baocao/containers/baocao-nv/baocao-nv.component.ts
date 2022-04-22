import { Component, OnInit } from '@angular/core';
import { QLVbden } from '@modules/vanbanden/models';
import { BaocaoService } from '@modules/baocao/services';

@Component({
  selector: 'app-baocao-nv',
  templateUrl: './baocao-nv.component.html',
  styleUrls: ['./baocao-nv.component.scss']
})
export class BaocaoNvComponent implements OnInit {

  filter: any;
  Data: any = [];
  QlVbdenModel: QLVbden = new QLVbden()

  constructor(
    private apiUrl: BaocaoService,
  ) { }

  ngOnInit() {
    this.getBcnv();
  }
  getBcnv() {
    this.apiUrl.getBcnv().subscribe(res => {
      this.Data = res;
    })
  }
  baocaonv(row:any){
    this.QlVbdenModel = row
    this.QlVbdenModel.BcTruongphong = true;
    this.QlVbdenModel.MessageBaocaonv = 'Nhân Viên Báo Cáo';
    this.apiUrl.updateVbden(this.QlVbdenModel).subscribe(()=>{
      alert("Báo Cáo Thành Công");
      this.getBcnv();
    })
  }
}
