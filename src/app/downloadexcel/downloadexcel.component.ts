import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-downloadexcel',
  templateUrl: './downloadexcel.component.html',
  styleUrls: ['./downloadexcel.component.scss']
})
export class DownloadexcelComponent implements OnInit {
  yearsDDData :any;
  monthDDData :any;
  generateLinkResp :any; generatedLink :any; generatedFileName :any;
  generateJson:any;  
  constructor(private http :HttpClient) { 
    this.yearsDDData = ['2020','2021','2022'];
    this.generateJson = {"gYear":"","gMonth":""};
    this.monthDDData = [{'mkey':'01','mval':'Jan'}
                       ,{'mkey':'02','mval':'Feb'}
                       ,{'mkey':'03','mval':'March'}
                       ,{'mkey':'04','mval':'April'}
                       ,{'mkey':'05','mval':'May'}
                       ,{'mkey':'06','mval':'June'}];

  }

  ngOnInit() {
  }

  generateLinkFun(generateJson){
    //alert('generateLinkFun'+generateJson);
    console.log('generateLinkFun'+JSON.stringify(generateJson));
    if(generateJson.gYear.length ==0 || generateJson.gYear ==null ||generateJson.gYear ===undefined )
    {alert("Please Select Year");return false;};
    if(generateJson.gMonth.length ==0 || generateJson.gMonth ==null ||generateJson.gMonth ===undefined )
    {alert("Please Select Month");return false;};
    let selectedFileName = generateJson.gYear+"/"+generateJson.gMonth+"/01" //"2020/01/25";
    let url = "https://glvdgy6mne.execute-api.us-west-2.amazonaws.com/v5/email";
    let op = {"op": "generateLink", "inDate": selectedFileName }
    this.http.post(url,op).subscribe(article =>{
          console.log('article'+JSON.stringify(article));
          this.generateLinkResp = article;
          this.generateLinkResp = JSON.parse(this.generateLinkResp);
          //console.log('this.generateLinkResp'+JSON.stringify(this.generateLinkResp.message));
          if(this.generateLinkResp.message == "success"){
             this.generatedLink = this.generateLinkResp.info
             this.generatedFileName = selectedFileName+".xls";
             console.log("this.generatedLink:"+this.generatedLink);
          }else if(this.generateLinkResp.message == "fail"){
            this.generatedFileName = this.generateLinkResp.info;
          }
          else{
            //article"{\"message\":\"fail\",\"info\":\"R_2020_5.xls Not Exist\"}"
            this.generatedLink = "No File Found";
            this.generatedFileName = selectedFileName;
          }

    });
  }

  uploadExcelFun(){}
  sendEmailFun(){}

}
