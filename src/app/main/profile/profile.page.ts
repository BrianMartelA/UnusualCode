import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/fb/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any = {};
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {

    this.authService.authState$.subscribe((userData) => {
      this.user = userData;
      console.log('Datos completos del usuario:', this.user);
    });
  }

  async logout() {
    console.log('Cerrando sesión...');
    this.authService.logout();  // Cerrar sesión
    this.router.navigate(['/home']);
    console.log('Sesion cerrada..')
  }
}
