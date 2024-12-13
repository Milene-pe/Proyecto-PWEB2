import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-purchase-navbar',
  templateUrl: './purchase-navbar.component.html',
  styleUrl: './purchase-navbar.component.css'
})
export class PurchaseNavbarComponent implements OnInit {
  showtime: any = {};
  isTicketsPage = false;
  isPaymentPage = false;
  purchaseId: string = '';
  
  constructor(private movieService: MovieService, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isTicketsPage = event.url.includes('/asientos/');
        this.isPaymentPage = event.url.includes('/pago');
        this.purchaseId = this.getPurchaseIdFromUrl();
        console.log('Purchase ID:', this.purchaseId);
      }
    });
    this.getShowtime();
  }

  getShowtime(): void {
    const showtimeId = this.router.url.split('/')[1];
    this.movieService.getShowtimeById(showtimeId).subscribe(
      data => {
        this.showtime = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  private getPurchaseIdFromUrl(): string {
    const urlSegments = this.router.url.split('/');
    const purchaseIdSegment = urlSegments[3];
    return purchaseIdSegment;
  }

  goBack(): void {
    console.log('Going back');
    if(this.isTicketsPage && !this.isPaymentPage) {
      this.deletePurchase();
      this.location.back();
    } else if (this.isPaymentPage) {
      this.deleteTickets();
      this.location.back();
    } else {
      this.location.back();
    }
  }

  cancelPurchase(): void {
    if (this.isTicketsPage || this.isPaymentPage) {
      this.deletePurchase();
      this.router.navigate(['/pelicula/' + this.showtime.movie]);
    } else {
      this.router.navigate(['/pelicula/' + this.showtime.movie]);
    }
  }

  deletePurchase(): void {
    if (this.purchaseId !== null) {
      this.movieService.deletePurchase(this.purchaseId).subscribe(
        () => {
          console.log('Compra eliminada con éxito');
        },
        error => {
          console.error('Error al eliminar la compra:', error);
          alert('Ocurrió un error al cancelar la compra.');
        }
      );
    } else {
      this.router.navigate(['/peliculas']);
    }
  }

  deleteTicket(ticketId: string): void {
    this.movieService.deleteTicket(ticketId).subscribe(
      () => {
        console.log('Ticket eliminado con éxito');
      },
      error => {
        console.error('Error al eliminar el ticket:', error);
        alert('Ocurrió un error al cancelar el ticket.');
      }
    );
  }

  deleteTickets(): void {
    this.movieService.getTicketsByPurchase(this.purchaseId).subscribe(
      data => {
        data.forEach((ticket: any) => {
          this.deleteTicket(ticket.id);
        });
      },
      error => {
        console.error('Error al obtener los tickets:', error);
        alert('Ocurrió un error al cancelar los tickets.');
      }
    );
  }
}
