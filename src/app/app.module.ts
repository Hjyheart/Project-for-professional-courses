import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {
  ButtonsModule, PopoverModule, AccordionModule, CarouselModule, DatepickerModule, DropdownModule, ModalModule,
  TabsModule, TooltipModule, TypeaheadModule, CollapseModule
} from 'ng2-bootstrap';
import {AppRoutingModule} from "./app.routing.module";
import {IntroModule} from "./introduction/intro.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {LoginComponent} from "./login/login.component";
import {ErrorComponent} from "./error/error.componnet";
import {RegisterComponent} from "./register/register.component";
import {TestComponent} from "./test/test.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    DatepickerModule.forRoot(),
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    CollapseModule.forRoot(),
    IntroModule,
    DashboardModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    TestComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
