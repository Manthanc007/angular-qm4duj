import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {router} from router;
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppComponent2 } from "./app.component2";
import {msgcomponent} from "./app.msgcomponent";
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, AppComponent2,msgcomponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
