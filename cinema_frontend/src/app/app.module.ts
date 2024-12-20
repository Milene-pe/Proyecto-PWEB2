import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MoviesComponent } from './movies/movies.component';
import { EstrenosComponent } from './estrenos/estrenos.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { SeatsComponent } from './seats/seats.component';
import { PurchaseNavbarComponent } from './purchase-navbar/purchase-navbar.component';
import { TicketsComponent } from './tickets/tickets.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    MoviesComponent,
    EstrenosComponent,
    CardComponent,
    HomeComponent,
    ContactComponent,
    MovieDetailComponent,
    AllMoviesComponent,
    SeatsComponent,
    PurchaseNavbarComponent,
    TicketsComponent,
    PurchaseComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
