import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfsFormComponent } from './mfs-form.component';

describe('MfsFormComponent', () => {
  let component: MfsFormComponent;
  let fixture: ComponentFixture<MfsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
