import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faMobile, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faGooglePlay = faGooglePlay;
  faAppStore = faAppStore;
  faMobile = faMobile;
  faUser = faUser;

  mailerForm!: FormGroup;
  // mailText: string;
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mailerForm = this.fb.group({
      userName: [
        null,
        [
          Validators.required,
          Validators.pattern(new RegExp(/^([a-zA-Z])[a-zA-Z0-9\_]\w{5,30}$/)),
          // Regex for userName with alpha numeric along with _ length ranging from 5 to 30
        ],
      ],
      mobileNumber: [
        null,
        [
          Validators.required,
          Validators.pattern(new RegExp(/^[6-9]{1}[0-9]{9}$/)),
          // Regex for mobile numbers starting with 6 to 9 and total 10 digits
        ],
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
    this.snackBar.open('User details submitted successfully!', undefined, {
      panelClass: 'success-toast',
      duration: 2000,
    });
    this.router.navigateByUrl('/preview');
  }

  getMailText(): string {
    return (
      'mailto:ava.ganesh@gmail.com?subject=Ganesh&body=' +
      JSON.stringify(this.mailerForm.value)
    );
  }
}
