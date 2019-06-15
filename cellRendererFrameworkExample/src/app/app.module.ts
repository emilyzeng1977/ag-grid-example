import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgGridModule} from 'ag-grid-angular';
import {DemoAgRendererComponentComponent} from './demo-ag-renderer-component/demo-ag-renderer-component.component';
import {DatePipe, DecimalPipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    DemoAgRendererComponentComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([
        DemoAgRendererComponentComponent
      ]
    )
  ],
  providers: [
    DatePipe,
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
