import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };
  errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    this.userService.login(this.credentials.username, this.credentials.password).subscribe(
      response => {
        // Guarda el token en localStorage
        this.userService.saveToken(response.access);
        // Redirige al usuario a la página principal o dashboard
        this.router.navigate(['/home']);
        console.log('Sesión iniciada');
      },
      error => {
        this.errorMessage = 'Usuario o contraseña incorrectos.';
      }
    );
  }
}
