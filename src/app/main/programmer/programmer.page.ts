import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/fb/auth.service';

@Component({
  selector: 'app-programmer',
  templateUrl: './programmer.page.html',
  styleUrls: ['./programmer.page.scss'],
})
export class ProgrammerPage implements OnInit {
  user: any = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.authState$.subscribe((userData) => {
      this.user = userData;
    });
  }

  async logout() {
    console.log('Cerrando sesión...');
    this.authService.logout();  // Cerrar sesión
    this.router.navigate(['/home']);
    console.log('Sesion cerrada..')
  }
}
