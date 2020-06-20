import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnoService {

  constructor() { }

  getAno(): number {
    return new Date().getFullYear();
  }
}
