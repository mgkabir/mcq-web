import { Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'page-not-found',
  template:
  `
    <h3>Page Not Found</h3>
    <p class="text-info">Looking for something else ? You may go {{here}}</p>
  `
})

export class PageNotFoundComponent{

here: string =  'Here';

}
