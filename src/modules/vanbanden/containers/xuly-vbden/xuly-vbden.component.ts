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
  DataVbden: any =[];
  message: boolean | undefined;
  @ViewChild('formValue') formValue !: FormGroup;
  QlVbdenModel : QLVbden = new QLVbden()

  constructor(
    private apiUrl: VanbandenService,
    private api : ApiService,
  ) { }

  ngOnInit() {
    this.getVbden();
    this.api.currentMessage.subscribe(message => message = message)
  }
  getVbden(){
    this.apiUrl.getVbden().subscribe(res=>{
      this.Data = res;
    })
  }
  handle(row:any){
    this.QlVbdenModel = row
  }
  DuyetVbden(){
    this.api.changeMessage(`Đã Xử Lý`);
    alert("Phê Duyệ Văn Bản")
      let ref = document.getElementById('close')
      ref?.click()
  }
  KduyetVbden(){

  }

}
