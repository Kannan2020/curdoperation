import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SuccessComponent } from './Notifications/success/success.component';
import { ErrorComponent } from './Notifications/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SuccessComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
