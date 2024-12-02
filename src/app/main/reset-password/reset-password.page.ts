import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, sendPasswordResetEmail } from '@angular/fire/auth';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  resetPasswordForm: FormGroup;
  email: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  sendResetLink() {
    const email = this.resetPasswordForm.get('email')?.value;
    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Se ha enviado un enlace de restablecimiento a tu correo.');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        alert('Error: ' + error.message);
      });
  }

  goBack() {
    this.location.back();
  }
}
