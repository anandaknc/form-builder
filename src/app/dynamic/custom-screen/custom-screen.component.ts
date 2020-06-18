import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-custom-screen',
  templateUrl: './custom-screen.component.html',
  styleUrls: ['./custom-screen.component.scss'],
})
export class CustomScreenComponent implements OnInit {
  model: any;
  reports: any[] = [];
  report = false;
  success = false;
  show = false;
  constructor() {}

  ngOnInit(): void {}


  toggleValue(item) {
    item.selected = !item.selected;
  }

  submit() {
    let valid = true;
    const validationArray = JSON.parse(JSON.stringify(this.model.attributes));
    validationArray.reverse().forEach((field: any) => {
      console.log(field.label + '=>' + field.required + '=>' + field.value);
      if (field.required && !field.value && field.type !== 'checkbox') {
        swal.fire('Error', 'Please enter ' + field.label, 'error');
        valid = false;
        return false;
      }
      if (field.required && field.regex) {
        const regex = new RegExp(field.regex);
        if (regex.test(field.value) === false) {
          swal.fire('Error', field.errorText, 'error');
          valid = false;
          return false;
        }
      }
      if (field.required && field.type === 'checkbox') {
        if (field.values.filter((r) => r.selected).length === 0) {
          swal.fire('Error', 'Please enterrr ' + field.label, 'error');
          valid = false;
          return false;
        }
      }
    });
    if (!valid) {
      return false;
    }
    console.log('Save', this.model);
    const input = new FormData();
    input.append('formId', this.model._id);
    input.append('attributes', JSON.stringify(this.model.attributes));
    // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
    //   console.log(r);
    //   swal.fire('Success','You have contact sucessfully','success');
    //   this.success = true;
    // },error=>{
    //   swal.fire('Error',error.message,'error');
    // });
  }
}
