import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpHeaders , HttpClient, HttpRequest,HttpResponse, HttpEventType} from '@angular/common/http';
import {Observable} from "rxjs";

@Component({
  selector: 'app-uploadpdf',
  templateUrl: './uploadpdf.component.html',
  styleUrls: ['./uploadpdf.component.css']
})
export class UploadpdfComponent implements OnInit {
  percentDone: number;
  uploadSuccess: boolean;
  constructor( private http:HttpClient) { }

  ngOnInit(): void {
  }

  fileChange(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      let formData:FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/pdf',
          'Accept': 'multipart/form-data'
        })
      };
      
      
    let url='https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v4/motelup/abvi'
   // this.http.post(url, formData, {reportProgress: true, observe: 'events'})
      this.http.post(url, formData, httpOptions)
      .subscribe(event => {
        console.log('responce'+JSON.stringify(event))
        this.uploadSuccess = true;
 
    });
  }
}

fileChangeHampton(event){
  let fileList: FileList = event.target.files;
  if(fileList.length > 0) {
    let file: File = fileList[0];
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/pdf',
        'Accept': 'multipart/form-data'
      })
    };
    
    
  let url='https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v4/motelup/abvi'
 // this.http.post(url, formData, {reportProgress: true, observe: 'events'})
    this.http.post(url, formData, httpOptions)
    .subscribe(event => {
      console.log('responce'+JSON.stringify(event))
      this.uploadSuccess = true;

  });
}
}

}
