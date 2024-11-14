import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/fb/auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  user: any = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.authState$.subscribe((userData) => {
      this.user = userData;
    });

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
