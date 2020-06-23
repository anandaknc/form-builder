import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Field, Value } from '../global.types';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

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
defaultTheme ={
  bgColor: 'ffffff',
  textColor: '555555',
  bannerImage: '',
};
  modelFields: Array<Field> = [];
  model: any = {
    screenId: 'Cafeteria',
    name: 'Cafeteria Screen',
    channel:'admin',
    theme: this.defaultTheme,
    attributes: this.modelFields,
  };

  constructor(private http: HttpClient, private router: Router ) {}
  ngOnInit(): void {
    
    let screenId = this.model.screenId;
    if(screenId){
    let url = 'https://dynamicscreen-ba1bb.firebaseio.com/screens/' + screenId + '.json';
    this.http.get(url).subscribe((r: any) => {
      if (r) {
        if (r.attributes) {
          r.attributes = JSON.parse(r.attributes);
        }
        if(!r. theme){
          r. theme=this.defaultTheme;
        }
        this.model=r;
      }

    });
  }
  }

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
  ViewForm(){
    if(this.model.screenId ){
    this.router.navigate(['custom', { screenId: this.model.screenId }]);
  }
  }
  updateForm() {
  
    const formData ={
      channel: this.model.channel,
      name: this.model.name
      , screenId: this.model.screenId, theme:{
        bannerImage: this.model.theme.bannerImage, textColor: this.model.theme.textColor, bgColor: this.model.theme.bgColor
      } , attributes: JSON.stringify(this.model.attributes)
    }
    let url ='https://dynamicscreen-ba1bb.firebaseio.com/screens/'+this.model.screenId+'/.json';
    this.http.put(url,formData).subscribe(r=>{
      swal.fire('Success','Screen updated successfully','success');
    });
  }

  initReport() {
    this.report = true;
    const input = {
      id: this.model._id,
    };
    
  }

  test() {}
}
