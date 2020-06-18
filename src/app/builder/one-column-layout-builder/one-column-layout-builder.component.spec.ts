import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneColumnLayoutBuilderComponent } from './one-column-layout-builder.component';

describe('OneColumnLayoutBuilderComponent', () => {
  let component: OneColumnLayoutBuilderComponent;
  let fixture: ComponentFixture<OneColumnLayoutBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneColumnLayoutBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneColumnLayoutBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
