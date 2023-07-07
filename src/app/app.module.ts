import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { NgChartsModule } from 'ng2-charts';
import {NgScrollbarModule} from "ngx-scrollbar";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: DashboardComponent}
    ]),
    BrowserModule,
    NgbModule,
    MatCardModule,
    MatButtonModule,
    NgChartsModule,
    NgScrollbarModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
