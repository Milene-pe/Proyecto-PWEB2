import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent implements OnInit {
  tickets: any[] = [];
  purchase: any = {};
  showtime: any = {};
  movie: any = {};
  amount = 0;
  selectedSeats: any[] = [];

  showSummary = false;
  user = {
    fullName: '',
    email: 'a'
  };

  creditCard = {
    number: '',
    type: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: '',
    docType: '',
    docNumber: ''
  };

  wallet = {
    docType: '',
    docNumber: '',
    phoneNumber: '',
    provider: ''
  };

  paymentMethod = '';
  documentTypes = ['DNI', 'RUT', 'Pasaporte', 'Carnet de Extranjería'];
  months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years = ['2024', '2025', '2026', '2027', '2028'];
  acceptTerms = false;

  payButtonDisabled = true;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    const state = this.dataService.getState();
    this.tickets = state.tickets || [];
    this.purchase = state.purchase || {};
    this.showtime = state.showtime || {};
    this.movie = state.movie || {};
    this.amount = state.amount || 0;
    this.selectedSeats = state.selectedSeats || [];
  }

  getSelectedSeatNames(): string {
    return this.selectedSeats.map(seat => seat.name).join(', ');
  }

  getTicketType(ticket: any): string {
    return ticket.ticket_type == 'general' ? 'General' : ticket.ticket_type == 'kids' ? 'Niño' : 'Adulto mayor';
  }

  getSeatName(ticket: any): string {
    return this.selectedSeats.find(seat => seat.id == ticket.seat).name;
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

  toggleSummary(): void {
    this.showSummary = !this.showSummary;
  }

  onPaymentMethodChange(event: any): void {
    this.paymentMethod = event.target.value;
  }

  onDocTypeChange(event: any): void {
    this.creditCard.docType = event.target.value;
  }

  onWalletDocTypeChange(event: any): void {
    this.wallet.docType = event.target.value;
  }

  isDocNumberInvalid(): boolean {
    const docType = this.creditCard.docType;
    const docNumber = this.creditCard.docNumber;

    if (docType === 'DNI' && docNumber.length !== 8) {
      return true;
    }
    if (docType === 'RUT' && docNumber.length !== 9) {
      return true;
    }
    if ((docType === 'Pasaporte' || docType === 'Carnet de Extranjería') && docNumber.length > 20) {
      return true;
    }
    return false;
  }

  isWalletDocNumberInvalid(): boolean {
    const docType = this.wallet.docType;
    const docNumber = this.wallet.docNumber;

    if (docType === 'DNI' && docNumber.length !== 8) {
      return true;
    }
    if (docType === 'RUT' && docNumber.length !== 9) {
      return true;
    }
    if ((docType === 'Pasaporte' || docType === 'Carnet de Extranjería') && docNumber.length > 20) {
      return true;
    }
    return false;
  }

  isPhoneNumberInvalid(): boolean {
    return this.wallet.phoneNumber.length !== 9;
  }

  isCvcInvalid(): boolean {
    return this.creditCard.cvc.length !== ( 3 || 4);
  }

  isCardNumberInvalid(): boolean {
    return this.creditCard.number.length !== 16;
  }

  changePayButtonState(): void {
    this.payButtonDisabled = !this.payButtonDisabled;
  }

  onSubmit(): void {
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log('Formulario enviado');
    this.router.navigate(['/home']);
  }
}
