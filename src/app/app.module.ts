import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateMaskDirective } from './date-mask.directive';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, CalendarModule, ButtonModule ],
  declarations: [ AppComponent, DateMaskDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
