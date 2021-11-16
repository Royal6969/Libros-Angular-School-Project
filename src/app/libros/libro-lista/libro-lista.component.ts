import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LIBROS } from 'src/app/mocks/libro-mock';
import { LibroObservableService } from 'src/app/servicios/libro-observable.service';
import { LibroService } from 'src/app/servicios/libro.service';
import { LoggerService } from 'src/app/servicios/logger.service';
import { LibroModel } from '../../interfaces/libro-model';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css']
})

export class LibroListaComponent implements OnInit {

  libros: LibroModel[] = [];

  // observableSubs: Observable<LibroModel[]> | undefined; // esto no sería así
  observableSubs: Subscription | undefined;

  constructor(
    // private libroService: LibroService,
    private loggerService: LoggerService,
    private libroObservableService : LibroObservableService
  ) { }

  ngOnInit(): void {
    // this.libros = LIBROS;
    // this.libros = this.libroService.getLibros();
    // this.libroService.getLibros().then((libros) => this.libros = libros);
    
    // this.libroService.getLibros()
    //   .then((libros) => {
    //     this.loggerService.log("Ejecución del 1º then");

    //     return libros;
    //   })
    //   .then((libros) => {
    //     this.loggerService.log("Ejecución del 2º then");

    //     return new Promise<LibroModel[]>((resolve, reject) => {
    //       this.loggerService.log("Inicio ejecutor (Promise del 2º then)");

    //       setTimeout(() => {
    //         this.loggerService.log("Fin ejecutor (Promise del 2º then)");

    //         resolve(libros);
    //       }, 5000);
    //     })
    //   })
    //   .then((libros) => {
    //     this.loggerService.log("Ejecución del 3º then");
    //     this.libros = LIBROS;
    //   })

    this.observableSubs = this.libroObservableService.getLibros()
      .subscribe(
        (libros) => this.libros = libros,
        (error) => console.log(error),
        () => console.log("this.libroObservableService.getLibros() FINALIZADO")
      );
  }

  ngOnDestroy(): void {
    if(this.observableSubs){
      this.observableSubs.unsubscribe();
    }
  }

}
