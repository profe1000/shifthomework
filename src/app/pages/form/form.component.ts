import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  showname = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  changeformsource() {
    this.showname = false;
    this.myForm.removeControl('name');
    console.log(this.myForm.controls);
  }

  onSubmit(form: FormGroup) {
    console.log(form.controls);
    console.log('Valid?', form.valid); // true or false
    //console.log('Name', form.value.name);
    //console.log('Email', form.value.email);
    //console.log('Message', form.value.message);
  }
}
