import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { App } from './src/app/app';
import { routes } from './src/app/app.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    App
  ],
  bootstrap: [App]
})
export class AppModule {}
