import { Component, OnInit } from '@angular/core';
import { LibroModel } from 'src/app/interfaces/libro-model';
import { LIBROS } from 'src/app/mocks/libro-mock';

@Component({
  selector: 'app-autor-lista',
  templateUrl: './autor-lista.component.html',
  styleUrls: ['./autor-lista.component.css']
})
export class AutorListaComponent implements OnInit {

  autoresLibros: LibroModel[] = [];
  autores: Set<String> = new Set();

  constructor() { }

  ngOnInit(): void {
    this.autoresLibros = LIBROS;

    for(let i=0; i<this.autoresLibros.length; i++){
      this.autores.add(this.autoresLibros[i].autor);
    }
  }

}
