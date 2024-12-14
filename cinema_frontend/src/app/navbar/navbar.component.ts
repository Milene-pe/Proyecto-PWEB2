import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  userProfile: any = null;
  isAuthenticated: boolean = false;
  isSuperUser: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    this.subscription.add(
      this.userService.isAuthenticated$.subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      })
    );

    this.userService.getUserProfile().subscribe(
      data => {
        this.userProfile = data[0];
        console.log('User profile:', this.userProfile);
        this.isSuperUser = this.userProfile?.user?.is_superuser || false;
      },
      error => {
        console.error('Error fetching user profile', error);
      }
    );

  }

  logout(): void {
    this.userService.logout();
    console.log('Sesión cerrada');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
