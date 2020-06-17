import { NgModule } from '@angular/core';

import { MfsFormComponent } from './mfs-form/mfs-form.component';
import { CustomScreenComponent } from './custom-screen/custom-screen.component';
import { MfsCommonModule } from '../mfs-common/mfs-common.module';



@NgModule({
  declarations: [MfsFormComponent, CustomScreenComponent],
  imports: [
    MfsCommonModule
  ]
})
export class DynamicModule { }
