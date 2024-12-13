import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']  // Corrección: styleUrls en plural
})
export class SeatsComponent implements OnInit {
  title = 'cinema_frontend';
  seats: any[][] = [];
  movie: any;
  showtime: any;

  constructor(private dataService: DataService, private movieService: MovieService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getShowtimeById();
  }

  getShowtimeById(): void {
    const id = this.route.snapshot.paramMap.get('showtimeId') as string;  // Aserción de tipo
    this.movieService.getShowtimeById(id).subscribe(
      data => {
        this.showtime = data;
        console.log("Showtime by id " + id + " loaded");
        this.getSeats();
        this.getMovie();
      },
      error => {
        console.error(error);
      }
    );
  }

  getSeats(): void {
    if (this.showtime && this.showtime.hall) {
      this.movieService.getSeatsByHall(this.showtime.hall).subscribe(
        data => {
          this.seats = (data); // Suponiendo que `data` es un array de asientos
          console.log("Seats loaded");
          this.orderSeats(this.seats);
          this.seats = this.transformSeats(this.seats);
          this.getSeatsOccupied();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.error('Showtime hall information is missing');
    }
  }

  getMovie(): void {
    if (this.showtime && this.showtime.hall) {
      this.movieService.getMovieById(this.showtime.movie).subscribe(
        data => {
          this.movie = data; // Suponiendo que `data` es un array de asientos
          console.log(this.movie);
        },
        error => {
          console.log(error);
        }
      );
    } else {
    }
  }

  getSeatsOccupied(): void {
    if (this.showtime && this.showtime.hall) {
      this.movieService.getTicketsByShowtime(this.showtime.id).subscribe(
        data => {
          const occupiedSeats = data.map((ticket: any) => ticket.seat);
          this.seats.forEach(row => {
            row.forEach(seat => {
              seat.is_available = !occupiedSeats.includes(seat.id);
            });
          });
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.error('Showtime information is missing');
    }
  }

  transformSeats(data: any[]): any[][] {
    const rows = 4;
    const cols = 10;
    const transformedSeats = [];
    for (let i = 0; i < rows; i++) {
      transformedSeats[i] = data.slice(i * cols, i * cols + cols);
    }
    return transformedSeats;
  }

  orderSeats(seats: any[]): any[] {
    console.log('Ordering seats');
    return seats.sort((a, b) => {
      const [aRow, aNumber] = [a.name[0], parseInt(a.name.slice(1), 10)];
      const [bRow, bNumber] = [b.name[0], parseInt(b.name.slice(1), 10)];
  
      if (aRow === bRow) {
        return aNumber - bNumber;
      }
      return aRow.localeCompare(bRow);
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

  toggleSeat(seat: any): void {
    if (seat.is_available && !seat.selected) {
      seat.selected = true;
      console.log('Seat selected');
    } else if (seat.selected) {
      seat.selected = false;
      console.log('Seat deselected');
    }
  }

  getSelectedSeats(): any[] {
    return this.seats.flat().filter(seat => seat.selected);
  }

  initiatePurchase(): void {
    const selectedSeats = this.getSelectedSeats();

    if (selectedSeats.length === 0) {
      alert('No has seleccionado ningún asiento. Por favor, selecciona al menos uno.');
      return;
    }

    const purchase = {
      user: 1,
      total_amount: 0,
    };

    this.movieService.createPurchase(purchase).subscribe(
      (response) => {
        console.log('Compra creada:', response);

        this.dataService.setState({
          selectedSeats: selectedSeats,
          purchase: response,
          showtime: this.showtime,
          movie: this.movie
        });
        
        alert(`Compra iniciada con éxito para los asientos: ${selectedSeats.map(seat => seat.name).join(', ')}`);
        this.router.navigate([`${this.showtime.id}/asientos/${response.id}`]);
      },
      (error) => {
        console.error('Error creando la compra:', error);
        alert('Ocurrió un error al iniciar la compra. Por favor, intenta de nuevo.');
      }
    );
  }
}
