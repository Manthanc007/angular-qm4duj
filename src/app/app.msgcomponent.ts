import {Component,Input} from '@angular/core';
@Component({
selector:'my-msg',
templateUrl:'./app.msgcomponent.html'
})
export class msgcomponent{
  @Input() prefixMsg:string;
  @Input() sitename:string;
}