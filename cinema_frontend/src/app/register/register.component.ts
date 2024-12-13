import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  user = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    dni: '',
    birthdate: '',
    phone: '',
    address: '',
    civil_status: '',
  };

  userProfile = {}

  errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    this.userService.register(this.user).subscribe(
      response => {
        console.log('Registro exitoso');

        this.userProfile = {
          user: response.user.id,
          dni: this.user.dni,
          birthdate: this.user.birthdate,
          phone: this.user.phone,
          address: this.user.address,
          civil_status: this.user.civil_status,
          is_logged: false,
        };
        
        console.log(this.userProfile);

        this.userService.createProfile(this.userProfile).subscribe(
          response => {
            console.log('Perfil creado');
          },
          error => {
            console.log('Error al crear el perfil');
          }
        );
        this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
      },
      error => {
        this.errorMessage = 'Error en el registro.';
      }
    );
  }
}
