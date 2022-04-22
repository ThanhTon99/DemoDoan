import { Component, OnInit } from '@angular/core';
import { CongviecService } from '@modules/congviec/services';
import { QLVbden } from '@modules/vanbanden/models';

@Component({
  selector: 'app-ls-cv',
  templateUrl: './ls-cv.component.html',
  styleUrls: ['./ls-cv.component.scss']
})
export class LsCvComponent implements OnInit {

  filter: any;
  Data: any = [];
  QlVbdenModel: QLVbden = new QLVbden()

  constructor(
    private apiUrl: CongviecService,
  ) { }

  ngOnInit() {
    this.getsave();
  }
  getsave(){
    this.apiUrl.getSave().subscribe(res=>{
      this.Data = res;
    })
  }
  undo(row:any){
    this.QlVbdenModel = row
    this.QlVbdenModel.Save = false;
    this.apiUrl.updateVbden(this.QlVbdenModel).subscribe(() => {
      alert("Undo Thành Công")
      this.getsave();
    })
  }
}
