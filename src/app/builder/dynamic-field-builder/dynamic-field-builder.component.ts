import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../global.types';

@Component({
  selector: 'app-dynamic-field-builder',
  templateUrl: './dynamic-field-builder.component.html',
  styleUrls: ['./dynamic-field-builder.component.scss'],
})
export class DynamicFieldBuilderComponent implements OnInit {

  @Input('field') item: Field;
  constructor() {}

  ngOnInit(): void {}

  toggleValue(item: Field) {
    item.selected = !item.selected;
  }
  removeField(item: Field) {}
  addValue(values) {}
}
