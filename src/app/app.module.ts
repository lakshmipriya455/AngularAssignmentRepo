import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpViewComponent } from './view/emp-view/emp-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpFormComponent,
    EmpViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
