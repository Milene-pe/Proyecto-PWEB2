import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { EstrenosComponent } from './estrenos/estrenos.component';
import { ContactComponent } from './contact/contact.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { SeatsComponent } from './seats/seats.component';
import { TicketsComponent } from './tickets/tickets.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'peliculas', component : AllMoviesComponent },
  { path: 'estrenos', component: EstrenosComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'pelicula/:id', component: MovieDetailComponent },
  { path: ':showtimeId/asientos', component: SeatsComponent },
  { path: ':showtimeId/asientos/:purchaseId', component: TicketsComponent},
  { path: ':showtimeId/asientos/:purchaseId/pago', component: PurchaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
