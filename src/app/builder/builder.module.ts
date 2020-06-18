import { NgModule } from '@angular/core';

import { DndModule } from 'ngx-drag-drop';

import { ScreenBuilderComponent } from './screen-builder/screen-builder.component';
import { MfsCommonModule } from '../mfs-common/mfs-common.module';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { OneColumnLayoutBuilderComponent } from './one-column-layout-builder/one-column-layout-builder.component';
import { TwoColumnLayoutBuilderComponent } from './two-column-layout-builder/two-column-layout-builder.component';
import { DynamicFieldBuilderComponent } from './dynamic-field-builder/dynamic-field-builder.component';
import { BuilderTestPageComponent } from './builder-test-page/builder-test-page.component';

@NgModule({
  declarations: [
    ScreenBuilderComponent,
    FormBuilderComponent,
    OneColumnLayoutBuilderComponent,
    TwoColumnLayoutBuilderComponent,
    DynamicFieldBuilderComponent,
    BuilderTestPageComponent,
  ],
  imports: [MfsCommonModule, DndModule],
})
export class BuilderModule {}
