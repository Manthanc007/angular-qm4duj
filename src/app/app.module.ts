import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppComponent2 } from "./app.component2";
import {msgcomponent} from "./app.msgcomponent";
import {AppComponet6} from "./app.msgcomponent";
import{Component7Component} from "./app.msgcomponent";
import {NewComponent} from "./app.msgcomponent";
@NgModule({
  imports: [BrowserModule, FormsModule,
  RouterModule.forRoot([
{path:'new.cmp',
component:Component7Component
 },
 { path:'new-cmp1',
 component:AppComponet6

 } ])],
  declarations: [AppComponent, HelloComponent, AppComponent2,msgcomponent,AppComponet6,Component7Component,NewComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
