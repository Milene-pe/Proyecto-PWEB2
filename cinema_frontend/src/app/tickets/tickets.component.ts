import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { MovieService } from '../movie.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})

export class TicketsComponent implements OnInit{
  title = 'cinema_frontend';

  currentUser: any;

  selectedSeats: any[] = [];
  movie: any = {};
  showtime: any = {};
  purchase: any = {};
  tickets: any[] = [];
  totalAmount = 0;
  createdTickets: any[] = [];

  constructor(private dataService: DataService, private movieService: MovieService, private router: Router, public userService: UserService) {}

  ngOnInit(): void {
    const state = this.dataService.getState();
    this.selectedSeats = state.selectedSeats || [];
    this.purchase = state.purchase || {};
    this.showtime = state.showtime || {};
    this.movie = state.movie || {};

    this.showtime.price_general = parseFloat(this.showtime.price_general) || 0;
    this.showtime.price_kids = parseFloat(this.showtime.price_kids) || 0;
    this.showtime.price_seniors = parseFloat(this.showtime.price_seniors) || 0;

    this.userService.getUserProfile().subscribe(
      data => {
        this.currentUser = data;
        console.log('User profile:', this.currentUser);
      },
      error => {
        console.error('Error fetching user profile', error);
      }
    );
  }

  generateTickets(): void {
    this.tickets = this.selectedSeats.map(seat => {
      let price = 0;
      switch (seat.ticketType) {
        case 'general':
          price = parseFloat(this.showtime.price_general) || 0;
          break;
        case 'kids':
          price = parseFloat(this.showtime.price_kids) || 0;
          break;
        case 'seniors':
          price = parseFloat(this.showtime.price_seniors) || 0;
          break;
      }
      return {
        ticket_type: seat.ticketType || null,
        price: price ? price.toFixed(2) : null,
        user: this.currentUser.user,
        purchase: this.purchase.id,
        showtime: this.showtime.id,
        seat: seat.id,
      };
    });
  }

  formatTime(time: string): string {
    const [hours, minutes] = time.split(':').map(num => parseInt(num, 10));
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
  }

  formatDuration(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}min`;
  }

  getSelectedSeats(): any[] {
    return this.selectedSeats;
  }

  getFormattedPrice(price: string, adjustment: number): string {
    const numericPrice = parseFloat(price);
    const adjustedPrice = numericPrice + adjustment;
    return adjustedPrice.toFixed(2);
  }

  updateSeatType(seat: any, type: string): void {
    seat.ticketType = type;
    this.calculateTotal(); // Actualiza el total después de cambiar el tipo de ticket
    this.generateTickets(); // Genera o actualiza los tickets después de cambiar el tipo de ticket
    console.log(this.tickets);
  }

  calculateTotal(): void {
    this.totalAmount = this.selectedSeats.reduce((total, seat) => {
      let price = 0;
      switch (seat.ticketType) {
        case 'general':
          price = this.showtime.price_general;
          break;
        case 'kids':
          price = this.showtime.price_kids;
          break;
        case 'seniors':
          price = this.showtime.price_seniors;
          break;
      }
      return total + (price || 0);
    }, 0);
  }

  // Nueva función para validar si todos los asientos tienen un tipo de ticket
  allSeatsSelected(): boolean {
    return this.selectedSeats.every(seat => seat.ticketType !== undefined && seat.ticketType !== null);
  }

  goPayment(): void {
    if (!this.allSeatsSelected()) {
      alert('Por favor, selecciona un tipo de boleto para cada asiento.');
      return;
    }

    this.generateTickets();
    this.tickets.forEach(ticket => {
      this.movieService.createTicket(ticket).subscribe(
        (response) => {
          console.log('Ticket creado:', response);
          this.createdTickets.push(response);
        },
        (error) => {
          console.error('Error creando el ticket:', error);
          alert('Ocurrió un error al generar los boletos. Por favor, intenta de nuevo.');
        }
      );
    });

    this.dataService.setState({
      purchase: this.purchase,
      tickets: this.createdTickets,
      showtime: this.showtime,
      movie: this.movie,
      amount: this.totalAmount,
      selectedSeats: this.selectedSeats
    });

    this.router.navigate([`${this.showtime.id}/asientos/${this.purchase.id}/pago`]);
  }
}
