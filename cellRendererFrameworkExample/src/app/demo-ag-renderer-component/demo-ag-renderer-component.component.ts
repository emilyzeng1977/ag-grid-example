import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-demo-ag-renderer-component',
  templateUrl: './demo-ag-renderer-component.component.html',
  styleUrls: ['./demo-ag-renderer-component.component.scss']
})
export class DemoAgRendererComponentComponent implements AgRendererComponent {
  params: any;
  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

}
