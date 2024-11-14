import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const requiredTypeUser = route.data['typeuser'];
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (!user) {
          this.router.navigate(['/login']);
          return [false];
        }
        return this.firestore.collection('users').doc(user.uid).get().pipe(
          map(userDoc => {
            const userData = userDoc.data() as { typeuser?: number };
            return userData?.typeuser === requiredTypeUser;
          }),
          tap(hasPermission => {
            if (!hasPermission) {
              this.router.navigate(['/home']);
            }
          })
        );
      })
    );
  }
}

