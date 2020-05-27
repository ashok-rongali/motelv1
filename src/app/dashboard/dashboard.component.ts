import { Component, OnInit } from '@angular/core';

declare var jQuery;
 var geocodeService;
 declare var  TweenLite;
 declare var Back;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor() { }
  
    ngOnInit(): void {
  
      openMenu();
      setTimeout(function(){
        closeMenu();	
      }, 1500);
  
      jQuery(".close").click(function(){
        closeMenu();	
      });
  
      jQuery(".hamburger").click(function(){
        openMenu();	
      });
  
      jQuery("i").hover(function(){
        if(jQuery(this).attr('data-label') != undefined){
          var attrVal = jQuery(this).attr('data-label');
          var offset = jQuery(this).offset();
  
          jQuery(".label").text(attrVal);
  
          TweenLite.set(".label", {top: offset.top, left: offset.left + 80});
          TweenLite.fromTo(".label", 0.25, {autoAlpha: 0, left: "+=20"}, {autoAlpha: 1, left: offset.left + 50})
        }
      }, function(){
        var offset = jQuery(this).offset();
        TweenLite.to(".label", 0.25, {autoAlpha: 0, left: offset.left + 70});
      });
  
      function openMenu() {
        jQuery(jQuery(".circle").get().reverse()).each(function (i) {
          var radius = jQuery(this).width();
          TweenLite.to(jQuery(this), 0.3, {top: -radius/2, left: -radius/2, delay: 0.1*i})
        });
        TweenLite.to(".hamburger", 0.3, {top: -160, left: -160});	
      }
  
      function closeMenu() {
        jQuery(".circle").each(function (i) {
          var radius = jQuery(this).width();
          TweenLite.to(jQuery(this), 0.4, {top: -radius, left: -radius, delay: 0.1*i})
        });
        TweenLite.to(".hamburger", 0.3, {top: -80, left: -80});	
      }
  
    }

}
