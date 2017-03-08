import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ButtonsModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import {AppRoutingModule} from "./app.routing.module";
import {IntroModule} from "./introduction/intro.module";

@NgModule({
  imports:      [
    BrowserModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    IntroModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
