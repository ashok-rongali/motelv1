
import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { RouterModule, Router, NavigationEnd,NavigationStart } from '@angular/router';

//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'motels';
  hideElement = false;
  userDetails:any;
  userName:any;

  constructor(public router: Router) {
   this.userDetails=JSON.parse(sessionStorage.getItem("userDetails"))
  // this.token=this.userDetails[0].token;
  }
  ngOnInit(){
    if(this.userDetails!=null){
    this.userName=this.userDetails[0].u_fname+" "+this.userDetails[0].u_lname;
  }
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        console.log("this.userDetails[0]"+JSON.stringify(this.userDetails))
        if(this.userDetails!=null){
          this.userDetails=JSON.parse(sessionStorage.getItem("userDetails"))
        this.userName=this.userDetails[0].u_fname+" "+this.userDetails[0].u_lname;
      }
    }
   });
 
}
  signOut(){
    sessionStorage.clear();
  }
}
