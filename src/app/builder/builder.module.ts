import { NgModule } from '@angular/core';

import { DndModule } from 'ngx-drag-drop';

import { ScreenBuilderComponent } from './screen-builder/screen-builder.component';
import { MfsCommonModule } from '../mfs-common/mfs-common.module';

@NgModule({
  declarations: [ScreenBuilderComponent],
  imports: [MfsCommonModule, DndModule],
})
export class BuilderModule {}
