import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';


import { UploadpdfComponent } from './uploadpdf/uploadpdf.component';
import { UpdatetargetComponent } from './updatetarget/updatetarget.component';
import { DownloadexcelComponent } from './downloadexcel/downloadexcel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
    {path:"uploadpdf",component:UploadpdfComponent},
    { path:"updatetarget",component:UpdatetargetComponent},
    {path:"downloadexcel",component:DownloadexcelComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UploadpdfComponent,
    UpdatetargetComponent,
    DownloadexcelComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    //ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
