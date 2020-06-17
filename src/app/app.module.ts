import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicModule } from './dynamic/dynamic.module';
import { BuilderModule } from './builder/builder.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
