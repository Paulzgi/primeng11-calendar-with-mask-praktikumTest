import { AfterViewInit, Directive } from '@angular/core';
import { Calendar } from 'primeng/calendar';
import Inputmask from 'inputmask';

@Directive({
  selector: '[dateMask]',
})
export class DateMaskDirective implements AfterViewInit {
  constructor(private primeCalendar: Calendar) {}

  ngAfterViewInit() {
    this.applyMask();

    // Listen to changes in showTime property and update the mask accordingly
    this.primeCalendar.onMonthChange.subscribe(() => {
      this.applyMask();
    });
  }

  applyMask() {
    const input = this.getHTMLInput();
    const mask = this.getDateMask();

    // Destroy any existing inputmask instance
    Inputmask.remove(input);

    // Apply the new mask
    if (mask) {
      Inputmask(mask).mask(input);
    }
  }

  getHTMLInput(): HTMLInputElement {
    return this.primeCalendar.el.nativeElement.querySelector('input');
  }

  getDateMask(): string {
    if (this.primeCalendar.timeOnly) {
      return '99:99';
    } else if (this.primeCalendar.showTime) {
      return '99/99/9999 99:99';
    } else {
      return '99/99/9999';
    }
  }

  updateDateMask(newMask: string) {
    const inputMask = new Inputmask(newMask);
    inputMask.mask(this.getHTMLInput());
  }
}
