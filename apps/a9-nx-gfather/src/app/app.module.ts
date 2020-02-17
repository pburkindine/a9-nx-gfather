import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '@a9-nx-gfather/shared';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
