import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LibroModel } from 'src/app/interfaces/libro-model';
import { LIBROS } from 'src/app/mocks/libro-mock';

@Component({
  selector: 'app-libro-imagenes',
  templateUrl: './libro-imagenes.component.html',
  styleUrls: ['./libro-imagenes.component.css']
})
export class LibroImagenesComponent implements OnInit {

  idLibro: number | undefined;
  
  libro: LibroModel | undefined;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.paramMap
      .subscribe((paramMaps: ParamMap) => {
        this.idLibro = Number(paramMaps.get('id'));
        
        let idLibro = Number(paramMaps.get('id'));
        this.libro = LIBROS[idLibro];
      })
  }

}
