import { BuilderTestPageComponent } from './builder/builder-test-page/builder-test-page.component';
import { CustomScreenComponent } from './dynamic/custom-screen/custom-screen.component';
import { BuilderModule } from './builder/builder.module';
import { ScreenBuilderComponent } from './builder/screen-builder/screen-builder.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:ScreenBuilderComponent   },
  { path: 'custom', component: CustomScreenComponent },
  { path: 'test', component: BuilderTestPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BuilderModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
