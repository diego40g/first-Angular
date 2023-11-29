import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messageSuccess(title: string, message: string){
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      confirmButtonText: 'Cool'
    })
  }
  messageWarning(title: string, message: string){
    Swal.fire({
      icon: 'warning',
      title: title,
      text: message,
    })
  }
  messageError(title: string, error: string){
    Swal.fire({
      icon: 'error',
      title: title,
      text: `Do you want to continue ${error}?`,
    })
  }
}
