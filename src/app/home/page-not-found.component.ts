import { Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'page-not-found',
  template:
  `
    <div class="well">
      <h3>Page Not Found</h3>
      <p class="text-info">Looking for something else ? You may visit <a routerLink="/home" routerLinkActive="active">Home</a></p>
    </div>
  `
})

export class PageNotFoundComponent{



}
