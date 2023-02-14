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
  checkDate: any;
  constructor(private router: Router, private datePipe: DatePipe) {}
  @HostListener('click') onClick() {
    debugger;
    // console.log('click om  form');
    this.setTimeLeft = 10;
    this.delayTime = 1000;
    this.logDate = this.datePipe.transform(new Date(), 'HH:mm:ss');
    this.checkDate = this.datePipe.transform(
      new Date(new Date().getTime() + 2 * 5000),
      'HH:mm:ss'
    );
    // this.checkDate = new Date(new Date().getTime() + 5 * 60000)
    console.log('logDate', this.logDate);
    console.log('checkDate', this.checkDate);
    // this.inter = 0;
    debugger;
    // while (this.datePipe.transform(new Date(), 'HH:mm:ss') > this.checkDate) {
    //   console.log('log out');

    //   this.router.navigate(['./auth/login']);
    // }
    clearInterval(this.inter);
    this.inter = setInterval(() => {
      //   if(this.datePipe.transform(new Date(), 'HH:mm:ss') > this.checkDate){
      //   clearInterval(this.inter);
      // }
      if (this.datePipe.transform(new Date(), 'HH:mm:ss') < this.checkDate) {
        // this.setTimeLeft--;
        console.log(
          'current date',
          this.datePipe.transform(new Date(), 'HH:mm:ss')
        );
        console.log('checkDate', this.checkDate);
        // console.log('set Intervel', this.setTimeLeft);
      } else {
        debugger;
        clearInterval(this.inter);
        console.log('clear Intervel');
        this.router.navigate(['./auth/login']);
      }
    }, 1000);
    // this.inter = setInterval(() => {
    //   if (this.setTimeLeft > 0) {
    //     this.setTimeLeft--;

    //     console.log('set Intervel', this.setTimeLeft);
    //   } else {
    //     debugger;
    //     clearInterval(this.inter);
    //     console.log('clear Intervel');
    //     this.router.navigate(['./auth/login']);
    //   }
    // }, 1000);
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
