import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LibroModel } from '../interfaces/libro-model';
import { LIBROS } from '../mocks/libro-mock';

@Injectable({
  providedIn: 'root'
})
export class LibroObservableService {

  libros: LibroModel[] = [];

  constructor() { }

  getLibros(): Observable<LibroModel[]> {
    return new Observable<LibroModel[]>((observer) => {
      
      let libros: LibroModel[] = [];
      observer.next([]);

      LIBROS.forEach((libro, index) => {
        setTimeout(() => {
          libros.push(libro);
          observer.next(libros);
        }, (index + 1) * 1500);
      });
      
      setTimeout(() => {
        observer.complete();
      }, (LIBROS.length + 1) * 1500);
    });
  }
  
}
