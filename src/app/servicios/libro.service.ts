import { Injectable } from '@angular/core';
import { LibroModel } from '../interfaces/libro-model';
import { LIBROS } from '../mocks/libro-mock';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})

export class LibroService {

  constructor(
    private loggerService: LoggerService
  ) { }

  // getLibros() {
  //   this.loggerService.log("Llamada realizada sobre LibroService.getLibros");

  //   return LIBROS;
  // }

  getLibros(): Promise<LibroModel[]> {
    
    return new Promise<LibroModel[]>( (resolve, reject) => {
    
      this.loggerService.log("Inicio ejecutor (Promise de LibroService.getLibros())");
    
      setTimeout(() => {
        this.loggerService.log("Fin ejecutor (Promise de LibroService.getLibros())");
        
        resolve(LIBROS);
      }, 5000);
    });
  }
}
