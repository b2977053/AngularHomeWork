import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsgInputComponent } from './msg-input/msg-input.component';
import { MsgListComponent } from './msg-list/msg-list.component';
import { MsgInfoComponent } from './msg-info/msg-info.component';
import { MsgButtonComponent } from './msg-button/msg-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MsgInputComponent,
    MsgListComponent,
    MsgInfoComponent,
    MsgButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
