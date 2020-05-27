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
  constructor(private http: HttpClient,private _router: Router ) { }

  ngOnInit(): void {
    this.today = new Date().toISOString().split('T')[0];
  /*  let x=this.today.split("-");
    let d=x[2];
    let m=x[1];
    let y=x[0];
    this.formatteddate=d+"/"+m+"/"+y;
    console.log("date"+JSON.stringify(this.formatteddate))
*/
    this.getBugetList();
  }

  getBugetList(){
    let x=this.today.split("-");
    let d=x[2];
    let m=x[1];
    let y=x[0];
    this.formatteddate=d+"/"+m+"/"+y;
      let inputJson={
        "op": "monthlyBudget",
        "inDate":this.formatteddate
      }
    
         console.log("inputJson"+JSON.stringify(inputJson))
           this.budgetTargetService(inputJson)
           .subscribe(data => {
            let sampleList=JSON.parse(data);
            console.log("data"+JSON.stringify(sampleList))

            if(data.length!=0){
              this.budgetList = eval(sampleList.list);
            // this.budgetList=JSON.parse(data.list)

            console.log("budgetList"+JSON.stringify(this.budgetList))
            }else{
              console.log("error"+JSON.stringify(data))
            }
         })
       }



       saveDropPoints(){
        let x=this.today.split("-");
        let d=x[2];
        let m=x[1];
        let y=x[0];
        this.formatteddate=d+"/"+m+"/"+y;
   console.log("process"+JSON.stringify(this.budgetList))
    let inputJson=  {
      "op": "uploadBudget",
      "inDate":this.formatteddate,
      "budgetModelsList":this.budgetList
      /*[
     {"motelName":"QINorth","roomTarget": 501,"budgetTarget":341},
     {"motelName":"Super8","roomTarget": 502,"budgetTarget":342},
     {"motelName":"QIGreen","roomTarget": 503,"budgetTarget":343},
     {"motelName":"QISouth","roomTarget": 504,"budgetTarget":344},
     {"motelName":"RedRoof","roomTarget": 505,"budgetTarget":345},
     
     {"motelName":"Obetz","roomTarget": 506,"budgetTarget":346},
     {"motelName":"ABVI","roomTarget": 507,"budgetTarget":347},
     {"motelName":"HIE","roomTarget": 508,"budgetTarget":348},
      {"motelName":"Hamp","roomTarget": 509,"budgetTarget":349},
     {"motelName":"BestSou","roomTarget": 510,"budgetTarget":350},
     
     {"motelName":"bestNort","roomTarget": 511,"budgetTarget":351},
      {"motelName":"Sid","roomTarget": 512,"budgetTarget":352},
     {"motelName":"Tole","roomTarget": 513,"budgetTarget":353}
     ]*/
    }
    console.log("process"+JSON.stringify(inputJson))

  
        this.budgetTargetService(inputJson)
        .subscribe(data => {
          console.log("result process"+JSON.stringify(data))

         if(data.d_json!=""){ 
         
          console.log('',JSON.stringify(data.message));
         }else{
           console.log("error"+JSON.stringify(data))
         }
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
