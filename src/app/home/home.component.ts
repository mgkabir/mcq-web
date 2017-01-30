import { Component, OnInit} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'mcq-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

homeText:string = "MCQ Home"


  ngOnInit(){
  }

}
