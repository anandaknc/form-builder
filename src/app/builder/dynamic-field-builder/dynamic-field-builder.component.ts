import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Field } from '../global.types';

@Component({
  selector: 'app-dynamic-field-builder',
  templateUrl: './dynamic-field-builder.component.html',
  styleUrls: ['./dynamic-field-builder.component.scss'],
})
export class DynamicFieldBuilderComponent implements OnInit {
  @Input('field') item: Field;
  @Output() deleted = new EventEmitter<Field>();
  constructor() {}

  ngOnInit(): void {}

  toggleValue(item: Field) {
    item.selected = !item.selected;
  }
  removeField(item: Field) {
    this.deleted.emit(this.item);
  }
  addValue(values) {}
}
