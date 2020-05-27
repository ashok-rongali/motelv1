import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObject:any;
  postId:any;
  marksBulk:string="https://rzt9vmhshd.execute-api.us-west-2.amazonaws.com/ybadmin/bulkuploads";
  budgetTarget:string=" https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v5/budgets";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient,private _router: Router ) { 
    this.loginObject={
      "username":"",
      "password":"",
      "appType":"0"
    }
  }

  ngOnInit(): void {
  }
    login(){

      this._router.navigate(['updatetarget']);

  if(this.loginObject.username===""){
      console.info('Error',"please enter username "); 
     }
    else if(this.loginObject.password===""){
      console.info('Error',"please enter password "); 
     }
     else{
   let inputJson=  {
      "op": "fleetlogin",
      "user_id": this.loginObject.username,
      "u_password":this.loginObject.password,
    }
     /*  
      this.motelService.loginService(inputJson).subscribe(data => {
       if(data.info=="valid"){
        console.log("res"+JSON.stringify(data))
        sessionStorage.setItem("userDetails",JSON.stringify(data.d_json))
        sessionStorage.setItem("userId",JSON.stringify(this.loginObject.username))

        this.toastr.success('login success',JSON.stringify(data.message));
        this._router.navigate(['fleetlog']);
       }else{
        console.log("error"+JSON.stringify(data))
        this.toastr.error('Error', JSON.stringify(data.info));
       }
    })*/
    }
  }

  loginService(data): Observable<any> {
    let API_URL = `${this.marksBulk}`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.error)
      )
  }

  budgetTargetService(data): Observable<any> {
    let API_URL = `${this.budgetTarget}`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.error)
      )
  }
 
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}




/*import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MotelService {


  marksBulk:string="https://rzt9vmhshd.execute-api.us-west-2.amazonaws.com/ybadmin/bulkuploads";
  budgetTarget:string=" https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v5/budgets";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  loginService(data): Observable<any> {
    let API_URL = `${this.marksBulk}`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.error)
      )
  }

  budgetTargetService(data): Observable<any> {
    let API_URL = `${this.budgetTarget}`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.error)
      )
  }
 
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}*/




