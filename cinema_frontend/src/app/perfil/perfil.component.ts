import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MovieService } from '../movie.service';
import { error } from 'console';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  userProfile: any;
  purchases: any[] = [];
  tickets: { [key: number]: any[] } = {};

  title = 'cinema_frontend';

  constructor(private userService: UserService, private movieService: MovieService) {}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      data => {
        this.userProfile = data;
        console.log('User profile:', this.userProfile);
        this.getPurchases();
      },
      error => {
        console.error('Error fetching user profile', error);
      }
    );
  }

  getPurchases(): void {
    if (this.userProfile && this.userProfile.user) {
      this.movieService.getPurchasesByUser(this.userProfile.user).subscribe(
        data => {
          this.purchases = data;
          console.log('Purchases:', this.purchases);
          this.getTicketsForPurchases();
        },
        error => {
          console.error('Error fetching purchases', error);
        }
      );
    } else {
      console.error('User profile or user ID is not available');
    }
  }
  
  getTicketsForPurchases(): void {
    this.purchases.forEach(purchase => {
      this.movieService.getTicketsByPurchase(purchase.id).subscribe(
        data => {
          this.tickets[purchase.id] = data; // Almacenar los tickets por ID de compra
          console.log(`Tickets for purchase ${purchase.id}:`, this.tickets[purchase.id]);

        },
        error => {
          console.error(`Error fetching tickets for purchase ${purchase.id}`, error);
        }
      );
    });
  }
  
}
