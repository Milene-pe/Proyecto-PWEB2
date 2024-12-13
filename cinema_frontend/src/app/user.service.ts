import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = "http://localhost:8000"
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  private userProfileUrl = 'http://localhost:8000/user/';

  private apiUrl = 'http://localhost:8000/api/token/';
  private localStorageAvailable: boolean;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.checkAuthentication());

  constructor(private http: HttpClient) {
    this.localStorageAvailable = typeof window !== 'undefined' && window.localStorage !== undefined;
  }

  // Envía las credenciales y recibe un token
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password });
  }

  // Guarda el token en el almacenamiento local
  saveToken(token: string): void {
    if (this.localStorageAvailable) {
      localStorage.setItem('token', token);
      this.isAuthenticatedSubject.next(true); // Actualiza el estado de autenticación
    }
  }

  // Obtiene el token del almacenamiento local
  getToken(): string | null {
    if (this.localStorageAvailable) {
      return localStorage.getItem('token');
    }
    return null;
  }

  // Elimina el token del almacenamiento local
  logout(): void {
    if (this.localStorageAvailable) {
      localStorage.removeItem('token');
      this.isAuthenticatedSubject.next(false); // Actualiza el estado de autenticación
    }
  }

  // Verifica si el usuario está autenticado
  private checkAuthentication(): boolean {
    return this.getToken() !== null;
  }

  // Observable para el estado de autenticación
  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Envía las credenciales para el registro
  register(credentials: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post('http://localhost:8000/api/register/', credentials);
  }

  // Crea un perfil de usuario
  createProfile(profile: any): Observable<any> {
    return this.http.post(`${this.baseurl}/user/`, profile, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getUserProfile(): Observable<any> {
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<any>(this.userProfileUrl, { headers });
    }
    return new Observable<any>(observer => {
      observer.error('No token found');
      observer.complete();
    });
  }
}

