import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnLayoutBuilderComponent } from './two-column-layout-builder.component';

describe('TwoColumnLayoutBuilderComponent', () => {
  let component: TwoColumnLayoutBuilderComponent;
  let fixture: ComponentFixture<TwoColumnLayoutBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColumnLayoutBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnLayoutBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
