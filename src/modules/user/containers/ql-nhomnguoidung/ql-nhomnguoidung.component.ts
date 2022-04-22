import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QLNhomnguoidung } from '@modules/user/models';
import { UserService } from '@modules/user/services';
@Component({
  selector: 'app-ql-nhomnguoidung',
  templateUrl: './ql-nhomnguoidung.component.html',
  styleUrls: ['./ql-nhomnguoidung.component.scss']
})
export class QlNhomnguoidungComponent implements OnInit {

  filter: any;
  Data: any = [];
  @ViewChild('formValue') formValue !: FormGroup;
  showAdd !: boolean;
  showUpdate!: boolean;
  QlUserteam : QLNhomnguoidung = new QLNhomnguoidung()

  constructor(
    private ApiUserteam : UserService,
  ) { }

  ngOnInit() {
    this.getUserteam();
  }
  getUserteam(){
    this.ApiUserteam.getUserteam().subscribe(res=>{
      this.Data = res
    })
  }
  clickAdd(){
    this.formValue.reset()
    this.showAdd = true;
    this.showUpdate = false;
  }
  onedit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.QlUserteam = row
  }
  deleteUserteam(row:any){
    this.ApiUserteam.deleteUserteam(row.UserteamId).subscribe(()=>{
      alert("Xóa Thành Công");
      this.getUserteam();
    })
  }
  post(){
    this.ApiUserteam.postUserteam(this.QlUserteam).subscribe(res => {
      console.log(res);
      alert("Thêm Mới Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getUserteam()
    }, () => {
      alert("Something Wrong")
    })
  }
  update(){
    this.ApiUserteam.updateUserteam(this.QlUserteam).subscribe(res => {
      console.log(res);
      alert("Sửa Thành Công")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getUserteam()
    }, () => {
      alert("Something Wrong")
    })
  }
}
