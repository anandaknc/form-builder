import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Field, Value } from '../global.types';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-screen-builder',
  templateUrl: './screen-builder.component.html',
  styleUrls: ['./screen-builder.component.scss'],
})
export class ScreenBuilderComponent implements OnInit {
  reports: any[] = [];
  report = false;
  success = false;
  show = false;
  value: Value = {
    label: '',
    value: '',
  };

  modelFields: Array<Field> = [];
  model: any = {
    name: 'Screen Name',
    description: 'Screen Description',
    theme: {
      bgColor: 'ffffff',
      textColor: '555555',
      bannerImage: '',
    },
    attributes: this.modelFields,
  };

  constructor() {}
  ngOnInit(): void {}

  onDragStart(event: DragEvent) {
    console.log('drag started', JSON.stringify(event, null, 2));
  }
  onDraggableCopied(event: DragEvent) {
    console.log('draggable copied', JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {
    console.log('draggable linked', JSON.stringify(event, null, 2));
  }

  addValue(values) {
    values.push(this.value);
    this.value = { label: '', value: '' };
  }

  updateForm() {
    const input = new FormData();
    input.append('id', this.model.id);
    input.append('name', this.model.name);
    input.append('channel', this.model.description);
    input.append('bannerImage', this.model.theme.bannerImage);
    input.append('bgColor', this.model.theme.bgColor);
    input.append('textColor', this.model.theme.textColor);
    input.append('attributes', JSON.stringify(this.model.attributes));

    // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
    //   console.log(r);
    //   swal('Success','App updated successfully','success');
    // });
  }

  initReport() {
    this.report = true;
    const input = {
      id: this.model._id,
    };
    // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
    //   this.reports = r.data;
    //   console.log('reports',this.reports);
    //   this.reports.map(records=>{
    //     return records.attributes.map(record=>{
    //       if(record.type=='checkbox'){
    //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
    //       }
    //     })
    //   });
    // });
  }

  test() {}
}
