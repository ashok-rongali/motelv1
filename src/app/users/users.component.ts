import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  respJson :any;
  allSchoolsArray:any;
  constructor(private http :HttpClient) {
    this.respJson = {}
   }

  ngOnInit() {
    this.loadSchools();
  }

  loadSchools() {
    this.http.post("https://904e21o4pg.execute-api.us-west-2.amazonaws.com/sap/sadmin",
    JSON.stringify({"crud": "allschools"})).subscribe(article => {
            this.respJson = article;
            this.allSchoolsArray = this.respJson.j_data;
            console.log("this.respJson: "+JSON.stringify(this.respJson))
          }
      );

      this.http.post("http url","post json").subscribe(article =>{});
      
    }

}
