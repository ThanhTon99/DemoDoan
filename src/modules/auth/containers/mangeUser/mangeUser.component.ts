import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { NotifyModel } from '@app/Model/notify';
import { ApiService } from '@app/Service/api.service';

@Component({
  selector: 'app-mangeUser',
  templateUrl: './mangeUser.component.html',
  styleUrls: ['./mangeUser.component.scss']
})
export class MangeUserComponent implements OnInit {

  PhotoFileName: any;
  notify: NotifyModel | undefined
  urls: string[] = [];
  @ViewChild('formValue') child !: HTMLElement 
  formValue !: FormGroup;
  notifyModelObj: NotifyModel = new NotifyModel()
  notifyData: any = [];
  showAdd !: boolean
  showUpdate!: boolean
  closeResult = ''
  todaydate = new Date()
  message: any;
  filter: any;
  showMessage: boolean = true
  selectedFile !: File

  constructor(
    private api: ApiService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getAllNotify();
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit", this.child);
  }
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    const filedata = new FormData();
    filedata.append('files', this.selectedFile, this.selectedFile?.name)
    this.http.post("http://localhost:57050/api/notify/upload", filedata).subscribe(
      res => {
        console.log(res);
      }
    )
  }
  onUpload(fileInput: any) {
    var reader = new FileReader();
    reader.readAsDataURL(fileInput.target.files[0]);
    reader.onload = (events: any) => {
      this.urls = [];
      this.urls.push(events.target.result)
    }
    const file = fileInput.target.files[0];
  }

  clickAddNotify() {
    // this.urls = [];
    this.formValue.reset()
    this.showAdd = true
    this.showUpdate = false
  }
  onEdit(row: any) {
    // this.urls = [];
    this.showAdd = false
    this.showUpdate = true
    this.notifyModelObj = row
    // this.urls.push("http://localhost:57050/Photos/" + row.PhotoFileName)
  }
  postNotifyDatails() {
    this.urls = [];
    this.api.postNotify(this.notifyModelObj).subscribe(res => {
      console.log(res);
      alert("Notify Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getAllNotify()
    }, () => {
      alert("Something Wrong")
    })
  }

  updateNotifyDatails() {
    this.api.updateNotify(this.notifyModelObj).subscribe(res => {
      console.log(res);
      alert("Notify Update Seccessfully")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.getAllNotify()
    }, () => {
      alert("Something Wrong")
    })
  }
  getAllNotify() {
    this.api.getNotify().subscribe(res => {
      this.notifyData = res;
    })
  }
  deleteNotify(row: any) {
    this.api.deleteNotify(row.NotifyId).subscribe(() => {
      alert("Notify Deleted")
      this.getAllNotify()
    })
  }
}
