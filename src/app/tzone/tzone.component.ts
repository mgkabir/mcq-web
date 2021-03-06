import {Component} from '@angular/core';

@Component({
  template: `

    <div class="row">
      <div class="col-md-2">
        <a routerLinkActive="text-uppercase text-success" [routerLink]="['.']">Test Home</a>
      </div>
      <div class="col-md-2">
        <a routerLinkActive="text-uppercase text-success" [routerLink]="['practice']">Practice</a>
      </div>
      <div class="col-md-2">
        <a routerLinkActive="text-uppercase text-success" [routerLink]="['modeltest']">Model Test</a>
      </div>
      <div class="col-md-6"></div>
    </div>
    <router-outlet></router-outlet>
  `
})

export class TZoneComponent{

}
