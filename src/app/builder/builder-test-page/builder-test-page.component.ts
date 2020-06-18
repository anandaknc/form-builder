import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './builder-test-page.component.html',
  styleUrls: ['./builder-test-page.component.scss']
})
export class BuilderTestPageComponent implements OnInit {

  field ={
    type: 'text',
    icon: 'fa-font',
    label: 'Text',
    description: 'Enter your name',
    placeholder: 'Enter your name',
    className: 'form-control',
    subtype: 'text',
    regex: '',
    handle: true,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
