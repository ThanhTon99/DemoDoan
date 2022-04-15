import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QLVbden } from '@modules/vanbanden/models';
import { VanbandenService } from '@modules/vanbanden/Services';

@Component({
  selector: 'app-ql-vbden',
  templateUrl: './ql-vbden.component.html',
  styleUrls: ['./ql-vbden.component.scss']
})
export class QlVbdenComponent implements OnInit {

  filter: any;
  Data: any = [];
  DataVbden: any =[];
  @ViewChild('formValue') formValue !: FormGroup;
  showAdd !: boolean;
  showUpdate!: boolean;
  QlVbdenModel : QLVbden = new QLVbden()

  constructor(
    private apiUrl: VanbandenService,
  ) { }

  ngOnInit() {
    this.getVbden();
    this.getNoiden();
  }
  getVbden(){
    this.apiUrl.getVbden().subscribe(res=>{
      this.Data = res;
    })
  }
  getNoiden(){
    this.apiUrl.getNoiden().subscribe(res=>{
      this.DataVbden = res;
    })
  }
  onedit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.QlVbdenModel = row
  }
  clickAdd(){
    this.formValue.reset()
    this.showAdd = true;
    this.showUpdate = false;
  }
  postVbden(){
    this.apiUrl.postVbden(this.QlVbdenModel).subscribe(res => {
      console.log(res);
      alert("Thêm Mới Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getVbden()
    }, () => {
      alert("Something Wrong")
    })
  }
  updateVbden(){
    this.apiUrl.updateVbden(this.QlVbdenModel).subscribe(res => {
      console.log(res);
      alert("Sửa Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getVbden()
    }, () => {
      alert("Something Wrong")
    })
  }
  deleteVbden(row:any){
    this.apiUrl.deleteVbden(row.IdVbden).subscribe(()=>{
      alert("Xóa Thành Công");
      this.getVbden();
    })
  }
}
