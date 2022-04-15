import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QLLoaivb } from '@modules/vanbanden/models';
import { VanbandenService } from '@modules/vanbanden/Services';

@Component({
  selector: 'app-ql-loaivb',
  templateUrl: './ql-loaivb.component.html',
  styleUrls: ['./ql-loaivb.component.scss']
})
export class QlLoaivbComponent implements OnInit {

  filter: any;
  Data: any = [];
  @ViewChild('formValue') formValue !: FormGroup;
  showAdd !: boolean;
  showUpdate!: boolean;
  QlLoaivbModel : QLLoaivb = new QLLoaivb();

  constructor(
    private apiUrl: VanbandenService
  ) { }

  ngOnInit():void {
    this.getLoaivb();
  }

  getLoaivb(){
    this.apiUrl.getLoaivb().subscribe(res=>{
      this.Data = res
    })
  }
  onedit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.QlLoaivbModel = row
  }
  clickAdd(){
    this.formValue.reset()
    this.showAdd = true;
    this.showUpdate = false;
  }
  postLoaivb(){
    this.apiUrl.postLoaivb(this.QlLoaivbModel).subscribe(res => {
      console.log(res);
      alert("Thêm Mới Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getLoaivb()
    }, () => {
      alert("Something Wrong")
    })
  }
  updateLoaivb(){
    this.apiUrl.updateLoaivb(this.QlLoaivbModel).subscribe(res => {
      console.log(res);
      alert("Sửa Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getLoaivb()
    }, () => {
      alert("Something Wrong")
    })
  }
  deleteLoaivb(row:any){
    this.apiUrl.deleteLoaivb(row.IdLoaivb).subscribe(()=>{
      alert("Xóa Thành Công");
      this.getLoaivb();
    })
  }
}
