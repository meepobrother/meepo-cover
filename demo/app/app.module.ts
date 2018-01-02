import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from 'meepo-store';
import { CoverModule } from '../../src/app/app';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    CoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

