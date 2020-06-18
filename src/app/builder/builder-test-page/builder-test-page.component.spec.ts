import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderTestPageComponent } from './builder-test-page.component';

describe('BuilderTestPageComponent', () => {
  let component: BuilderTestPageComponent;
  let fixture: ComponentFixture<BuilderTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilderTestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
