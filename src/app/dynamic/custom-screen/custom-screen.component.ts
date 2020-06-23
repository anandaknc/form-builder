import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  constructor(private route: ActivatedRoute,
    private router: Router, private http: HttpClient,) { }

  ngOnInit(): void {
    let screenId = this.route.snapshot.paramMap.get('screenId');
    let url = 'https://dynamicscreen-ba1bb.firebaseio.com/screens/' + screenId + '.json';
    this.http.get(url).subscribe((r: any) => {
      if (r) {
        if (r.attributes) {
          r.attributes = JSON.parse(r.attributes);
        } if (!r.theme) {
          r.theme = {};
        }
        this.model = r;
      }

    });
  }


  toggleValue(item) {
    item.selected = !item.selected;
  }

  submit() {
    let valid = true;
    const validationArray = JSON.parse(JSON.stringify(this.model.attributes));
    const attributes:any={};

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
      if (field.type === 'checkbox') {
      attributes[field.name] = field.values;
      }else if(field.type!== 'button') {
        attributes[field.name] = field.value;
      }
    });
    if (!valid) {
      return false;
    }
    const formData ={
      channel: this.model.channel,
      name: this.model.name
      , screenId: this.model.screenId, 
       attributes: JSON.stringify(attributes)
    }
   
    this.saveFormValues(formData);
}
saveFormValues(formData){
  let url ='https://dynamicscreen-ba1bb.firebaseio.com/screensdata/'+formData.screenId+'.json';
  this.http.post(url,formData).subscribe(r=>{
    swal.fire('Success','Screen Data updated successfully','success');
  });
}
}
