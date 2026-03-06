import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = new Subject()
  modalMessage = new Subject() // Separate subject for modal product selection

  constructor() { }

  sendMessage(product: Curso):void{
    this.message.next(product);
  }

  // Method to send product for modal display (separate from cart)
  sendModalProduct(product: Curso): void {
    this.modalMessage.next(product);
  }

  getMessage(): Observable<any>{
    return this.message.asObservable();
  }

  getModalMessage(): Observable<any> {
    return this.modalMessage.asObservable();
  }
}
