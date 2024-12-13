import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private state: any = {};

  setState(state: any): void {
    this.state = state;
  }

  getState(): any {
    return this.state;
  }
}
