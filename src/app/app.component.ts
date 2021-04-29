import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Person';
  
  ngOnInit(){
    if ($(window).width() <= 767) {
      $('.resolution').html("Current Window Size " + $(window).width());
      $('body').css('background', 'yellow');
    }
    if ($(window).width() > 767) {
      $('.resolution').html("Current Window Size " + $(window).width());
      $('body').css('background', 'cyan');
    }
   
  }
 
}
