import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseurl = "http://localhost:8000";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  getAllMovies():Observable<any>{
    return this.http.get(this.baseurl+'/movie/', 
    {headers: this.httpHeaders});
  }

  getPremieres(): Observable<any> {
    return this.http.get(this.baseurl + '/movie/', { headers: this.httpHeaders })
      .pipe(
        map((response: any) => response.filter((movie: any) => movie.is_premiere))
      );
  }

  getNoPremieres(): Observable<any> {
    return this.http.get(this.baseurl + '/movie/', { headers: this.httpHeaders })
      .pipe(
        map((response: any) => response.filter((movie: any) => !movie.is_premiere))
      );
  }

  getMovieById(id: string): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${id}/`, { headers: this.httpHeaders });
  }

  getAllShowtimes(): Observable<any> {
    return this.http.get(this.baseurl + '/showtime/', { headers: this.httpHeaders });
  }

  getShowtimesByMovieId(movieId: string): Observable<any> {
    return this.http.get(this.baseurl + '/showtime/', { headers: this.httpHeaders })
      .pipe(
        map((response: any) => response.filter((showtime: any) => showtime.movie == movieId))
      );
  }

  getSeatsByHall(hallId: string): Observable<any> {
    return this.http.get(this.baseurl + '/seat/', { headers: this.httpHeaders })
      .pipe(
        map((response: any) => response.filter((seat: any) => seat.hall == hallId))
      );
  }

  getShowtimeById(showtimeId: string): Observable<any> {
    return this.http.get(`${this.baseurl}/showtime/${showtimeId}/`, { headers: this.httpHeaders });
  }

  getTicketsByShowtime(showtimeId: string): Observable<any> {
    return this.http.get(this.baseurl + '/ticket/', { headers: this.httpHeaders })
      .pipe(
        map((response: any) => response.filter((ticket: any) => ticket.showtime == showtimeId))
      );
  }

  getTicketsByPurchase(purchaseId: string): Observable<any> {
    return this.http.get(this.baseurl + '/ticket/', { headers: this.httpHeaders })
      .pipe(
        map((response: any) => response.filter((ticket: any) => ticket.purchase == purchaseId))
      );
  }

  getPurchasesByUser(userId: string): Observable<any> {
    return this.http.get(this.baseurl + '/purchase/', { headers: this.httpHeaders })
      .pipe(
        map((response: any) => response.filter((purchase: any) => purchase.user == userId))
      );
  }

  createTicket(ticket: any): Observable<any> {
    return this.http.post(`${this.baseurl}/ticket/`, ticket, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteTicket(ticketId: string): Observable<any> {
    return this.http.delete(`${this.baseurl}/ticket/${ticketId}/`, { headers: this.httpHeaders });
  }

  createPurchase(purchase: any): Observable<any> {
    return this.http.post(`${this.baseurl}/purchase/`, purchase, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deletePurchase(purchaseId: string): Observable<any> {
    return this.http.delete(`${this.baseurl}/purchase/${purchaseId}/`, { headers: this.httpHeaders });
  }
}
