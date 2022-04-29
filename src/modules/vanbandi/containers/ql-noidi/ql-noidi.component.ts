import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QLNoiden } from '@modules/vanbanden/models';
import { VanbandenService } from '@modules/vanbanden/Services';

@Component({
  selector: 'sb-ql-noidi',
  templateUrl: './ql-noidi.component.html',
  styleUrls: ['./ql-noidi.component.scss']
})
export class QlNoidiComponent implements OnInit {

  filter: any;
  Data: any = [];
  @ViewChild('formValue') formValue !: FormGroup;
  showAdd !: boolean;
  showUpdate!: boolean;
  QlNoidenModel: QLNoiden = new QLNoiden()

  constructor(
    private apiUrl: VanbandenService,
  ) { }

  ngOnInit() {
    this.getNoidi();
  }
  getNoidi(){
    this.apiUrl.getNoiden().subscribe(res=>{
      this.Data = res;
    })
  }
  onedit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.QlNoidenModel = row
  }
  clickAdd(){
    this.formValue.reset()
    this.showAdd = true;
    this.showUpdate = false;
  }
  postNoidi(){
    this.apiUrl.postNoiden(this.QlNoidenModel).subscribe(res => {
      console.log(res);
      alert("Thêm Mới Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getNoidi()
    }, () => {
      alert("Something Wrong")
    })
  }
  updateNoidi(){
    this.apiUrl.updateNoiden(this.QlNoidenModel).subscribe(res => {
      console.log(res);
      alert("Sửa Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getNoidi()
    }, () => {
      alert("Something Wrong")
    })
  }
  deleteNoidi(row:any){
    this.apiUrl.deleteNoiden(row.IdNoiden).subscribe(()=>{
      alert("Xóa Thành Công");
      this.getNoidi();
    })
  }

}
