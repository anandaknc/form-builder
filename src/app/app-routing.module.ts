import { CustomScreenComponent } from './dynamic/custom-screen/custom-screen.component';
import { BuilderModule } from './builder/builder.module';
import { ScreenBuilderComponent } from './builder/screen-builder/screen-builder.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ScreenBuilderComponent },
  { path: 'custom', component: CustomScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BuilderModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
