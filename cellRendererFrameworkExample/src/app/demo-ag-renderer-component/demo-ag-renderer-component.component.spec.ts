import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAgRendererComponentComponent } from './demo-ag-renderer-component.component';

describe('DemoAgRendererComponentComponent', () => {
  let component: DemoAgRendererComponentComponent;
  let fixture: ComponentFixture<DemoAgRendererComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAgRendererComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAgRendererComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
