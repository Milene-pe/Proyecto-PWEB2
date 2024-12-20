import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  isAuthenticated: boolean = false;
  private subscription: Subscription = new Subscription();

  movie: any;
  showtimes: any[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService, private sanitizer: DomSanitizer, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getMovieDetails();
    this.getShowtimesByMovieId();
    this.route.fragment.subscribe((fragment) => {
      if (fragment === 'showtimes') {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300); // Delay to ensure content is loaded
      }
    });

    this.subscription.add(
      this.userService.isAuthenticated$.subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      })
    );
  }

  getMovieDetails(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;  // Aserción de tipo
    this.movieService.getMovieById(id).subscribe(
      data => {
        this.movie = data;
        console.log("Movie by id " + id + " loaded");
      },
      error => {
        console.error(error);
      }
    );
  }

  getShowtimesByMovieId(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;  // Aserción de tipo
    this.movieService.getShowtimesByMovieId(id).subscribe(
      data => {
        this.showtimes = data;
        console.log("Showtimes loaded");
      },
      error => {
        console.error(error);
      }
    );
  }

  formatDuration(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}min`;
  }

  scrollToShowtimes(): void {
    const showtimesElement = document.getElementById('showtimes');
    console.log("scrolling to showtimes");
    console.log(showtimesElement);
    showtimesElement?.scrollIntoView({ behavior: 'smooth' });
  }

  getVideoEmbedUrl(url: string): any {
    let videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

  buyTicket(showtimeId: number): void {
    if (!this.isAuthenticated) {
        alert('Por favor, inicie sesión para comprar tickets.'); // O muestra un mensaje en tu interfaz
    } else {
        // Si está autenticado, redirige a la página de asientos
        this.router.navigate(['/', showtimeId, 'asientos']);
    }
}
}
