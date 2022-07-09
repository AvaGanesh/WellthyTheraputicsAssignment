import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mailerForm!: FormGroup;
  // mailText: string;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.mailerForm = this.fb.group({
      userName: [
        null,
        [
          Validators.required,
          Validators.pattern(new RegExp(/^[a-zA-Z0-9\_]\w{5,30}$/)),
        ],
      ],
      mobileNumber: [
        null,
        [Validators.required, Validators.pattern(new RegExp('[0-9]{10}'))],
      ],
    });
  }

  getMobileNumberError(): string | undefined {
    if (
      this.mailerForm.get('mobileNumber')?.dirty &&
      this.mailerForm.get('mobileNumber')?.touched
    ) {
      return this.mailerForm.get('mobileNumber')?.hasError('required')
        ? 'Mobile number is required'
        : 'Invalid mobile number';
    }
    return undefined;
  }

  getUserNameError(): string | undefined {
    if (
      this.mailerForm.get('userName')?.dirty &&
      this.mailerForm.get('userName')?.touched
    ) {
      return this.mailerForm.get('userName')?.hasError('required')
        ? 'User name is required'
        : 'Username is of invalid format';
    }
    return undefined;
  }

  onSubmit() {
    this.router.navigateByUrl('/preview');
  }

  getMailText(): string {
    return (
      'mailto:ava.ganesh@gmail.com?subject=Ganesh&body=' +
      JSON.stringify(this.mailerForm.value)
    );
  }
}
