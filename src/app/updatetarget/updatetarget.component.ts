import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Component({
  selector: 'app-updatetarget',
  templateUrl: './updatetarget.component.html',
  styleUrls: ['./updatetarget.component.css']
})
export class UpdatetargetComponent implements OnInit {

  budgetList:any;
  date:any;
  today:string;
  formatteddate:any;
  marksBulk:string="https://rzt9vmhshd.execute-api.us-west-2.amazonaws.com/ybadmin/bulkuploads";
  budgetTarget:string=" https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v5/budgets";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  emptyTarget:any;
  
  constructor(private http: HttpClient,private _router: Router ) { }
  ngOnInit(): void {
    this.today = new Date().toISOString().split('T')[0];
    this.emptyTarget = [{"MOTELNAME":"QINorth","ROOMTARGET":0,"BUDGETTARGET":0},
    {"MOTELNAME":"Super8","ROOMTARGET":0,"BUDGETTARGET":0},
    {"MOTELNAME":"QIGreen","ROOMTARGET":0,"BUDGETTARGET":0},
    {"MOTELNAME":"QISouth","ROOMTARGET":0,"BUDGETTARGET":0},
    {"MOTELNAME":"RedRoof","ROOMTARGET":0,"BUDGETTARGET":0},
    {"MOTELNAME":"Obetz","ROOMTARGET":0,"BUDGETTARGET":0},
    {"MOTELNAME":"ABVI","ROOMTARGET":0,"BUDGETTARGET":0},
    {"MOTELNAME":"HIE","ROOMTARGET":0,"BUDGETTARGET":0},
    {"MOTELNAME":"Hamp","ROOMTARGET":0,"BUDGETTARGET":0},
    {"MOTELNAME":"BestSou","ROOMTARGET":0,"BUDGETTARGET":0},
    {"MOTELNAME":"bestNort","ROOMTARGET":0,"BUDGETTARGET":0},
    {"MOTELNAME":"Sid","ROOMTARGET":0,"BUDGETTARGET":0},
    {"MOTELNAME":"Tole","ROOMTARGET":0,"BUDGETTARGET":0}];
    this.getBugetList();
  }

  getBugetList(){
    let x=this.today.split("-");
    let d=x[2];
    let m=x[1];
    let y=x[0];
    this.formatteddate=d+"/"+m+"/"+y;
    let inputJson={"op": "monthlyBudget","inDate":this.formatteddate}
    console.log("inputJson"+JSON.stringify(inputJson))
    this.budgetTargetService(inputJson).subscribe(data => {
            let sampleList=JSON.parse(data);
            console.log("data"+JSON.stringify(sampleList))

            if(data.length!=0){
              console.log("");
              if(eval(sampleList.list).length>0){
                this.budgetList = eval(sampleList.list);
              }else{
                //alert("HI");
                this.budgetList = this.emptyTarget;
              }
              
            // this.budgetList=JSON.parse(data.list
            console.log("budgetList"+JSON.stringify(this.budgetList))
            }else{
              console.log("error"+JSON.stringify(data))
              this.budgetList = this.emptyTarget;
            }
         })
       }



   saveBudgets(){
        let x=this.today.split("-");
        let d=x[2];
        let m=x[1];
        let y=x[0];
        this.formatteddate=d+"/"+m+"/"+y;
  // console.log("saveBudgets "+JSON.stringify(this.budgetList))
    let inputJson=  {
      "op": "uploadBudget",
      "inDate":this.formatteddate,
      "budgetModelsList":this.budgetList
    }
    console.log("budgetList inputJson: "+JSON.stringify(inputJson))
        this.budgetTargetService(inputJson)
        .subscribe(data => {
          console.log("result process"+JSON.stringify(data))
          alert(""+JSON.stringify(data));
        //  if(data.d_json!=""){ 
        //   console.log('',JSON.stringify(data.message));
        //  }else{
        //    console.log("error"+JSON.stringify(data))
        //  }
      })
  
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
