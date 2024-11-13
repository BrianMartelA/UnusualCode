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
  }

}
