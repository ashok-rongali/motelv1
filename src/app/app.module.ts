import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import {NgxPaginationModule} from 'ngx-pagination; //npm install ngx-pagination --save

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UploadsComponent } from './uploads/uploads.component';

const routes: Routes = [
  { path: 'usersL', component: UsersComponent },
  {path:'uploadsL',component:UploadsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UploadsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),HttpClientModule
  ],
  //exports: [ RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
