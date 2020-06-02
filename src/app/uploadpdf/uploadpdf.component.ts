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

  fileChangeABV1(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      let formData:FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/pdf','Accept': 'multipart/form-data' })
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

fileChangeQINorth(event){
  let fileList: FileList = event.target.files;
  if(fileList.length > 0) {
    let file: File = fileList[0];
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/pdf','Accept': 'multipart/form-data' })
    };
  let url='https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v4/motelup/qinorth'
  this.http.post(url, formData, httpOptions).subscribe(event => {
      console.log('response'+JSON.stringify(event))
      this.uploadSuccess = true;
  });
}else{console.log('Invalid File Length')}
}

fileChangeSuper8(event){
  let fileList: FileList = event.target.files;
  if(fileList.length > 0) {
    let file: File = fileList[0];
    console.log("Super8 FileName:"+file)
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/pdf','Accept': 'multipart/form-data' })
    };
  let url='https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v5/motelup/super8'
  console.log("URL:"+url);
  this.http.post(url, formData, httpOptions).subscribe(event => {
      console.log('response'+JSON.stringify(event))
      this.uploadSuccess = true;
  });
}else{console.log('Invalid File Length')}
}

fileChangeQIGreen(event){
  let fileList: FileList = event.target.files;
  if(fileList.length > 0) {
    let file: File = fileList[0];
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/pdf','Accept': 'multipart/form-data' })
    };
  let url='https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v4/motelup/qiingreen'
  console.log("URL:"+url);
  this.http.post(url, formData, httpOptions).subscribe(event => {
      console.log('response'+JSON.stringify(event))
      this.uploadSuccess = true;
  });
}else{console.log('Invalid File Length')}
}

fileChangeQISouth(event){
  let fileList: FileList = event.target.files;
  if(fileList.length > 0) {
    let file: File = fileList[0];
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/pdf','Accept': 'multipart/form-data' })
    };
  let url='https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v4/motelup/qisouth'
  console.log("URL:"+url);
  this.http.post(url, formData, httpOptions).subscribe(event => {
      console.log('response'+JSON.stringify(event))
      this.uploadSuccess = true;
  });
}else{console.log('Invalid File Length')}
}

fileChangeRedRoof(event){
  let fileList: FileList = event.target.files;
  if(fileList.length > 0) {
    let file: File = fileList[0];
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/pdf','Accept': 'multipart/form-data' })
    };
  let url='https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v4/motelup/redroof'
  console.log("URL:"+url);
  this.http.post(url, formData, httpOptions).subscribe(event => {
      console.log('response'+JSON.stringify(event))
      this.uploadSuccess = true;
  });
}else{console.log('Invalid File Length')}
}

fileChangeObetz(event){
  let fileList: FileList = event.target.files;
  if(fileList.length > 0) {
    let file: File = fileList[0];
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/pdf','Accept': 'multipart/form-data' })
    };
  let url='https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v4/motelup/obetz'
  console.log("URL:"+url);
  this.http.post(url, formData, httpOptions).subscribe(event => {
      console.log('response'+JSON.stringify(event))
      this.uploadSuccess = true;
  });
}else{console.log('Invalid File Length')}
}

fileChangeHIE(event){
  let fileList: FileList = event.target.files;
  if(fileList.length > 0) {
    let file: File = fileList[0];
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/pdf','Accept': 'multipart/form-data' })
    };
  let url='https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v4/motelup/hiegroveport'
  console.log("URL:"+url);
  this.http.post(url, formData, httpOptions).subscribe(event => {
      console.log('response'+JSON.stringify(event))
      this.uploadSuccess = true;
  });
}else{console.log('Invalid File Length')}
}

fileChangeHamp(event){
  let fileList: FileList = event.target.files;
  if(fileList.length > 0) {
    let file: File = fileList[0];
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/pdf','Accept': 'multipart/form-data' })
    };
  let url='https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v4/motelup/hamptonlan'
  console.log("URL:"+url);
  this.http.post(url, formData, httpOptions).subscribe(event => {
      console.log('response'+JSON.stringify(event))
      this.uploadSuccess = true;
  });
}else{console.log('Invalid File Length')}
}

fileChangeBestSou(event){
  let fileList: FileList = event.target.files;
  if(fileList.length > 0) {
    let file: File = fileList[0];
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/pdf','Accept': 'multipart/form-data' })
    };
  let url='https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v4/motelup/bestsouth'
  console.log("URL:"+url);
  this.http.post(url, formData, httpOptions).subscribe(event => {
      console.log('response'+JSON.stringify(event))
      this.uploadSuccess = true;
  });
}else{console.log('Invalid File Length')}
}

fileChangebestNort(event){
  let fileList: FileList = event.target.files;
  if(fileList.length > 0) {
    let file: File = fileList[0];
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/pdf','Accept': 'multipart/form-data' })
    };
  let url='https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v5/motelup/bestnorth'
  console.log("URL:"+url);
  this.http.post(url, formData, httpOptions).subscribe(event => {
      console.log('response'+JSON.stringify(event))
      this.uploadSuccess = true;
  });
}else{console.log('Invalid File Length')}
}

fileChangeSid(event){
  let fileList: FileList = event.target.files;
  if(fileList.length > 0) {
    let file: File = fileList[0];
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/pdf','Accept': 'multipart/form-data' })
    };
  let url='https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v5/motelup/sid'
  console.log("URL:"+url);
  this.http.post(url, formData, httpOptions).subscribe(event => {
      console.log('response'+JSON.stringify(event))
      this.uploadSuccess = true;
  });
}else{console.log('Invalid File Length')}
}

fileChangeTole(event){
  let fileList: FileList = event.target.files;
  if(fileList.length > 0) {
    let file: File = fileList[0];
    let formData:FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/pdf','Accept': 'multipart/form-data' })
    };
  let url='https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v5/motelup/tole'
  console.log("URL:"+url);
  this.http.post(url, formData, httpOptions).subscribe(event => {
      console.log('response'+JSON.stringify(event))
      this.uploadSuccess = true;
  });
}else{console.log('Invalid File Length')}
}



}
