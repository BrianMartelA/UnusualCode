import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, sendPasswordResetEmail } from '@angular/fire/auth';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  resetPasswordForm: FormGroup;
  email: any;
  private alertController = inject(AlertController);
  errorMessage: string ='';
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
    console.log('Reset Password Page initialized');
  }

  sendResetLink() {
    const email = this.resetPasswordForm.get('email')?.value;
    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(async () => {
        this.errorMessage = 'Se ha enviado el link!';
        const alert = await this.mostrarAlerta('',this.errorMessage);
        await this.delay(3000);
        await alert.dismiss();
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        alert('Error: ' + error.message);
      });
  }

  goBack() {
    this.location.back();
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();  // Muestra la alerta
    return alert;  // Devuelve la instancia de la alerta
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}


