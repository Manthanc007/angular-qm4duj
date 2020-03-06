import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  flag=true;
  website={
      name:'Instagram',
      url:'https://www.kletech.ac.in/',
      description:'Check my Portfolio',

  }
}
