import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Directive({
  selector: '[changeDir]',
})
export class ChangeDirective {
  setTimeLeft = 10;
  delayTime = 1000;
  inter;
  logDate: any;
  constructor(private router: Router, private datePipe: DatePipe) {}
  @HostListener('mouseleave') onClick() {
    debugger;
    // console.log('click om  form');
    this.setTimeLeft = 10;
    this.delayTime = 1000;
    this.logDate = this.datePipe.transform(new Date(), 'HH:mm:ss');
    console.log('logDate', this.logDate);
    this.inter = 0;
    this.inter = setInterval(() => {
      if (this.setTimeLeft > 0) {
        this.setTimeLeft--;

        console.log('set Intervel', this.setTimeLeft);
      } else {
        debugger;
        clearInterval(this.inter);
        console.log('clear Intervel');
        this.router.navigate(['./auth/login']);
      }
    }, 1000);
  }

  interFun(): any {
    if (this.setTimeLeft > 0) {
      this.setTimeLeft--;

      console.log('set Intervel', this.setTimeLeft);
    } else {
      debugger;
      clearInterval(this.inter);
      console.log('clear Intervel');
      this.router.navigate(['./auth/login']);
    }
  }
}
