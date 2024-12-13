import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.userService.isAuthenticated$.subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      })
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
