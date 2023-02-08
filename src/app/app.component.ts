import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router) {}

  ngOnInit() {
    this.router.navigate(['./login'])
  //   this.form = new FormGroup({
  //     name: new FormControl('', Validators.required),
  //     pfArray: new FormArray([new FormControl('', Validators.required)]),
  //   });
  }
  // get nArray() {
  //   return this.form.controls;
  // }
  // get fArray() {
  //   return this.nArray.pfArray as FormArray;
  // }
  // addArray() {
  //   this.form
  //     .get('pfArray')
  //     ['controls'].push(new FormControl('', Validators.required));
  // }

  // removeArray(index) {
  //   // this.form.get('pfArray')['controls'].removeAt(index);
  //   this.fArray.removeAt(index);
  // }
}
