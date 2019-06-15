import { Component } from '@angular/core';
import { DatePipe, DecimalPipe } from "@angular/common";
import {DemoAgRendererComponentComponent} from "./demo-ag-renderer-component/demo-ag-renderer-component.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dateFormatter: DatePipe,
              private numberFormatter: DecimalPipe) {}
  title = 'my-app';

  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {
      headerName: 'Model',
      field: 'model',
      cellRenderer: (params) => {
        return "TEST";
      }
    },
    {
      headerName: 'Price',
      field: 'price',
      cellRendererFramework: DemoAgRendererComponentComponent
    },
    {
      headerName: 'Date',
      field: 'date',
      valueFormatter: (data) => this.dateFormatter.transform(data.value, 'shortDate')
    }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, date: '2018-01-04'},
    { make: 'Ford', model: 'Mondeo', price: 32000, date: '2019-06-14' },
    { make: 'Porsche', model: 'Boxter', price: 72000, date: '2019-06-12' }
  ]
}
