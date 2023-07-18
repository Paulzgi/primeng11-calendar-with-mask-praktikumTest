import { Component, ViewChild } from '@angular/core';
import { Calendar } from 'primeng/calendar';
import { DateMaskDirective } from './date-mask.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  @ViewChild(DateMaskDirective) dateMaskDirective: DateMaskDirective;
  
  dateValue: Date = null;

  constructor() {}

  askSave() {
    console.log(this.dateValue);
  }

  updateMask() {
    this.dateMaskDirective.updateDateMask('99:99:__/__');
  }
}
